export default function TrustLogos() {
  return (
    <section className="py-12 md:py-16 border-y border-nebula-lavender/10">
      <div className="section-container">
        <p className="text-center text-nebula-lavender/50 mb-8">
          Join <span className="text-nebula-cyan font-semibold">2,400+</span> reptile keepers already using ScaleKeeper
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity">
          {['MorphMarket', 'Reptile Network', 'Ball Python Community', 'Fauna Classifieds', 'r/ballpython'].map((name) => (
            <div
              key={name}
              className="text-nebula-lavender/40 text-sm md:text-base font-medium grayscale hover:grayscale-0 hover:text-nebula-lavender transition-all cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
