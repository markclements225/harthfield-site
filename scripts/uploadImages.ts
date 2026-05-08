/**
 * Upload Images to Cloudflare R2
 *
 * This script uploads images from the local machine to Cloudflare R2 storage.
 * Run with: npx tsx scripts/uploadImages.ts
 */

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'
import { config } from 'dotenv'

// Load environment variables from .env.local
config({ path: '.env.local' })

// Config — fill these in before running
const PROPERTY_ID = 1 // the propertyID from the Property table
const IMAGES_DIR = "/Users/markclement/Desktop/Mark's Stuff/Harthfield/Images/8238 Alamo" // local folder path for regular photos
const FEATURED_DIR = "/Users/markclement/Desktop/Mark's Stuff/Harthfield/Images/8238 Alamo/featured" // local folder path for featured photos
const PROPERTY_SLUG = '8238-alamo-rd'
const SKIP_FEATURED = 148 // Skip the 148 featured images already uploaded
const SKIP_REGULAR = 0 // Don't skip regular images
const TEST_LIMIT = null // Upload all images

const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role key to bypass RLS
)

async function uploadImage(filePath: string, key: string, isFeatured: boolean, order: number) {
  const fileBuffer = fs.readFileSync(filePath)
  const filename = path.basename(filePath)

  // Upload to R2
  await r2.send(new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME!,
    Key: key,
    Body: fileBuffer,
    ContentType: 'image/jpeg',
  }))

  const url = `${process.env.R2_PUBLIC_URL}/${key}`

  // Insert row in Supabase PropertyImages table
  const { error } = await supabase.from('PropertyImages').insert({
    propertyID: PROPERTY_ID,
    Url: url,
    Filename: filename,
    Featured: isFeatured,
    AltText: `${PROPERTY_SLUG} property photo ${order}`,
    Description: isFeatured ? 'Featured property photo' : 'Property photo',
  })

  if (error) {
    console.error(`✗ Failed to insert ${filename}:`, error)
    throw error
  }

  console.log(`✓ ${filename} → ${url}`)
}

async function run() {
  // Upload featured photos first
  const allFeaturedFiles = fs.readdirSync(FEATURED_DIR)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
    .sort()

  const featuredFiles = allFeaturedFiles
    .slice(SKIP_FEATURED || 0)
    .slice(0, TEST_LIMIT || undefined)

  console.log(`Found ${allFeaturedFiles.length} featured images total`)
  console.log(`Skipping first ${SKIP_FEATURED || 0}, uploading ${featuredFiles.length}${TEST_LIMIT ? ` (limited to ${TEST_LIMIT})` : ''}...`)

  for (let i = 0; i < featuredFiles.length; i++) {
    const file = featuredFiles[i]
    const key = `properties/${PROPERTY_SLUG}/featured/${file}`
    const actualOrder = i + 1 + (SKIP_FEATURED || 0)
    await uploadImage(path.join(FEATURED_DIR, file), key, true, actualOrder)
  }

  // Upload remaining photos
  const allRegularFiles = fs.readdirSync(IMAGES_DIR)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
    .sort()

  const regularFiles = allRegularFiles
    .slice(SKIP_REGULAR || 0)
    .slice(0, TEST_LIMIT || undefined)

  console.log(`Found ${allRegularFiles.length} regular images total`)
  console.log(`Skipping first ${SKIP_REGULAR || 0}, uploading ${regularFiles.length}${TEST_LIMIT ? ` (limited to ${TEST_LIMIT})` : ''}...`)

  for (let i = 0; i < regularFiles.length; i++) {
    const file = regularFiles[i]
    const key = `properties/${PROPERTY_SLUG}/${file}`
    const actualOrder = i + 1 + (SKIP_REGULAR || 0)
    await uploadImage(path.join(IMAGES_DIR, file), key, false, actualOrder)
  }

  console.log('✅ All done!')
}

run().catch(console.error)
