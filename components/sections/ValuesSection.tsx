import { Shield, Hammer, Leaf, Home } from 'lucide-react';
import IconCard from '@/components/ui/IconCard';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with transparency and honesty in every project, building trust through consistent ethical practices.',
  },
  {
    icon: Hammer,
    title: 'Craftsmanship',
    description: 'Every detail matters. We take pride in delivering quality work that stands the test of time.',
  },
  {
    icon: Leaf,
    title: 'Stewardship',
    description: 'We honor the communities we serve, creating spaces that enhance their surroundings.',
  },
  {
    icon: Home,
    title: 'Legacy',
    description: 'Building more than houses—we create homes where families will build memories for generations.',
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-4">
            The Harthfield Difference
          </h2>
          <p className="text-charcoal max-w-2xl mx-auto">
            Our commitment to excellence is built on timeless principles.
          </p>
        </div>

        {/* Icon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 divide-x-0 lg:divide-x divide-clay">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`lg:px-8 ${index === 0 ? 'lg:pl-0 lg:pr-8' : ''} ${index === values.length - 1 ? 'lg:pr-0 lg:pl-8' : ''}`}
            >
              <IconCard
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
