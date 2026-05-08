import ProjectGallery from '@/components/sections/ProjectGallery';
import { getFeaturedPropertyImages } from '@/lib/db/properties';

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
