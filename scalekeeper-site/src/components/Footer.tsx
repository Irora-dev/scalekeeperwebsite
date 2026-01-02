import Link from 'next/link';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Changelog', href: '#changelog' },
  ],
  resources: [
    { label: 'Help Center', href: '#help' },
    { label: 'Blog', href: '#blog' },
    { label: 'Guides', href: '#guides' },
    { label: 'API Docs', href: '#api' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
    { label: 'Press', href: '#press' },
  ],
  connect: [
    { label: 'Twitter', href: 'https://twitter.com/scalekeeper' },
    { label: 'Instagram', href: 'https://instagram.com/scalekeeper' },
    { label: 'YouTube', href: 'https://youtube.com/scalekeeper' },
    { label: 'Discord', href: 'https://discord.gg/scalekeeper' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-cosmic-black border-t border-nebula-lavender/10">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦎</span>
              <span className="text-lg font-bold">
                Scale<span className="text-nebula-cyan">Keeper</span>
              </span>
            </Link>
            <p className="text-nebula-lavender/50 text-sm leading-relaxed max-w-xs">
              The complete herpetoculture management platform. Track, monitor, and care for your
              collection with confidence.
            </p>

            {/* App Store Badges */}
            <div className="flex gap-3 mt-6">
              <Link
                href="#ios"
                className="flex items-center gap-2 px-4 py-2 bg-card-bg border border-nebula-lavender/10 rounded-lg hover:border-nebula-purple/30 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-nebula-lavender/40 leading-none">Download on the</p>
                  <p className="text-sm font-semibold leading-tight">App Store</p>
                </div>
              </Link>
              <Link
                href="#android"
                className="flex items-center gap-2 px-4 py-2 bg-card-bg border border-nebula-lavender/10 rounded-lg hover:border-nebula-purple/30 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zm15 0v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zM7 21h10V3H7v18z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-nebula-lavender/40 leading-none">Get it on</p>
                  <p className="text-sm font-semibold leading-tight">Google Play</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-nebula-lavender/50 hover:text-nebula-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-nebula-lavender/50 hover:text-nebula-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-nebula-lavender/50 hover:text-nebula-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-nebula-lavender/50 hover:text-nebula-cyan transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-nebula-lavender/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-nebula-lavender/40 text-sm">
            &copy; {new Date().getFullYear()} ScaleKeeper. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link href="#privacy" className="text-nebula-lavender/40 hover:text-nebula-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-nebula-lavender/40 hover:text-nebula-cyan transition-colors">
              Terms of Service
            </Link>
            <Link href="#cookies" className="text-nebula-lavender/40 hover:text-nebula-cyan transition-colors">
              Cookie Policy
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-2 text-nebula-lavender/40 text-xs">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            256-bit SSL Secured
          </div>
        </div>
      </div>
    </footer>
  );
}
