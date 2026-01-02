const features = [
  {
    title: 'Intelligent Feeding Tracking',
    description: 'Log feedings in seconds with smart defaults. Track refusals, see hunger duration, and never wonder "when did I last feed them?" again. Batch feeding mode lets you log 20 animals in under 2 minutes.',
    badge: '30-second logging',
    imageAlt: 'Feeding log interface',
  },
  {
    title: 'Growth Tracking That Actually Helps',
    description: 'Beautiful charts that show weight over time with feeding events overlaid. Instantly see if a food strike is causing concerning weight loss—or if it\'s normal seasonal behavior.',
    badge: 'The Udon Feature ⭐',
    imageAlt: 'Weight chart with feeding overlay',
  },
  {
    title: 'Complete Health Records',
    description: 'Track sheds, vet visits, and treatments. Set up medication protocols with automatic reminders. Generate PDF reports for vet visits with one tap.',
    badge: 'Never miss a dose',
    imageAlt: 'Health records interface',
  },
  {
    title: 'Professional Breeding Suite',
    description: 'Genetics calculator, pairing predictions, clutch tracking, and visual breeding timelines. See every pairing from introduction to hatch on a beautiful Gantt chart.',
    badge: 'For serious breeders',
    imageAlt: 'Breeding timeline view',
  },
  {
    title: 'Monitor Every Enclosure',
    description: 'Connect IoT sensors or log manually. Track temps, humidity, and cleaning schedules. Get alerts when conditions drift outside safe ranges.',
    badge: 'IoT ready',
    imageAlt: 'Enclosure monitoring dashboard',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to Keep Them <span className="gradient-text">Thriving</span>
          </h2>
        </div>

        {/* Features */}
        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                {/* Badge */}
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-lime/10 border border-accent-lime/20 rounded-full text-accent-lime text-sm font-medium mb-4">
                  {feature.badge}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>

                <button className="inline-flex items-center gap-2 text-accent-lime hover:text-accent-green transition-colors font-medium">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Visual Placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/10 to-primary-green/10 rounded-2xl blur-2xl" />

                  {/* Feature Screenshot Placeholder */}
                  <div className="relative bg-background-section border border-text-muted/10 rounded-2xl overflow-hidden aspect-video">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4 opacity-30">
                          {index === 0 && '📋'}
                          {index === 1 && '📈'}
                          {index === 2 && '💊'}
                          {index === 3 && '🧬'}
                          {index === 4 && '🌡️'}
                        </div>
                        <p className="text-text-muted text-sm">{feature.imageAlt}</p>
                      </div>
                    </div>

                    {/* Decorative grid */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="grid grid-cols-8 grid-rows-6 h-full">
                        {Array.from({ length: 48 }).map((_, i) => (
                          <div key={i} className="border border-text-muted/20" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
