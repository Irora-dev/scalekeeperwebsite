import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="trial" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-section to-background-dark" />
      <div className="absolute inset-0 scale-pattern opacity-20" />

      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-lime/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary-green/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="gradient-text">Husbandry</span>?
          </h2>

          <p className="text-text-secondary text-lg md:text-xl mb-10 leading-relaxed">
            Join thousands of keepers who&apos;ve replaced spreadsheet chaos with
            ScaleKeeper&apos;s intelligent tracking.
          </p>

          <Link href="#signup" className="btn-primary text-lg inline-flex">
            <span>🦎</span>
            <span>Start Your Free Trial</span>
          </Link>

          <p className="mt-6 text-text-muted text-sm flex flex-wrap justify-center gap-4">
            <span>No credit card required</span>
            <span>•</span>
            <span>14-day free trial</span>
            <span>•</span>
            <span>Cancel anytime</span>
          </p>
        </div>
      </div>
    </section>
  );
}
