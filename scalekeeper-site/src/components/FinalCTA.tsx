import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="download" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb-magenta w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="orb-purple w-80 h-80 top-1/4 left-1/4" />
      <div className="orb-cyan w-64 h-64 bottom-1/4 right-1/4" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="gradient-text">Husbandry</span>?
          </h2>

          <p className="text-nebula-lavender/70 text-lg md:text-xl mb-10 leading-relaxed">
            Join thousands of keepers who&apos;ve replaced spreadsheet chaos with
            ScaleKeeper&apos;s intelligent tracking.
          </p>

          <Link href="#signup" className="btn-primary text-lg inline-flex animate-pulse-glow">
            <span>🦎</span>
            <span>Download Free</span>
          </Link>

          <p className="mt-6 text-nebula-lavender/50 text-sm flex flex-wrap justify-center gap-4">
            <span>Available on iOS & Android</span>
            <span className="text-nebula-lavender/30">•</span>
            <span>Free to start</span>
            <span className="text-nebula-lavender/30">•</span>
            <span>Upgrade anytime</span>
          </p>
        </div>
      </div>
    </section>
  );
}
