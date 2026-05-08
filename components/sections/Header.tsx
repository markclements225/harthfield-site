import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b border-clay bg-white">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/images/logos/hartfieldLogoTransparent.png"
            alt="Harthfield Holdings"
            width={180}
            height={60}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-xs font-medium text-charcoal hover:text-sage transition-colors uppercase tracking-wider"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-xs font-medium text-charcoal hover:text-sage transition-colors uppercase tracking-wider"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-xs font-medium text-charcoal hover:text-sage transition-colors uppercase tracking-wider"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
