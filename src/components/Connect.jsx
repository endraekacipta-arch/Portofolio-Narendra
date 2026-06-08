import { Mail, Send } from 'lucide-react';

export default function Connect() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const formattedText = `*Pesan Baru dari Portofolio Narendra*\n\n` +
      `*Nama:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Subjek:* ${subject}\n\n` +
      `*Pesan:*\n${message}`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/6285879934934?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="connect" className="py-20 md:py-32 relative overflow-hidden">
      <div className="section-divider-glow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.04)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="fade-in-up flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 md:w-10 h-[1px] bg-gold-base/60 hidden lg:block"></div>
              <span className="text-gold-base font-bold tracking-[0.4em] text-[10px] md:text-sm uppercase">Let's Collaborate</span>
              <div className="w-8 md:w-10 h-[1px] bg-gold-base/60 lg:hidden"></div>
            </div>
            
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight uppercase mb-6">
              Connect <br className="hidden lg:block"/> 
              <span className="text-gold italic inline-block ml-4 sm:ml-8 lg:ml-20 xl:ml-32 hover:translate-x-2 transition-transform duration-500">With Me</span>
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base max-w-lg tracking-wide font-light leading-relaxed mb-10">
              Ready to build something extraordinary? Fill out the form or reach out through any of these platforms to start the conversation.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 max-w-[260px] mx-auto sm:max-w-none sm:mx-0">
              <a href="mailto:endraekacipta@gmail.com" aria-label="Email" className="group relative overflow-hidden flex items-center justify-center w-11 h-11 bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-gold-base hover:bg-gold-base text-gray-300 hover:text-dark-900 transition-all duration-300 rounded-sm">
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              
              <a href="https://wa.me/6285879934934" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="group relative overflow-hidden flex items-center justify-center w-11 h-11 bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-green-500 hover:bg-green-500 text-gray-300 hover:text-dark-900 transition-all duration-300 rounded-sm">
                <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/narendraekacipta/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group relative overflow-hidden flex items-center justify-center w-11 h-11 bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#0A66C2] hover:bg-[#0A66C2] text-gray-300 hover:text-white transition-all duration-300 rounded-sm">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              <a href="https://www.instagram.com/irrendra97/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group relative overflow-hidden flex items-center justify-center w-11 h-11 bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#E1306C] hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:to-[#833AB4] text-gray-300 hover:text-white transition-all duration-300 rounded-sm">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>


              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="group relative overflow-hidden flex items-center justify-center w-11 h-11 bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white hover:bg-white text-gray-300 hover:text-black transition-all duration-300 rounded-sm">
                <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.33-5.17 2.06-7.01 1.7-1.81 4.25-2.65 6.64-2.22V12.1c-1.2-.16-2.45.02-3.48.65-.9.51-1.58 1.36-1.82 2.37-.28 1.11-.06 2.31.57 3.23.63.95 1.71 1.55 2.84 1.71 1.33.15 2.7-.22 3.69-1.07.91-.76 1.45-1.89 1.54-3.08.18-5.32.12-10.65.13-15.98Z"/>
                </svg>
              </a>

              <a href="https://x.com/irrendra97" target="_blank" rel="noopener noreferrer" aria-label="X" className="group relative overflow-hidden flex items-center justify-center w-11 h-11 bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white hover:bg-white text-gray-300 hover:text-black transition-all duration-300 rounded-sm">
                <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>

              <a href="https://github.com/endraekacipta-arch" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group relative overflow-hidden flex items-center justify-center w-11 h-11 bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white hover:bg-white text-gray-300 hover:text-black transition-all duration-300 rounded-sm">
                <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="fade-in-up delay-100">
            <form className="glass-card p-6 md:p-8 rounded-sm space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-base focus:bg-white/[0.05] transition-all duration-300 placeholder-gray-600" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-base focus:bg-white/[0.05] transition-all duration-300 placeholder-gray-600" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="How can we collaborate? / Job Offer" className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-base focus:bg-white/[0.05] transition-all duration-300 placeholder-gray-600" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell me about your desire..." className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-base focus:bg-white/[0.05] transition-all duration-300 placeholder-gray-600 resize-none" required></textarea>
              </div>

              <button type="submit" className="btn-premium-gold w-full px-8 py-4 bg-gold-gradient text-dark-900 font-extrabold tracking-[0.15em] uppercase text-xs rounded-sm text-center shadow-lg flex items-center justify-center space-x-2 mt-2">
                <span>Send Message</span>
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
