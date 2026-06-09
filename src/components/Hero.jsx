import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center overflow-hidden w-full min-h-[85vh] lg:min-h-[100vh]">
      
      {/* Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hero-bg-mask">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[120%] sm:w-[100%] md:w-[80%] lg:w-[60%] aspect-square bg-gold-base/10 blur-[80px] lg:blur-[120px] rounded-full"></div>
        
        <img 
          src="/Background-porto.png" 
          alt="AI Growth Background"
          className="absolute top-0 right-0 w-full lg:w-[85%] h-full object-contain opacity-70 md:opacity-80 lg:opacity-100 object-center lg:object-right"
          loading="eager"
        />
        
        {/* Mobile Gradients */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-gradient-to-t from-dark-950 to-transparent z-10 hidden md:block"></div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-10 lg:pt-0">
        <div className="flex flex-col lg:w-2/3">
          
          {/* Badge */}
          <div className="opacity-0 animate-reveal flex justify-center lg:justify-start mb-6 md:mb-8 lg:mb-12">
            <div className="bg-gold-base/10 backdrop-blur-md border border-gold-base/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gold-light tracking-[0.2em] uppercase whitespace-nowrap">Growth Engine</span>
            </div>
          </div>

          <div className="opacity-0 animate-reveal reveal-delay-1 flex items-center justify-center lg:justify-start space-x-3 mb-5 sm:mb-6 md:mb-8">
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-gold-base"></div>
            <h2 className="text-gold-base font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] md:text-xs uppercase text-center">Digital Growth Partner</h2>
            <div className="w-6 sm:w-8 h-[1px] bg-gold-base lg:hidden"></div>
          </div>
          
          {/* Name */}
          <h1 className="text-center lg:text-left opacity-0 animate-reveal reveal-delay-2 font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-white leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 tracking-tight drop-shadow-lg">
            Narendra <br className="hidden sm:block" />
            <span className="text-gold inline-block sm:ml-8 lg:ml-32 pb-1 sm:pb-2 md:pb-4 hover:scale-[1.02] transition-transform duration-500">Eka Cipta</span>
          </h1>
          
          {/* Tags */}
          <div className="opacity-0 animate-reveal reveal-delay-3 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10 max-w-sm sm:max-w-full mx-auto lg:mx-0">
            <div className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors duration-300 cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-base shadow-[0_0_8px_#EAB308]"></span>
              <span className="text-[7.5px] sm:text-[9px] md:text-[10px] font-bold text-gray-300 tracking-widest uppercase mt-0.5">AI Enthusiast</span>
            </div>
            <div className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors duration-300 cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-base shadow-[0_0_8px_#EAB308]"></span>
              <span className="text-[7.5px] sm:text-[9px] md:text-[10px] font-bold text-gray-300 tracking-widest uppercase mt-0.5">Cinematic Ads</span>
            </div>
            <div className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-dark-900/80 backdrop-blur-md border border-gold-base/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.1)]">
              <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-base opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-gold-base"></span>
              </span>
              <span className="text-[7.5px] sm:text-[9px] md:text-[10px] font-bold text-gold-light tracking-widest uppercase mt-0.5">Open to Work</span>
            </div>
            <div className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-dark-900/80 backdrop-blur-md border border-green-500/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500"></span>
              </span>
              <span className="text-[7.5px] sm:text-[9px] md:text-[10px] font-bold text-green-400 tracking-widest uppercase mt-0.5">Collaboration</span>
            </div>
          </div>

          {/* Intro */}
          <p className="text-center lg:text-left opacity-0 animate-reveal reveal-delay-4 text-xs sm:text-sm md:text-lg text-gray-300 max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-8 md:mb-12 drop-shadow-md">
            With over 5 years of experience as an AI enthusiast and digital strategist, <br className="hidden md:block"/>
            I serve as a dedicated growth partner, combining smart AI workflows with conversion-driven web experiences to deliver meaningful impact and valuable results.
          </p>
          
          {/* Buttons */}
          <div className="opacity-0 animate-reveal reveal-delay-5 flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-8 md:mb-10 w-full max-w-[260px] sm:max-w-none mx-auto lg:mx-0">
            <a href="#services" className="btn-premium-gold w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3.5 sm:py-4 md:py-5 bg-gold-gradient text-dark-900 font-extrabold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-[10px] sm:text-xs rounded-sm text-center shadow-lg">
              Explore Capabilities
            </a>
            <a href="/CV-Narendra.pdf" download="CV_Narendra_Eka_Cipta.pdf" className="group w-full sm:w-auto flex items-center justify-center space-x-3 sm:space-x-4 px-6 sm:px-8 py-3.5 sm:py-4 md:py-5 border border-white/10 hover:border-gold-base/50 bg-white/5 backdrop-blur-md rounded-sm transition-all duration-500 text-white hover:text-gold-base">
              <span className="font-bold tracking-[0.1em] uppercase text-[10px] sm:text-xs">Download CV</span>
              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold-base transform group-hover:scale-110" />
            </a>
          </div>
          
          {/* Experience Stats */}
          <div className="opacity-0 animate-reveal reveal-delay-6 relative flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 md:space-x-12 mt-4 sm:mt-6 pt-6 sm:pt-8 w-full max-w-[280px] sm:max-w-lg mx-auto lg:mx-0">
            <div className="absolute top-0 left-1/2 lg:-left-6 -translate-x-1/2 lg:translate-x-0 w-full lg:w-[110%] h-[1px] bg-gradient-to-r from-transparent via-gold-light to-transparent lg:from-transparent lg:via-gold-base lg:to-transparent z-20 animate-pulse"></div>

            <div className="flex flex-col items-center lg:items-start group cursor-default relative z-30">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-none mb-1.5 sm:mb-2 text-white group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_12px_rgba(253,224,71,0.8)]">10+</p>
              <p className="text-[7.5px] sm:text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] whitespace-nowrap group-hover:text-gray-200 transition-colors duration-500">Years Pro Experience</p>
            </div>
            
            <div className="w-[1px] h-8 sm:h-10 md:h-12 bg-gradient-to-b from-gold-base/50 to-transparent relative z-30"></div>
            
            <div className="flex flex-col items-center lg:items-start group cursor-default relative z-30">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-none mb-1.5 sm:mb-2 text-white group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_12px_rgba(253,224,71,0.8)]">5+</p>
              <p className="text-[7.5px] sm:text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] whitespace-nowrap group-hover:text-gray-200 transition-colors duration-500">Years AI Experience</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
