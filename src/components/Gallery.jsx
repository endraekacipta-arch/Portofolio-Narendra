import { ArrowRight } from 'lucide-react';

const galleryItems = [
  {
    title: 'Ar-Rauda',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
    tagClass: 'bg-white/10 border-white/20 text-white'
  },
  {
    title: 'BCA Auto-Scheduler',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    tagClass: 'bg-purple-600/20 border-purple-500/30 text-purple-400'
  },
  {
    title: 'RenX CRM',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    tagClass: 'bg-blue-600/20 border-blue-500/30 text-blue-400'
  },
  {
    title: 'BCA Syariah Opt-Report',
    category: 'Automation',
    image: '/BCA-Syariah-Scheduler.png',
    tagClass: 'bg-purple-600/20 border-purple-500/30 text-purple-400',
    link: 'https://cso-bca-syariah-scheduler.vercel.app/'
  },
  {
    title: 'TradingView Automation',
    category: 'FinTech',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop',
    tagClass: 'bg-green-600/20 border-green-500/30 text-green-400'
  },
  {
    title: 'AI-Agent Custom',
    category: 'AI Integration',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
    tagClass: 'bg-indigo-600/20 border-indigo-500/30 text-indigo-400'
  },
  {
    title: 'CoinFinder (Deep Search)',
    category: 'Web3 / Data',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=600&auto=format&fit=crop',
    tagClass: 'bg-yellow-600/20 border-yellow-500/30 text-yellow-400'
  }
];

export default function Gallery() {
  return (
    <section id="portfolio" className="py-16 md:py-24 relative overflow-hidden">
      <div className="section-divider-glow"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-6 md:mb-10 fade-in-up">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-10 md:w-12 h-[1px] bg-gold-base/60"></div>
            <span className="text-gold-base font-bold tracking-[0.4em] text-[10px] md:text-sm uppercase">Comprehensive Showcase</span>
            <div className="w-10 md:w-12 h-[1px] bg-gold-base/60"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight uppercase">
            My <span className="text-gold italic">Gallery</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm mt-4 max-w-xl mx-auto tracking-wide font-light">
            Explore my curated digital campaigns, development projects, and visual storytelling pieces.
          </p>
        </div>

        <div id="gallery-grid" className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 fade-in-up delay-200 mt-10">
          {galleryItems.map((item) => {
            const CardWrapper = item.link ? 'a' : 'div';
            const wrapperProps = item.link
              ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <CardWrapper
                key={item.title}
                {...wrapperProps}
                className="gallery-item group relative overflow-hidden rounded-sm border border-white/10 aspect-square cursor-pointer bg-dark-900"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700 z-10"></div>
                <div className="absolute bottom-0 left-0 w-full p-2.5 sm:p-5 translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <span className={`inline-block px-1.5 sm:px-2.5 py-0.5 sm:py-1 backdrop-blur-md border text-[5px] sm:text-[7px] font-bold tracking-widest uppercase rounded-sm mb-1 sm:mb-2 ${item.tagClass}`}>
                    {item.category}
                  </span>
                  <h3 className="font-serif text-[10px] sm:text-lg text-white font-bold group-hover:text-gold-light transition-colors duration-500 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </CardWrapper>
            );
          })}

          {/* MANY MORE Card - always shown at the end */}
          <a 
            href="#connect" 
            className="gallery-item many-more-card group relative overflow-hidden rounded-sm border border-gold-base/30 aspect-square cursor-pointer bg-dark-900/40 hover:bg-gold-base/10 transition-all duration-500 flex flex-col items-center justify-center text-center p-2 sm:p-4"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="font-serif text-sm sm:text-xl md:text-2xl text-gold-base font-bold mb-1 sm:mb-3 group-hover:text-gold-light transition-colors duration-500">Many More</h3>
              <span className="inline-flex items-center space-x-1 sm:space-x-2 text-gold-base/80 text-[6px] sm:text-[8px] md:text-[9px] font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase group-hover:text-gold-light transition-colors">
                <span className="border-b border-transparent group-hover:border-gold-light pb-0.5 transition-colors">Talk With Me</span>
                <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
