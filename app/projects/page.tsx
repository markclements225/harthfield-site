import ProjectGallery from '@/components/sections/ProjectGallery';
import { getFeaturedPropertyImages } from '@/lib/db/properties';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Projects | Harthfield Holdings - Brentwood Custom Homes",
  description: "Browse our portfolio of custom homes and real estate projects in Brentwood, Tennessee. Quality craftsmanship and attention to detail in every property.",
  openGraph: {
    title: "Our Projects | Harthfield Holdings - Brentwood Custom Homes",
    description: "Browse our portfolio of custom homes and real estate projects in Brentwood, Tennessee. Quality craftsmanship and attention to detail in every property.",
    url: "https://harthfield.com/projects",
    siteName: "Harthfield Holdings",
    images: [
      {
        url: "https://harthfield.com/images/logos/hartfieldLogoMain.png",
        width: 1200,
        height: 630,
        alt: "Harthfield Holdings Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function ProjectsPage() {
  // Fetch all featured images from property ID 1
  const featuredImages = await getFeaturedPropertyImages(1);

  return (
    <div className="min-h-screen bg-soft-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-charcoal mb-4">
            Projects
          </h1>
          <p className="text-lg text-charcoal">
            Properties we've transformed across Tennessee.
          </p>
        </div>

        {/* Project Gallery */}
        {featuredImages.length > 0 ? (
          <div id="alamo-road">
            <ProjectGallery
              images={featuredImages}
              projectTitle="Brenthaven / Crocket Hills Neighborhood"
              projectLocation="Brentwood, TN"
              projectDescription="A complete transformation of a Brentwood property."
            />
          </div>
        ) : (
          <p className="text-charcoal">No project images available.</p>
        )}
      </div>
    </div>
  );
}
