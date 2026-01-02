import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 pb-16 overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb-magenta w-96 h-96 top-1/4 left-1/4" />
      <div className="orb-purple w-80 h-80 bottom-1/3 right-1/4" />
      <div className="orb-cyan w-64 h-64 top-1/2 right-1/3" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Text Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-bg/80 rounded-full border border-nebula-lavender/20">
              <div className="flex text-nebula-gold text-sm">
                {'★★★★★'}
              </div>
              <span className="text-nebula-lavender/80 text-sm">
                &ldquo;Finally, an app that actually understands reptile keeping&rdquo; — 2,400+ keepers
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              The App That Knows Your{' '}
              <span className="gradient-text">Animals Like You Do</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-nebula-lavender/80 max-w-2xl leading-relaxed">
              Your collection deserves better than spreadsheets. Track feedings, weights, sheds, and health—all in one beautiful app.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#download" className="btn-primary text-lg">
                <span>🦎</span>
                <span>Download For Free</span>
              </Link>
              <Link href="#benefits" className="btn-secondary text-lg">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap gap-6 text-nebula-lavender/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-nebula-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free to download
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-nebula-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                iOS & Android
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-nebula-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Upgrade anytime
              </span>
            </div>
          </div>

          {/* App Mockup - 40% */}
          <div className="lg:col-span-2 relative">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative mx-auto w-64 md:w-72 lg:w-80">
                {/* Edge glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-nebula-purple/30 via-nebula-cyan/20 to-nebula-magenta/25 rounded-[3.5rem] blur-2xl opacity-60" />
                <div className="absolute -inset-1 bg-nebula-purple/15 rounded-[3rem] blur-xl" />

                {/* Phone body */}
                <div className="relative bg-cosmic-deep rounded-[2.5rem] p-2 shadow-2xl border border-nebula-lavender/20">
                  {/* Screen */}
                  <div className="bg-cosmic-black rounded-[2rem] overflow-hidden aspect-[9/19]">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-6 py-2 text-xs text-nebula-lavender/60">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-nebula-lavender/40 rounded-sm" />
                        <div className="w-6 h-3 bg-nebula-cyan rounded-sm" />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="px-4 py-2 space-y-3">
                      {/* Header */}
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">My Collection</h3>
                        <div className="w-8 h-8 bg-nebula-purple/20 rounded-full flex items-center justify-center">
                          <span className="text-nebula-cyan text-lg">+</span>
                        </div>
                      </div>

                      {/* Animal Cards */}
                      {[
                        { name: 'Udon', species: 'Ball Python', lastFed: '2 days ago', status: 'good' },
                        { name: 'Soba', species: 'Ball Python', lastFed: '23 days ago', status: 'warning' },
                        { name: 'Ramen', species: 'Corn Snake', lastFed: '5 days ago', status: 'good' },
                      ].map((animal, i) => (
                        <div key={i} className="bg-card-bg/80 rounded-xl p-3 border border-nebula-lavender/10">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-nebula-purple/30 rounded-full flex items-center justify-center text-xl">
                              🐍
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium text-sm">{animal.name}</p>
                                  <p className="text-nebula-lavender/50 text-xs">{animal.species}</p>
                                </div>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                  animal.status === 'warning'
                                    ? 'bg-nebula-gold/20 text-nebula-gold'
                                    : 'bg-nebula-cyan/20 text-nebula-cyan'
                                }`}>
                                  {animal.lastFed}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Weight Chart Preview */}
                      <div className="bg-card-bg/80 rounded-xl p-3 border border-nebula-lavender/10">
                        <p className="text-xs text-nebula-lavender/50 mb-2">Weight Trend - Udon</p>
                        <div className="h-16 flex items-end gap-1">
                          {[40, 45, 42, 48, 52, 50, 55, 53, 58, 56].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                              <div
                                className="w-full bg-nebula-cyan/60 rounded-t"
                                style={{ height: `${h}%` }}
                              />
                              {[2, 5, 8].includes(i) && (
                                <span className="text-nebula-gold text-[8px]">★</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-cosmic-deep rounded-b-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
