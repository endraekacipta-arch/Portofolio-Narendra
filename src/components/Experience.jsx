import { useEffect } from 'react';
import { 
  Smartphone, 
  Users, 
  FileDigit, 
  ShieldAlert, 
  Fingerprint, 
  MailWarning, 
  MessageSquareText, 
  Languages, 
  BookOpen, 
  Scroll, 
  Presentation, 
  TrendingUp, 
  GraduationCap, 
  UsersRound, 
  Award, 
  UserPlus, 
  Megaphone, 
  Briefcase, 
  BarChart3, 
  Eye, 
  Repeat, 
  Info, 
  Star, 
  Share2, 
  Gift, 
  Check, 
  Rocket 
} from 'lucide-react';

export default function Experience() {
  useEffect(() => {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      };
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    });
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      <div className="section-divider-glow"></div>
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 fade-in-up">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-10 md:w-12 h-[1px] bg-gold-base/60"></div>
            <span className="text-gold-base font-bold tracking-[0.4em] text-[10px] md:text-sm uppercase">Corporate Background</span>
            <div className="w-10 md:w-12 h-[1px] bg-gold-base/60"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight uppercase">
            Work <span className="text-gold italic">Experience</span>
          </h2>
        </div>

        <div className="flex flex-col mt-4 md:mt-8">
          
          {/* JOB 1: PT Bank Central Asia */}
          <div className="group py-8 md:py-16 border-b border-white/10 hover:border-gold-base/40 transition-colors flex flex-col md:flex-row gap-6 md:gap-16 items-start fade-in-up delay-100">
            <div className="md:w-1/3 shrink-0 flex flex-col md:pr-8">
              <span className="inline-flex items-center space-x-3 text-gold-base text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-500">
                <span className="w-2 h-2 rounded-full bg-gold-base shadow-[0_0_8px_#EAB308]"></span>
                <span>Oct 2022 – Present</span>
              </span>
              <h4 className="text-xl md:text-2xl font-serif text-white font-bold mb-2 tracking-tight group-hover:text-gold-light transition-colors duration-500">PT Bank Central Asia Tbk</h4>
              <p className="text-xs md:text-sm text-gray-500 italic leading-relaxed">The largest public-listed private bank in Indonesia.</p>

              <div className="mt-6 relative pl-10">
                <div className="absolute left-2 -top-4 w-6 h-8 border-l-2 border-b-2 border-white/20 rounded-bl-md group-hover:border-gold-base/50 transition-colors duration-500">
                  <div className="absolute w-[5px] h-[5px] rounded-full bg-white shadow-[0_0_12px_4px_#ffffff,0_0_25px_8px_#FDE047,0_0_40px_12px_#D97706] animate-trace-l"></div>
                </div>
                
                <span className="inline-block text-gold-base text-[8px] md:text-[9px] font-bold tracking-widest uppercase mb-1">Concurrent</span>
                <h4 className="text-lg md:text-2xl font-serif text-white font-bold mb-1 tracking-tight group-hover:text-gold-light transition-colors duration-500">PT Bank BCA Syariah</h4>
                <p className="text-[10px] md:text-xs text-gray-500 italic leading-relaxed">Subsidiary of PT Bank Central Asia Tbk.</p>
              </div>
            </div>
            
            <div className="md:w-2/3 glass-card bg-white/[0.02] md:bg-transparent p-5 md:p-8 rounded-md md:border-transparent group-hover:md:border-gold-base/20 transition-all duration-500 w-full">
              <h3 className="text-xl md:text-3xl font-serif text-white font-bold mb-6 group-hover:text-gold-light transition-colors">Customer Service Officer</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Smartphone className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Serve customers as a Customer Service Representative via the BCA application.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <span className="shrink-0"><Users className="w-4 h-4 text-gold-base mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" /></span>
                  <span className="leading-relaxed">Assist an average of 100+ customers daily with online account management.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <FileDigit className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Process and input customer KYC data securely during account opening procedures.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <ShieldAlert className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Analyze and prevent potential financial losses resulting from various fraudulent activities.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Fingerprint className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Address critical security issues, including customer fraud, fake ID usage, and data theft.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <MailWarning className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Provide proactive guidance to help customers identify and avoid phishing attempts.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <MessageSquareText className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Handle customer complaints while emphasizing a customer-centric approach in delivering services.</span>
                </li>
              </ul>

              <div className="border-t border-white/10 pt-6 mt-6">
                <h4 className="text-sm md:text-base font-serif text-gold-base font-bold mb-4 flex items-center tracking-wide">
                  <span className="w-4 h-[1px] bg-gold-base mr-3"></span>
                  Syariah Banking Focus
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                    <Languages className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                    <span className="leading-relaxed">Assist customers and address inquiries related to Syariah banking terminology and principles.</span>
                  </li>
                  <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                    <BookOpen className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                    <span className="leading-relaxed">Educate customers on Syariah products and highlight their key differences from conventional banking.</span>
                  </li>
                  <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                    <Scroll className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                    <span className="leading-relaxed">Guide customers through specific Syariah banking contracts (Akad), such as Wadiah and Mudharabah, ensuring complete transparency.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* JOB 2: PT Prudential Life Assurance */}
          <div className="group py-8 md:py-16 border-b border-white/10 hover:border-gold-base/40 transition-colors flex flex-col md:flex-row gap-6 md:gap-16 items-start fade-in-up delay-200">
            <div className="md:w-1/3 shrink-0 flex flex-col md:pr-8">
              <span className="inline-flex items-center space-x-3 text-gold-base text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-500">
                <span className="w-2 h-2 rounded-full bg-gold-base/50 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></span>
                <span>Jan 2021 – Oct 2022</span>
              </span>
              <h4 className="text-xl md:text-2xl font-serif text-white font-bold mb-2 tracking-tight group-hover:text-gold-light transition-colors">PT Prudential Life Assurance</h4>
              <p className="text-xs md:text-sm text-gray-500 italic leading-relaxed">A financial services company in the insurance sector headquartered in Jakarta.</p>
            </div>
            <div className="md:w-2/3 glass-card bg-white/[0.02] md:bg-transparent p-5 md:p-8 rounded-md md:border-transparent group-hover:md:border-gold-base/20 transition-all duration-500 w-full">
              <h3 className="text-xl md:text-3xl font-serif text-white font-bold mb-6 group-hover:text-gold-light transition-colors">Senior Associate</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Presentation className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Conducted product presentations for both retail and corporate insurance up to five times a week.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <TrendingUp className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Provided personalized financial guidance to clients regarding insurance policies and wealth management.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <GraduationCap className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Conducted comprehensive insurance training sessions for the internal sales team.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <span className="shrink-0"><UsersRound className="w-4 h-4 text-gold-base mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" /></span>
                  <span className="leading-relaxed">Established, mentored, and led a high-performing team of three members.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Award className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Achieved a total team premium of Rp 1 billion within a single year.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <UserPlus className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Generated an average of two new clients per month, significantly contributing to the team's success.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* JOB 3: CV Twins Wedding Organizer */}
          <div className="group py-8 md:py-16 border-b border-white/10 hover:border-gold-base/40 transition-colors flex flex-col md:flex-row gap-6 md:gap-16 items-start fade-in-up delay-200">
            <div className="md:w-1/3 shrink-0 flex flex-col md:pr-8">
              <span className="inline-flex items-center space-x-3 text-gold-base text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-500">
                <span className="w-2 h-2 rounded-full bg-gold-base/50 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></span>
                <span>Jan 2015 – Jun 2020</span>
              </span>
              <h4 className="text-xl md:text-2xl font-serif text-white font-bold mb-2 tracking-tight group-hover:text-gold-light transition-colors">CV Twins Wedding Organizer</h4>
              <p className="text-xs md:text-sm text-gray-500 italic leading-relaxed">A wedding arrangement service.</p>
            </div>
            <div className="md:w-2/3 glass-card bg-white/[0.02] md:bg-transparent p-5 md:p-8 rounded-md md:border-transparent group-hover:md:border-gold-base/20 transition-all duration-500 w-full">
              <h3 className="text-xl md:text-3xl font-serif text-white font-bold mb-6 group-hover:text-gold-light transition-colors">Account Executive</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Megaphone className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Presented and pitched wedding services to both prospective and existing clients.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Briefcase className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Managed up to 5 concurrent clients, assisting them from initial negotiations to event completion.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <BarChart3 className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Analyzed post-event data and feedback to evaluate and improve consumer satisfaction.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Eye className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Supervised and ensured the flawless execution of events for every client.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Repeat className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Facilitated seamless communication and coordination between clients and external vendors.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Info className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Coordinated and followed up on critical information between internal teams and clients.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Star className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Consistently achieved an A+ satisfaction rating based on client questionnaires.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Share2 className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Initiated and successfully implemented a referral marketing program.</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-gray-300 group/item">
                  <Gift className="w-4 h-4 text-gold-base shrink-0 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform" />
                  <span className="leading-relaxed">Designed incentive benefits for clients who referred new business to the company.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Freelance Projects Grid */}
        <div className="mt-12 md:mt-20 fade-in-up delay-200">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-8 h-[1px] bg-gold-base/60"></div>
            <h3 className="text-white font-serif text-lg md:text-xl font-bold uppercase tracking-widest">Notable Freelance Projects</h3>
            <div className="flex-grow h-[1px] bg-white/5"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Project 1: Ondo Finance */}
            <div className="glass-card group p-6 border border-white/5 hover:border-gold-base/40 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-[8px] md:text-[9px] font-bold text-gold-base uppercase tracking-widest rounded-sm group-hover:border-gold-base/30 transition-colors">Finance</span>
                  <span className="text-gray-500 text-[9px] font-bold tracking-widest">2023 - 2024</span>
                </div>
                <h4 className="text-lg font-serif text-white font-bold mb-1 group-hover:text-gold-light transition-colors">Ondo Finance</h4>
                <p className="text-xs text-gray-400 italic mb-5">Early Beta Tester (Real World Assets)</p>
                <ul className="space-y-3 border-t border-white/5 pt-4">
                  <li className="flex items-start text-[11px] md:text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-gold-base shrink-0 mt-0.5 mr-2.5" />
                    <span className="leading-relaxed">Tested early tokenization products for Real World Assets (RWA), focusing on tokenized equities and PayPal USD (PYUSD) integrations.</span>
                  </li>
                  <li className="flex items-start text-[11px] md:text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-gold-base shrink-0 mt-0.5 mr-2.5" />
                    <span className="leading-relaxed">Explored the Ondo Chain testnet and ONDO DEX platform to check transaction flows, spot glitches, and improve user experience before the mainnet launch.</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[8px] text-gray-500 font-bold uppercase tracking-[0.2em] flex items-center gap-1">
                  <Rocket className="w-3 h-3 text-gold-base" /> Verified Contributor
                </span>
                <span className="text-xs font-bold text-white tracking-widest">ONDO</span>
              </div>
            </div>

            {/* Project 2: Tether */}
            <div className="glass-card group p-6 border border-white/5 hover:border-gold-base/40 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-[8px] md:text-[9px] font-bold text-gold-base uppercase tracking-widest rounded-sm group-hover:border-gold-base/30 transition-colors">Finance</span>
                  <span className="text-gray-500 text-[9px] font-bold tracking-widest">2020 - 2021</span>
                </div>
                <h4 className="text-lg font-serif text-white font-bold mb-1 group-hover:text-gold-light transition-colors">Tether</h4>
                <p className="text-xs text-gray-400 italic mb-5">Testnet Evaluator (Solana Network)</p>
                <ul className="space-y-3 border-t border-white/5 pt-4">
                  <li className="flex items-start text-[11px] md:text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-gold-base shrink-0 mt-0.5 mr-2.5" />
                    <span className="leading-relaxed">Ran active testnet trials for stablecoin transfers on the Solana network to see how the infrastructure handles real-world speed and volume.</span>
                  </li>
                  <li className="flex items-start text-[11px] md:text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-gold-base shrink-0 mt-0.5 mr-2.5" />
                    <span className="leading-relaxed">Checked transaction speeds, confirmed gas fee accuracy, and made sure various crypto wallets connected smoothly before the updates went live.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[8px] text-gray-500 font-bold uppercase tracking-[0.2em] flex items-center gap-1">
                  <Rocket className="w-3 h-3 text-gold-base" /> Solana Ecosystem
                </span>
                <span className="text-xs font-bold text-[#26A17B] tracking-widest">USDT</span>
              </div>
            </div>

            {/* Project 3: SMPN 5 Tambun Selatan */}
            <div className="glass-card group p-6 border border-white/5 hover:border-gold-base/40 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-[8px] md:text-[9px] font-bold text-gold-base uppercase tracking-widest rounded-sm group-hover:border-gold-base/30 transition-colors">Education</span>
                  <span className="text-gray-500 text-[9px] font-bold tracking-widest">2022 - 2023</span>
                </div>
                <h4 className="text-lg font-serif text-white font-bold mb-1 group-hover:text-gold-light transition-colors">SMPN 5 Tambun Selatan</h4>
                <p className="text-xs text-gray-400 italic mb-5">E-Book & Infographic Designer</p>
                <ul className="space-y-3 border-t border-white/5 pt-4">
                  <li className="flex items-start text-[11px] md:text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-gold-base shrink-0 mt-0.5 mr-2.5" />
                    <span className="leading-relaxed">Created a digital Biology e-book and a series of custom infographics designed specifically for junior high school students.</span>
                  </li>
                  <li className="flex items-start text-[11px] md:text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-gold-base shrink-0 mt-0.5 mr-2.5" />
                    <span className="leading-relaxed">Turned heavy textbook materials into colorful, easy-to-understand visuals that keep students focused and engaged in learning.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[8px] text-gray-500 font-bold uppercase tracking-[0.2em]">Design Project</span>
                <span className="text-xs font-bold text-white tracking-widest">SMPN5</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
