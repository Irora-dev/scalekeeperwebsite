const benefits = [
  {
    icon: '🎯',
    title: 'Never Miss a Feeding',
    description: 'Smart reminders that adapt to each animal\'s schedule. See exactly how long since their last meal at a glance.',
  },
  {
    icon: '📊',
    title: 'Track Growth Over Time',
    description: 'Weight and length charts that show your animal\'s progress. Spot problems before they become emergencies.',
  },
  {
    icon: '🧬',
    title: 'Master Your Genetics',
    description: 'Predict offspring outcomes, track het percentages, and plan pairings that produce the morphs you want.',
  },
  {
    icon: '🌡️',
    title: 'Monitor Enclosures 24/7',
    description: 'Connect your sensors for real-time temp and humidity alerts. Know immediately if something\'s wrong.',
  },
  {
    icon: '💊',
    title: 'Never Miss a Medication',
    description: 'Treatment reminders with progress tracking. Export complete records for vet visits.',
  },
  {
    icon: '📸',
    title: 'Document Their Journey',
    description: 'Photo timelines that show how they\'ve grown. From hatchling to adult, beautifully preserved.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Keepers Love <span className="gradient-text">ScaleKeeper</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card p-6 md:p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary">
                {benefit.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
