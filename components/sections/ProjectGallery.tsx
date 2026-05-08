'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import Button from '@/components/ui/Button';
import type { PropertyImage } from '@/lib/db/properties';

type ProjectGalleryProps = {
  images: PropertyImage[];
  projectTitle: string;
  projectLocation: string;
  projectDescription?: string;
};

const IMAGES_PER_PAGE = 12;

export default function ProjectGallery({
  images,
  projectTitle,
  projectLocation,
  projectDescription,
}: ProjectGalleryProps) {
  const [displayCount, setDisplayCount] = useState(IMAGES_PER_PAGE);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayedImages = images.slice(0, displayCount);
  const hasMore = displayCount < images.length;
  const allImageUrls = images.map((img) => img.Url);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev < images.length - 1 ? prev + 1 : prev
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const loadMore = () => {
    setDisplayCount((prev) => Math.min(prev + IMAGES_PER_PAGE, images.length));
  };

  const showAll = () => {
    setDisplayCount(images.length);
  };

  return (
    <div>
      {/* Project Header */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-2">
          {projectTitle}
        </h2>
        <p className="text-charcoal mb-2">{projectLocation}</p>
        {projectDescription && (
          <p className="text-charcoal">{projectDescription}</p>
        )}
        <p className="text-sm text-sage mt-2">
          {images.length} {images.length === 1 ? 'photo' : 'photos'}
        </p>
      </div>

      {/* Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {displayedImages.map((image, index) => (
          <button
            key={image.propertyImageID}
            className="aspect-[4/3] bg-limestone overflow-hidden hover:opacity-90 transition-opacity relative cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.Url}
              alt={image.AltText || `${projectTitle} - Photo ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>

      {/* Load More / View All Buttons */}
      {hasMore && (
        <div className="flex gap-4 justify-center">
          <Button onClick={loadMore} variant="secondary">
            Load More ({Math.min(IMAGES_PER_PAGE, images.length - displayCount)} more)
          </Button>
          <Button onClick={showAll} variant="primary">
            View All ({images.length})
          </Button>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <ImageLightbox
          images={allImageUrls}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
          projectTitle={projectTitle}
        />
      )}
    </div>
  );
}
