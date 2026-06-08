import { Rocket, Layout, MousePointerClick, Camera, FileText } from 'lucide-react';

export default function Ventures() {
  return (
    <section id="business" className="py-16 md:py-24 relative overflow-hidden">
      <div className="section-divider-glow"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 fade-in-up">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-10 md:w-12 h-[1px] bg-gold-base/60"></div>
            <span className="text-gold-base font-bold tracking-[0.4em] text-[10px] md:text-sm uppercase">Entrepreneurial Journey</span>
            <div className="w-10 md:w-12 h-[1px] bg-gold-base/60"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight uppercase">
            Business <span className="text-gold italic">Ventures</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm mt-4 max-w-xl mx-auto tracking-wide font-light">
            Highlighting independent projects and freelance initiatives where I drive end-to-end digital growth, from strategy to execution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up delay-100">
          <div className="glass-card group p-6 md:p-10 border border-white/5 hover:border-gold-base/40 transition-colors duration-500">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="inline-flex items-center space-x-2 text-gold-base text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-base shadow-[0_0_8px_#EAB308]"></span>
                  <span>2021 – Present</span>
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white font-bold group-hover:text-gold-light transition-colors duration-500">Independent Consultant & Digital Strategist</h3>
                <h4 className="text-sm md:text-base text-gray-400 mt-1">Digital Marketing, Web Development and Automation</h4>
              </div>
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-gold-base/20 transition-colors duration-500 shrink-0 ml-4">
                <Rocket className="w-5 h-5 md:w-6 md:h-6 text-gold-base" />
              </div>
            </div>
            
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed mb-8">
              Empowering brands by engineering end-to-end digital ecosystems. From data-driven marketing strategies to high-performance web development with cinematic images and video, I transform your business objectives into scalable, high-converting realities.
            </p>

            <div className="border-t border-white/10 pt-6">
              <ul className="space-y-4">
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Layout className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Developed <span className="text-white font-medium">websites and landing pages</span> for diverse needs, including personal hobbies, digital invitations, e-book, infographic showcases, educational platforms, and beyond.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <MousePointerClick className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Built automated workflows using <span className="text-white font-medium">AI Automation</span> and <span className="text-white font-medium">Code Automation</span> to optimize <span className="text-white font-medium">end-to-end business operations</span>.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Camera className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Produced <span className="text-white font-medium">cinematic brand images and videos</span> and AI-generated content to elevate client brand positioning.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <FileText className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Streamlined <span className="text-white font-medium">business administration</span>, managing the preparation of professional quotations, project agreements, and invoices to ensure transparent and seamless client relations.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6 mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 w-full">
              <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center shrink-0">
                <span className="w-4 h-[1px] bg-gold-base mr-3"></span>
                Trusted by <span className="text-white ml-1.5">Brands</span>
              </div>
              
              <div className="w-full md:w-auto overflow-x-auto hide-scrollbar pb-2 md:pb-0">
                <div className="flex -space-x-3 hover:-space-x-1 transition-all duration-500 cursor-pointer min-w-max px-2 md:justify-end">
                  {/* Client Logos using Unsplash Placeholders as in the original */}
                  <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full border-2 border-dark-900 bg-dark-800 flex items-center justify-center overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] z-[1] transition-transform hover:scale-110 hover:z-[20]">
                    <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&h=100&auto=format&fit=crop" alt="Client Logo 1" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" loading="lazy" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full border-2 border-dark-900 bg-dark-800 flex items-center justify-center overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] z-[2] transition-transform hover:scale-110 hover:z-[20]">
                    <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=100&h=100&auto=format&fit=crop" alt="Client Logo 2" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" loading="lazy" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full border-2 border-dark-900 bg-dark-800 flex items-center justify-center overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] z-[3] transition-transform hover:scale-110 hover:z-[20]">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=100&h=100&auto=format&fit=crop" alt="Client Logo 3" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" loading="lazy" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full border-2 border-dark-900 bg-dark-800 flex items-center justify-center overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] z-[4] transition-transform hover:scale-110 hover:z-[20]">
                    <img src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=100&h=100&auto=format&fit=crop" alt="Client Logo 4" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" loading="lazy" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full border-2 border-dark-900 bg-dark-800 flex items-center justify-center overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] z-[5] transition-transform hover:scale-110 hover:z-[20]">
                    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=100&h=100&auto=format&fit=crop" alt="Client Logo 5" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" loading="lazy" />
                  </div>

                  <div className="h-8 md:h-10 shrink-0 px-4 rounded-full border-2 border-dark-900 bg-dark-800 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] z-[6] transition-transform hover:scale-105 hover:z-[20]">
                    <span className="text-[8px] md:text-[10px] font-bold text-gold-base tracking-widest uppercase">Many More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
