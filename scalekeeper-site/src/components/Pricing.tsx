'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    tagline: 'Perfect for getting started',
    cta: 'Start Free',
    highlighted: false,
    features: [
      'Up to 5 animals',
      'Basic feeding tracking',
      'Weight logging',
      'Photo storage (100 photos)',
      'Community support',
    ],
  },
  {
    name: 'Keeper',
    price: { monthly: 12, yearly: 99 },
    tagline: 'For serious hobbyists',
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Unlimited animals',
      'Full feeding management',
      'Weight + length tracking',
      'Health & medication reminders',
      'Unlimited photo storage',
      'IoT sensor integration (basic)',
      'Export & backup',
      'Priority support',
    ],
  },
  {
    name: 'Breeder',
    price: { monthly: 35, yearly: 299 },
    tagline: 'For hobby breeders',
    cta: 'Start Free Trial',
    highlighted: false,
    features: [
      'Everything in Keeper, plus:',
      'Advanced genetics calculator',
      'Breeding timeline & predictions',
      'Clutch & incubation tracking',
      'Brumation management',
      'Offspring lineage records',
      'Marketplace integration',
      'Expo & inventory tools',
      'PDF lineage certificates',
    ],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-background-section/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple Pricing for <span className="gradient-text">Every Keeper</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Start free. Upgrade when you&apos;re ready. No surprises.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm ${!isYearly ? 'text-text-primary' : 'text-text-muted'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 bg-background-dark rounded-full border border-text-muted/20 transition-colors"
          >
            <div
              className={`absolute top-1 w-5 h-5 bg-accent-lime rounded-full transition-all ${
                isYearly ? 'left-8' : 'left-1'
              }`}
            />
          </button>
          <span className={`text-sm ${isYearly ? 'text-text-primary' : 'text-text-muted'}`}>
            Yearly
            <span className="ml-2 text-accent-lime text-xs">Save up to 31%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 md:p-8 transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-primary-green/20 to-background-section border-2 border-accent-lime/50 scale-105 shadow-xl shadow-accent-lime/10'
                  : 'bg-background-section/80 border border-text-muted/10'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent-lime text-background-dark text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-text-muted text-sm mb-4">{plan.tagline}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                {plan.price.monthly > 0 && (
                  <span className="text-text-muted text-sm">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                )}
                {isYearly && plan.price.monthly > 0 && (
                  <p className="text-accent-lime text-xs mt-1">
                    Save {Math.round((1 - plan.price.yearly / (plan.price.monthly * 12)) * 100)}%
                  </p>
                )}
              </div>

              {/* CTA */}
              <Link
                href="#trial"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? 'btn-primary'
                    : 'bg-background-dark border border-text-muted/20 hover:border-accent-lime/50 text-text-primary'
                }`}
              >
                {plan.cta}
              </Link>

              {/* Trial Note */}
              {plan.price.monthly > 0 && (
                <p className="text-text-muted text-xs text-center mt-3">14-day free trial</p>
              )}

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-5 h-5 text-accent-lime shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise Note */}
        <p className="text-center text-text-muted mt-12">
          Need multi-user access or API integration?{' '}
          <Link href="#contact" className="text-accent-lime hover:underline">
            Contact us for Professional pricing →
          </Link>
        </p>
      </div>
    </section>
  );
}
