export default function TrustLogos() {
  return (
    <section className="py-12 md:py-16 border-y border-nebula-lavender/10">
      <div className="section-container">
        <p className="text-center text-white text-lg mb-8">
          Join <span className="text-nebula-cyan font-bold">2,400+</span> reptile keepers already using ScaleKeeper
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {['MorphMarket', 'Reptile Network', 'Ball Python Community', 'Fauna Classifieds', 'r/ballpython'].map((name) => (
            <div
              key={name}
              className="text-nebula-lavender text-sm md:text-base font-semibold hover:text-nebula-cyan transition-colors cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
