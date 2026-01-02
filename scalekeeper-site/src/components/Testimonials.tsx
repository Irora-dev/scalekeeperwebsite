const testimonials = [
  {
    quote: "I've tried every reptile tracking app out there. ScaleKeeper is the first one I've actually stuck with. The feeding reminders alone have been a game-changer for my collection of 40+ animals.",
    name: 'Marcus T.',
    title: 'Ball Python Breeder, Texas',
    rating: 5,
  },
  {
    quote: "The weight chart with feeding overlay? Genius. I finally stopped stressing every time my BP went on a food strike because I could SEE she wasn't actually losing weight. Peace of mind I never knew I needed.",
    name: 'Sarah K.',
    title: 'Hobbyist Keeper, UK',
    rating: 5,
  },
  {
    quote: "As a professional breeder, I need reliable records. ScaleKeeper's breeding timeline and genetics calculator have streamlined my entire operation. The lineage certificates are a huge hit with buyers.",
    name: 'David R.',
    title: 'Professional Breeder, Florida',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">Keepers Like You</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-6 md:p-8 flex flex-col"
            >
              {/* Quote */}
              <blockquote className="text-text-secondary leading-relaxed flex-grow mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-warning-amber"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-primary-green/30 rounded-full flex items-center justify-center text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-text-primary">{testimonial.name}</p>
                  <p className="text-text-muted text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
