import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-sage text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 mb-12 border-b border-white/20 items-start">
          {/* Column 1: Logo */}
          <div className="flex justify-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/logos/hartfieldLogoWhite.png"
                alt="Harthfield Holdings"
                width={200}
                height={67}
              />
            </Link>
          </div>

          {/* Column 2: Tagline */}
          <div className="text-center">
            <p className="text-sm leading-relaxed mb-4">
              Building Legacies.<br />
              Creating Places to Call Home.
            </p>
            <div className="w-12 h-px bg-white mx-auto mb-3"></div>
            <p className="text-xs uppercase tracking-wider">
              Brentwood, Tennessee
            </p>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-base font-medium uppercase tracking-wider mb-6 text-white">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-base font-medium uppercase tracking-wider mb-6 text-white">
              Connect
            </h4>
            <div className="space-y-3 mb-8">
              <p className="text-sm text-white/70">
                <a href="mailto:mcleme9@gmail.com" className="hover:text-white transition-colors">
                   info@harthfield.com
                </a>
              </p>
              <p className="text-sm text-white/70">
                <a href="tel:+6158995100" className="hover:text-white transition-colors">
                  (615) 899-5100
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61589155873931"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={32} />
              </a>
              <button
                className="text-white hover:text-white/70 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={32} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div>
          <p className="text-sm text-white/70 text-center">
            © {new Date().getFullYear()} Harthfield Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
