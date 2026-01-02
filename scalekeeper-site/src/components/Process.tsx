const steps = [
  {
    number: 1,
    title: 'Add Your Collection',
    description: 'Snap a photo, enter the basics. Import from spreadsheets if you have them—we\'ll do the heavy lifting.',
    time: '~2 min',
  },
  {
    number: 2,
    title: 'Set Your Schedules',
    description: 'Tell us when you feed, and we\'ll remind you. Customize per animal or use smart defaults for your species.',
    time: '~1 min',
  },
  {
    number: 3,
    title: 'Log as You Go',
    description: 'One tap to log a feeding. Swipe to mark complete. Watch your data turn into insights automatically.',
    time: '~30 sec daily',
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-28 relative nebula-pattern">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Start in Under <span className="gradient-text">5 Minutes</span>
          </h2>
          <p className="text-nebula-lavender/70 text-lg max-w-2xl mx-auto">
            No complicated setup. No data entry marathons. Just download and go.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-nebula-magenta/0 via-nebula-purple/50 to-nebula-cyan/0" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-nebula-purple/30 rounded-full blur-xl" />
                  <div className="relative w-16 h-16 bg-nebula-purple rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-nebula-purple/30">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-nebula-lavender/70 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Time Estimate */}
                <span className="inline-flex items-center gap-2 text-nebula-cyan text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {step.time}
                </span>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-8 bg-nebula-purple/30 mx-auto mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
