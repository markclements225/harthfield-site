'use client';

import { useState } from 'react';
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
  const [layout, setLayout] = useState<1 | 2>(1);

  return (
    <div className="min-h-screen bg-soft-white">
      {/* Layout Toggle Buttons */}
      <div className="absolute top-24 right-6 z-10 flex gap-2">
        <button
          onClick={() => setLayout(1)}
          className={`w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors ${
            layout === 1
              ? 'bg-sage text-white'
              : 'bg-white text-charcoal border border-clay hover:border-sage'
          }`}
        >
          1
        </button>
        <button
          onClick={() => setLayout(2)}
          className={`w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors ${
            layout === 2
              ? 'bg-sage text-white'
              : 'bg-white text-charcoal border border-clay hover:border-sage'
          }`}
        >
          2
        </button>
      </div>

      {/* Layout 1: Full-screen hero with overlay text */}
      {layout === 1 && (
        <>
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
                <h1 className="text-4xl md:text-5xl font-serif font-medium text-white mb-8 uppercase tracking-wide">
                  Harthfield Holdings
                </h1>
                <p className="text-2xl md:text-3xl font-serif font-light text-white mb-6 leading-relaxed">
                  Building Legacies.
                </p>
                <p className="text-lg md:text-xl font-serif font-light italic text-white/90 mb-8">
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
        </>
      )}

      {/* Layout 2: Contained hero with image below text */}
      {layout === 2 && (
        <>
          <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-charcoal mb-8 uppercase tracking-wide">
                Harthfield Holdings
              </h1>
              <p className="text-2xl md:text-3xl font-serif font-light text-charcoal mb-6 leading-relaxed">
                Building Legacies.
              </p>
              <p className="text-lg md:text-xl font-serif font-light italic text-charcoal/80 mb-8">
                Creating places to call home.
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
        </>
      )}
    </div>
  );
}
