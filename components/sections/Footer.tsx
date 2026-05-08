import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-sage text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-12 mb-12 border-b border-white/20">
          {/* Left: Brand */}
          <div className="text-center">
            <h3 className="text-base font-serif font-medium mb-6 uppercase tracking-wider">
              HARTHFIELD HOLDINGS
            </h3>
            <div>
              <p className="text-sm leading-relaxed mb-4">
                Building Legacies.<br />
                Creating Places to Call Home.
              </p>
              <div className="w-12 h-px bg-white mx-auto mb-3"></div>
              <p className="text-xs uppercase tracking-wider">
                Brentwood, Tennessee
              </p>
            </div>
          </div>

          {/* Center: Navigation */}
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

          {/* Right: Contact & Social */}
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
              <button
                className="w-10 h-10 flex items-center justify-center border border-white/30 hover:border-white transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </button>
              <button
                className="w-10 h-10 flex items-center justify-center border border-white/30 hover:border-white transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
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
