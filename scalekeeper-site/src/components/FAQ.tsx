'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Is my data safe and private?',
    answer: "Absolutely. Your collection data is encrypted, stored securely in the cloud, and never shared with anyone. You can export or delete your data at any time. We're keepers ourselves—we know how valuable your breeding records are.",
  },
  {
    question: 'Can I import my existing spreadsheet data?',
    answer: 'Yes! We support CSV imports from Excel and Google Sheets. Our import wizard maps your columns automatically, and we\'ll help you clean up any messy data. Most keepers are fully migrated within 30 minutes.',
  },
  {
    question: 'Does it work offline?',
    answer: "Yes. Log feedings, weights, and notes even without internet. Everything syncs automatically when you're back online. Perfect for reptile rooms without WiFi.",
  },
  {
    question: 'What IoT sensors do you support?',
    answer: 'We integrate with Govee, SensorPush, Inkbird, and other popular WiFi temperature/humidity sensors. Manual logging is always available too. Full smart sensor support is included in Keeper and Breeder plans.',
  },
  {
    question: 'Can I use it for more than reptiles?',
    answer: "While we're optimized for reptiles and amphibians, keepers use ScaleKeeper for tarantulas, scorpions, dart frogs, and other exotic pets. The core tracking features work great for any animal that needs scheduled care.",
  },
  {
    question: 'What if I need to cancel?',
    answer: "Cancel anytime from your account settings—no hoops to jump through. You'll keep access until the end of your billing period, and you can always export your data. We also offer a 30-day money-back guarantee.",
  },
  {
    question: 'Is there a desktop version?',
    answer: "ScaleKeeper is mobile-first (iOS and Android), but there's also a full-featured web app at app.scalekeeper.com. Your data syncs across all devices automatically.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 relative nebula-pattern">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Questions? <span className="gradient-text">We&apos;ve Got Answers</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-nebula-lavender/10 rounded-xl overflow-hidden bg-card-bg/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-nebula-purple/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-nebula-lavender shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-nebula-lavender/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
