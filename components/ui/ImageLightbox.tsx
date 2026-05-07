'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type ImageLightboxProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  projectTitle: string;
};

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  projectTitle,
}: ImageLightboxProps) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.90)' }}
    >
      {/* Close button - click outside image */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close lightbox"
      />

      {/* Image container */}
      <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`${projectTitle} - Photo ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Close X button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center bg-white hover:bg-sage text-charcoal hover:text-white transition-all z-10 rounded-full shadow-lg cursor-pointer"
          aria-label="Close"
        >
          <X size={24} strokeWidth={2} />
        </button>

        {/* Previous button */}
        {currentIndex > 0 && (
          <button
            onClick={onPrevious}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white hover:bg-sage text-charcoal hover:text-white transition-all z-10 rounded-full shadow-lg cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>
        )}

        {/* Next button */}
        {currentIndex < images.length - 1 && (
          <button
            onClick={onNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white hover:bg-sage text-charcoal hover:text-white transition-all z-10 rounded-full shadow-lg cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>
        )}

        {/* Image counter */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full text-black text-sm font-medium z-10 shadow-lg">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
