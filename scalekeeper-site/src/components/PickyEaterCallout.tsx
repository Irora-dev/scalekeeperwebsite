import Link from 'next/link';

export default function PickyEaterCallout() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden nebula-pattern">
      {/* Decorative orbs */}
      <div className="orb-magenta w-80 h-80 top-1/4 -left-20" />
      <div className="orb-purple w-64 h-64 bottom-1/4 -right-10" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built for <span className="gradient-text">Picky Eaters</span> 🐍
            </h2>

            <p className="text-nebula-lavender/70 text-lg mb-8 leading-relaxed">
              We know the anxiety of a ball python that won&apos;t eat. That&apos;s why we built features
              specifically for keepers of difficult feeders.
            </p>

            <div className="bg-card-bg/80 rounded-2xl p-6 md:p-8 border border-nebula-lavender/10 mb-8">
              <p className="text-nebula-gold font-medium mb-4">
                Meet the &ldquo;Udon Feature&rdquo; — named after a particularly stubborn ball python
                who inspired us to build better tools for picky eater management.
              </p>

              <ul className="space-y-3 text-nebula-lavender/70">
                {[
                  'See exactly how many days since their last successful meal',
                  'Weight chart with feeding events overlaid shows if they\'re actually losing weight',
                  'Automatic insights: "Udon has maintained weight during this food strike—no cause for concern yet"',
                  'Track feeding response: Struck immediately? Hesitant? Refused entirely?',
                  'Regurgitation logging with automatic extended rest scheduling',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-nebula-cyan mt-1">•</span>
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
              <div className="absolute -left-4 top-4 bottom-4 w-1 bg-nebula-magenta/50 rounded-full" />
              <div className="bg-card-bg/60 rounded-2xl p-6 border border-nebula-magenta/20">
                <h3 className="text-nebula-magenta font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  The Old Way
                </h3>
                <div className="bg-cosmic-black/50 rounded-lg p-4 font-mono text-sm text-nebula-lavender/50">
                  <p className="line-through opacity-60">Udon - fed 3/15?? refused</p>
                  <p className="line-through opacity-60">Udon - 3/22 refused again</p>
                  <p>Udon - ??? last ate sometime in March?</p>
                  <p className="text-nebula-magenta mt-2">Weight: never tracked 😰</p>
                </div>
              </div>
            </div>

            {/* The ScaleKeeper Way */}
            <div className="relative">
              <div className="absolute -left-4 top-4 bottom-4 w-1 bg-nebula-cyan rounded-full" />
              <div className="bg-card-bg/60 rounded-2xl p-6 border border-nebula-cyan/20">
                <h3 className="text-nebula-cyan font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  The ScaleKeeper Way
                </h3>
                <div className="bg-cosmic-black/50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Udon</span>
                    <span className="text-nebula-gold text-sm">Last ate: 23 days ago</span>
                  </div>
                  <div className="h-12 flex items-end gap-1">
                    {[85, 88, 86, 87, 85, 86, 84, 85, 83, 84].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-nebula-cyan/60 rounded-t"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-nebula-cyan text-sm">
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
