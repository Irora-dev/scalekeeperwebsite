import Link from 'next/link';

export default function PickyEaterCallout() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Dark background with scale pattern */}
      <div className="absolute inset-0 bg-background-dark" />
      <div className="absolute inset-0 scale-pattern opacity-30" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-section/50 via-transparent to-background-section/50" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built for <span className="gradient-text">Picky Eaters</span> 🐍
            </h2>

            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              We know the anxiety of a ball python that won&apos;t eat. That&apos;s why we built features
              specifically for keepers of difficult feeders.
            </p>

            <div className="bg-background-section/80 rounded-2xl p-6 md:p-8 border border-text-muted/10 mb-8">
              <p className="text-warning-amber font-medium mb-4">
                Meet the &ldquo;Udon Feature&rdquo; — named after a particularly stubborn ball python
                who inspired us to build better tools for picky eater management.
              </p>

              <ul className="space-y-3 text-text-secondary">
                {[
                  'See exactly how many days since their last successful meal',
                  'Weight chart with feeding events overlaid shows if they\'re actually losing weight',
                  'Automatic insights: "Udon has maintained weight during this food strike—no cause for concern yet"',
                  'Track feeding response: Struck immediately? Hesitant? Refused entirely?',
                  'Regurgitation logging with automatic extended rest scheduling',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent-lime mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="#demo" className="btn-primary">
              See It In Action
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Visual Comparison */}
          <div className="space-y-6">
            {/* The Old Way */}
            <div className="relative">
              <div className="absolute -left-4 top-4 bottom-4 w-1 bg-danger-red/50 rounded-full" />
              <div className="bg-background-section/60 rounded-2xl p-6 border border-danger-red/20">
                <h3 className="text-danger-red font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  The Old Way
                </h3>
                <div className="bg-background-dark/50 rounded-lg p-4 font-mono text-sm text-text-muted">
                  <p className="line-through opacity-60">Udon - fed 3/15?? refused</p>
                  <p className="line-through opacity-60">Udon - 3/22 refused again</p>
                  <p>Udon - ??? last ate sometime in March?</p>
                  <p className="text-danger-red mt-2">Weight: never tracked 😰</p>
                </div>
              </div>
            </div>

            {/* The ScaleKeeper Way */}
            <div className="relative">
              <div className="absolute -left-4 top-4 bottom-4 w-1 bg-accent-lime rounded-full" />
              <div className="bg-background-section/60 rounded-2xl p-6 border border-accent-lime/20">
                <h3 className="text-accent-lime font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  The ScaleKeeper Way
                </h3>
                <div className="bg-background-dark/50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary font-medium">Udon</span>
                    <span className="text-warning-amber text-sm">Last ate: 23 days ago</span>
                  </div>
                  <div className="h-12 flex items-end gap-1">
                    {[85, 88, 86, 87, 85, 86, 84, 85, 83, 84].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-accent-lime/60 rounded-t"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-success-green text-sm">
                    ✓ Weight stable at 1,247g — no cause for concern
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
