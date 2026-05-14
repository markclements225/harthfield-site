'use client';

import Image from 'next/image';
import ContactForm from '@/components/sections/ContactForm';
import ValuesSection from '@/components/sections/ValuesSection';
import FeaturedProject from '@/components/sections/FeaturedProject';
import type { PropertyImage } from '@/lib/db/properties';

type HomePageClientProps = {
  heroImage: PropertyImage | null;
  featuredProjectImage: PropertyImage | null;
};

export default function HomePageClient({
  heroImage,
  featuredProjectImage,
}: HomePageClientProps) {
  return (
    <div className="min-h-screen bg-soft-white">
      {/* Full-screen hero with overlay text */}
      <section className="relative h-screen w-full">
        {/* Hero Image - Full Screen */}
        {heroImage ? (
          <div className="absolute inset-0">
            <Image
              src={heroImage.Url}
              alt={heroImage.AltText || 'Featured Harthfield Holdings project'}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-charcoal/30" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-limestone flex items-center justify-center">
            <p className="text-charcoal">No featured image available</p>
          </div>
        )}

        {/* Hero Text Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-white mb-8 uppercase tracking-wide">
              Harthfield Holdings
            </h1>
            <p className="text-3xl md:text-4xl font-serif font-light text-white mb-6 leading-relaxed">
              Building Legacies.
            </p>
            <p className="text-xl md:text-2xl font-serif font-light italic text-white/90 mb-8">
              Creating places to call home.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      {featuredProjectImage && (
        <FeaturedProject
          imageUrl={featuredProjectImage.Url}
          altText={featuredProjectImage.AltText || 'Featured Harthfield Holdings project'}
        />
      )}

      {/* Values Section */}
      <ValuesSection />

      {/* Contact Section */}
      <section className="bg-soft-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-4">
            Get in Touch
          </h2>
          <p className="text-charcoal mb-12">
            Interested in learning more or have a property in mind? Let&apos;s start a conversation.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
