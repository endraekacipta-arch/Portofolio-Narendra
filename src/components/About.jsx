import { BookOpen, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-dark-950/50 z-10"></div>
        <img 
          src="https://res.cloudinary.com/dfpbzjpll/image/upload/q_auto/f_auto/v1780894014/ChatGPT_Image_Jun_8_2026_11_46_34_AM_p7pcxt.png" 
          alt="About Me Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 md:opacity-80 object-center"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark-950 to-transparent z-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-950 to-transparent z-20"></div>
      </div>

      <div className="section-divider-glow z-30"></div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-30">
        <div className="fade-in-up delay-200 flex flex-col items-center text-center">
          
          {/* Header */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-10 h-[1px] bg-gold-base/60"></div>
            <span className="text-gold-base font-bold tracking-[0.3em] text-[10px] md:text-sm uppercase">About Me</span>
            <div className="w-10 h-[1px] bg-gold-base/60"></div>
          </div>
          
          {/* Paragraphs */}
          <div className="text-gray-100 text-[14px] md:text-lg font-light leading-relaxed mb-8 md:mb-12 max-w-2xl md:max-w-3xl mx-auto space-y-4 md:space-y-6">
            <p>
              I am <span className="text-gold font-bold">Narendra Eka Cipta</span>, a digital enthusiast with a strong foundation in English Literature from STBA JIA. My professional journey has taken me through diverse landscapes—from the fast-paced world of communications to the structured environments of banking and finance, and eventually into the decentralized future of Web 3.0.
            </p>
            <p>
              With <span className="text-gold font-bold">5+ years as an AI enthusiast and 10+ years of professional experience</span> across Digital Marketing and Finance, I have developed robust expertise in driving growth. My core competencies include <span className="text-gold font-medium">client relationship management, web development, cinematic visual creation, digital marketing, and intelligent automation</span>. <span className="text-white font-medium">Leveraging my competencies and experience</span>, I bridge the gap between complex digital needs and real-life goals—<span className="opacity-80">using AI to keep things simple and effective.</span>
            </p>
          </div>
          
          {/* Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-lg md:max-w-3xl mx-auto text-left w-full px-2 md:px-0">
            <div className="glass-card flex items-start space-x-3 md:space-x-4 group p-4 md:p-6 border border-white/5 hover:border-gold-base/40 transition-colors duration-500 rounded-sm bg-black/20 md:bg-transparent">
              <div className="p-2 md:p-3 bg-white/5 border border-white/10 rounded-sm group-hover:border-gold-base/40 transition-colors shrink-0">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-gold-base" />
              </div>
              <div>
                <h4 className="text-white font-bold text-[11px] md:text-sm uppercase tracking-wider mb-1 md:mb-2">Willing to Learn</h4>
                <p className="text-gray-400 md:text-gray-300 text-[11px] md:text-sm leading-snug md:leading-relaxed italic">"I have failed more times than the average person has even tried."</p>
              </div>
            </div>
            
            <div className="glass-card flex items-start space-x-3 md:space-x-4 group p-4 md:p-6 border border-white/5 hover:border-gold-base/40 transition-colors duration-500 rounded-sm bg-black/20 md:bg-transparent">
              <div className="p-2 md:p-3 bg-white/5 border border-white/10 rounded-sm group-hover:border-gold-base/40 transition-colors shrink-0">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-gold-base" />
              </div>
              <div>
                <h4 className="text-white font-bold text-[11px] md:text-sm uppercase tracking-wider mb-1 md:mb-2">Adaptive Strategy</h4>
                <p className="text-gray-400 md:text-gray-300 text-[11px] md:text-sm leading-snug md:leading-relaxed">I adjust as the digital world shifts, ensuring everything stays relevant and real.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
