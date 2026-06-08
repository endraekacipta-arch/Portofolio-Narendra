import { useState, useEffect } from 'react';

export default function Navbar() {
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop && scrollTop > 60) {
            setNavHidden(true);
          } else {
            setNavHidden(false);
          }
          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="smart-nav" className={`fixed w-full z-50 bg-dark-950/40 backdrop-blur-2xl border-b border-white/5 transition-transform duration-500 ${navHidden ? 'nav-hidden' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-white uppercase opacity-0 animate-reveal">
              NARE<span className="text-gold-base">N</span>DRA<span className="text-gold-base">.</span>
            </span>
          </div>
          <div className="hidden lg:flex space-x-10 xl:space-x-12 items-center opacity-0 animate-reveal reveal-delay-2">
            <a href="#about" className="group relative text-[10px] xl:text-[11px] font-semibold text-gray-400 hover:text-white transition-colors duration-300 tracking-[0.2em] uppercase">
              About
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-gold-base transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#services" className="group relative text-[10px] xl:text-[11px] font-semibold text-gray-400 hover:text-white transition-colors duration-300 tracking-[0.2em] uppercase">
              Capabilities
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-gold-base transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#experience" className="group relative text-[10px] xl:text-[11px] font-semibold text-gray-400 hover:text-white transition-colors duration-300 tracking-[0.2em] uppercase">
              Experience
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-gold-base transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#business" className="group relative text-[10px] xl:text-[11px] font-semibold text-gray-400 hover:text-white transition-colors duration-300 tracking-[0.2em] uppercase">
              Ventures
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-gold-base transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#portfolio" className="group relative text-[10px] xl:text-[11px] font-semibold text-gray-400 hover:text-white transition-colors duration-300 tracking-[0.2em] uppercase">
              Gallery
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-gold-base transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#connect" className="px-6 xl:px-8 py-2.5 bg-transparent text-gold-light border border-gold-base/30 hover:bg-gold-base hover:text-dark-900 font-bold tracking-[0.15em] uppercase text-[9px] xl:text-[10px] transition-all duration-500 rounded-sm whitespace-nowrap">
              Talk with me
            </a>
          </div>
          <div className="lg:hidden">
            <a href="#connect" className="px-4 py-2 border border-gold-base/30 text-gold-light text-[9px] font-bold tracking-widest uppercase rounded-sm">
              Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
