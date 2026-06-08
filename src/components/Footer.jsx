export default function Footer() {
  return (
    <footer className="bg-dark-950/80 backdrop-blur-xl py-12 md:py-16 fade-in-up relative">
      <div className="section-divider-glow"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-8 md:mb-0">
          <span className="font-serif text-2xl font-bold tracking-wider text-white uppercase">
            NARE<span className="text-gold-base">N</span>DRA<span className="text-gold-base">.</span>
          </span>
          <p className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em] mt-4">
            © 2026 Narendra Eka Cipta
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <a href="#about" className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 hover:text-gold-base transition-colors">About</a>
          <a href="#services" className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 hover:text-gold-base transition-colors">Capabilities</a>
          <a href="#experience" className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 hover:text-gold-base transition-colors">Experience</a>
          <a href="#business" className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 hover:text-gold-base transition-colors">Ventures</a>
          <a href="#portfolio" className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 hover:text-gold-base transition-colors">Gallery</a>
        </div>
      </div>
    </footer>
  );
}
