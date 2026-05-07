import Image from 'next/image';
import ContactForm from '@/components/sections/ContactForm';
import { getImageById } from '@/lib/db/properties';

export default async function Home() {
  // Fetch specific hero image by ID
  const heroImage = await getImageById(1);

  return (
    <div className="min-h-screen bg-soft-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-charcoal mb-6">
            Harthfield Holdings
          </h1>
          <p className="text-xl text-sage mb-8 font-medium">
            Building Legacies. Creating Places to Call Home.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Based in Brentwood, Tennessee, we specialize in real estate investments, custom home building,
            property management, and land development. We create refined spaces rooted in quality and trust.
          </p>
        </div>

        {/* Featured Project Image */}
        {heroImage ? (
          <div className="relative w-full aspect-[16/10] overflow-hidden">
            <Image
              src={heroImage.Url}
              alt={heroImage.AltText || 'Featured Harthfield Holdings project'}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        ) : (
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-limestone flex items-center justify-center">
            <p className="text-charcoal">No featured image available</p>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section className="bg-limestone py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-4">
            Get in Touch
          </h2>
          <p className="text-charcoal mb-12">
            Interested in learning more or have a property in mind? Let's start a conversation.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
