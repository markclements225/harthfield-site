import Image from 'next/image';
import Link from 'next/link';

type FeaturedProjectProps = {
  imageUrl: string;
  altText: string;
};

export default function FeaturedProject({ imageUrl, altText }: FeaturedProjectProps) {
  return (
    <section className="py-24 bg-limestone">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden lg:col-span-3">
            <Image
              src={imageUrl}
              alt={altText}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-wider text-charcoal mb-3">
              Featured Project
            </p>
            <div className="w-12 h-px bg-sage mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-4">
              BRENTHAVEN / CROCKET HILLS NEIGHBORHOOD
            </h2>
            <p className="text-xs uppercase tracking-wider text-charcoal mb-3">
              BRENTWOOD, TENNESSEE
            </p>
            <p className="text-sm text-charcoal leading-relaxed mb-6">
              A refined custom home showcasing timeless architecture and meticulous craftsmanship in the heart of Brentwood.
            </p>
            <Link
              href="/projects#alamo-road"
              className="inline-block px-6 py-2.5 border border-charcoal text-charcoal text-xs uppercase tracking-wider hover:bg-sage hover:text-white hover:border-sage transition-colors"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
