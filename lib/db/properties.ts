import { supabase } from '@/lib/db';

export type PropertyImage = {
  propertyImageID: number;
  propertyID: number;
  Url: string;
  Filename: string;
  Featured: boolean;
  AltText: string;
  Description: string;
  createdDate: string;
};

/**
 * Fetch all images for a specific property
 */
export async function getPropertyImages(propertyID: number): Promise<PropertyImage[]> {
  const { data, error } = await supabase
    .from('PropertyImages')
    .select('*')
    .eq('propertyID', propertyID)
    .order('propertyImageID', { ascending: true });

  if (error) {
    console.error('Error fetching property images:', error);
    return [];
  }

  return data || [];
}

/**
 * Fetch featured images for a specific property
 */
export async function getFeaturedPropertyImages(propertyID: number): Promise<PropertyImage[]> {
  const { data, error } = await supabase
    .from('PropertyImages')
    .select('*')
    .eq('propertyID', propertyID)
    .eq('Featured', true)
    .order('propertyImageID', { ascending: true });

  if (error) {
    console.error('Error fetching featured property images:', error);
    return [];
  }

  return data || [];
}

/**
 * Fetch a single random featured image for a property (for homepage hero)
 */
export async function getRandomFeaturedImage(propertyID: number): Promise<PropertyImage | null> {
  const images = await getFeaturedPropertyImages(propertyID);

  if (images.length === 0) {
    return null;
  }

  // Return a random featured image
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

/**
 * Fetch a specific image by its propertyImageID
 */
export async function getImageById(propertyImageID: number): Promise<PropertyImage | null> {
  const { data, error } = await supabase
    .from('PropertyImages')
    .select('*')
    .eq('propertyImageID', propertyImageID)
    .single();

  if (error) {
    console.error('Error fetching image by ID:', error);
    return null;
  }

  return data;
}

/**
 * Fetch the first featured image for a property (consistent hero image)
 * Falls back to any image if no featured images exist
 */
export async function getFirstFeaturedImage(propertyID: number): Promise<PropertyImage | null> {
  // Try to get a featured image first
  const { data: featuredData, error: featuredError } = await supabase
    .from('PropertyImages')
    .select('*')
    .eq('propertyID', propertyID)
    .eq('Featured', true)
    .order('propertyImageID', { ascending: true })
    .limit(1);

  if (featuredError) {
    console.error('Error fetching featured image:', featuredError);
  }

  if (featuredData && featuredData.length > 0) {
    return featuredData[0];
  }

  // Fallback: get any image for this property
  console.log('No featured images found, fetching any image for property', propertyID);
  const { data, error } = await supabase
    .from('PropertyImages')
    .select('*')
    .eq('propertyID', propertyID)
    .order('propertyImageID', { ascending: true })
    .limit(1);

  if (error) {
    console.error('Error fetching property image:', error);
    return null;
  }

  if (!data || data.length === 0) {
    console.error('NO IMAGES FOUND AT ALL for propertyID', propertyID);
    return null;
  }

  return data[0];
}
