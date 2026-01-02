'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#community', label: 'Community' },
    { href: '#blog', label: 'Blog' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-dark/95 backdrop-blur-md border-b border-text-muted/10'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
                <path
                  d="M20 4C14 4 10 8 8 12C6 16 6 22 10 26C14 30 20 32 24 30C28 28 32 24 32 18C32 12 28 8 24 6C22 5 21 4.5 20 4Z"
                  className="fill-accent-lime group-hover:fill-accent-green transition-colors"
                />
                <path
                  d="M20 8C16 8 13 11 12 14C11 17 12 21 15 24C18 27 22 28 25 26C28 24 30 20 29 16C28 12 25 9 22 8C21 7.5 20.5 7.5 20 8Z"
                  className="fill-primary-green"
                />
                <circle cx="16" cy="14" r="2" className="fill-background-dark" />
                <path
                  d="M26 20Q28 22 26 24Q24 26 22 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="stroke-background-dark"
                  fill="none"
                />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-bold tracking-wide">
              Scale<span className="text-accent-lime">Keeper</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#trial" className="btn-primary text-sm">
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="pt-4 space-y-4">
            <Link
              href="#trial"
              className="btn-primary w-full text-center text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Free Trial
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-text-secondary hover:text-text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
