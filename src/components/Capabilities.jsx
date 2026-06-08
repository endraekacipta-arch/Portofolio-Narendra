import { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Workflow, 
  Activity, 
  Receipt, 
  PieChart, 
  Search, 
  Sparkles, 
  Bot, 
  Cpu, 
  PenTool, 
  Layers, 
  Code2, 
  LayoutTemplate, 
  Paintbrush, 
  LayoutDashboard, 
  Files, 
  Coins, 
  LineChart, 
  ShieldCheck, 
  BarChart3, 
  Camera, 
  Brain, 
  Puzzle, 
  Users, 
  Handshake, 
  MessageSquare, 
  Lightbulb 
} from 'lucide-react';

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState('cap-web');

  useEffect(() => {
    // Glass card mouse hover effect setup
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
  }, [activeTab]);

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      <div className="section-divider-glow"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 fade-in-up">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-10 md:w-12 h-[1px] bg-gold-base/60"></div>
            <span className="text-gold-base font-bold tracking-[0.4em] text-[10px] md:text-sm uppercase">My Expertise</span>
            <div className="w-10 md:w-12 h-[1px] bg-gold-base/60"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-6xl font-bold text-white tracking-tight">Core <span className="text-gold italic">Capabilities</span></h2>
        </div>
        
        {/* Navigation Tabs */}
        <div className="mb-12 md:mb-20 fade-in-up delay-100 w-full">
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8 md:border-b border-white/5 px-4 pb-2 w-full">
            <button 
              className={`capability-tab whitespace-nowrap text-[10px] md:text-xs uppercase tracking-[0.4em] ${activeTab === 'cap-web' ? 'active' : ''}`} 
              onClick={() => setActiveTab('cap-web')}
            >
              <span className="num">01</span>Web Development
            </button>
            <button 
              className={`capability-tab whitespace-nowrap text-[10px] md:text-xs uppercase tracking-[0.4em] ${activeTab === 'cap-cinema' ? 'active' : ''}`} 
              onClick={() => setActiveTab('cap-cinema')}
            >
              <span className="num">02</span>Cinematic Content
            </button>
            <button 
              className={`capability-tab whitespace-nowrap text-[10px] md:text-xs uppercase tracking-[0.4em] ${activeTab === 'cap-auto' ? 'active' : ''}`} 
              onClick={() => setActiveTab('cap-auto')}
            >
              <span className="num">03</span>
              <div className="flex flex-col text-left leading-tight mt-0.5">
                <span>Automation</span>
                <span className="text-[6.5px] md:text-[7.5px] opacity-70 tracking-[0.2em] mt-1 uppercase">Workflows</span>
              </div>
            </button>
            <button 
              className={`capability-tab whitespace-nowrap text-[10px] md:text-xs uppercase tracking-[0.4em] ${activeTab === 'cap-info' ? 'active' : ''}`} 
              onClick={() => setActiveTab('cap-info')}
            >
              <span className="num">04</span>UI/UX
            </button>
          </div>
        </div>
        
        {/* Tab Display Panes */}
        <div id="capability-display" className="min-h-[400px] max-w-5xl mx-auto px-2 md:px-4 fade-in-up delay-200">
          
          {/* Pane 1: Web Development */}
          <div id="cap-web" className={`capability-pane glass-card p-6 md:p-12 ${activeTab === 'cap-web' ? 'active' : ''}`}>
            <div className="text-center md:text-left">
              <h4 className="font-serif text-2xl md:text-4xl text-white mb-6 leading-tight uppercase tracking-tight">Architecting Your Digital Home</h4>
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center md:justify-start gap-2 mb-10 w-full">
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Full-stack Developer</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Frontend Developer</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Backend developer</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">CSS</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Next.js</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Tailwind</span>
              </div>
              <p className="text-gray-100 text-sm md:text-lg font-light leading-relaxed mb-12 max-w-3xl mx-auto md:mx-0">
                I transform your vision into a purposeful digital presence. I craft high-performance, fluidly animated experiences that go beyond code to create meaningful engagement for every visitor.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 border-t border-white/5 pt-12 text-left">
                <div>
                  <p className="text-gold-base font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-6 flex items-center">
                    <span className="w-6 h-[1px] bg-gold-base mr-3"></span>Perfect for:
                  </p>
                  <ul className="space-y-5">
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Small-to-Mid Business owner aiming for scale.</span>
                    </li>
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Personal brand & creative portfolios.</span>
                    </li>
                  </ul>
                </div>
                <div className="sm:pt-11">
                  <ul className="space-y-5">
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Art & photo galleries for showcase.</span>
                    </li>
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Educational hubs & hobby platforms.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pane 2: Cinematic Content */}
          <div id="cap-cinema" className={`capability-pane glass-card p-6 md:p-12 ${activeTab === 'cap-cinema' ? 'active' : ''}`}>
            <div className="text-center md:text-left">
              <h4 className="font-serif text-2xl md:text-4xl text-white mb-6 uppercase tracking-tight">Visual Storytelling</h4>
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center md:justify-start gap-2 mb-10 w-full">
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Cinematic Image</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Cinematic Video</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">User Generated Content AI</span>
              </div>
              <p className="text-gray-100 text-sm md:text-lg font-light leading-relaxed mb-12 mx-auto md:mx-0 max-w-2xl">
                I specialize in high-quality video and image production designed to capture attention instantly and build strong brand desire. By blending artistry with AI innovation, I create visuals that don't just showcase products, but tell compelling stories.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 border-t border-white/5 pt-12 text-left">
                <div>
                  <p className="text-gold-base font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-6 flex items-center">
                    <span className="w-6 h-[1px] bg-gold-base mr-3"></span>Perfect for:
                  </p>
                  <ul className="space-y-5">
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>E-commerce brands needing premium visuals.</span>
                    </li>
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Content creators seeking a cinematic edge.</span>
                    </li>
                  </ul>
                </div>
                <div className="sm:pt-11">
                  <ul className="space-y-5">
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Digital Ad campaigns and social media features.</span>
                    </li>
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-400 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Storytelling for high-impact brand awareness.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pane 3: Automation */}
          <div id="cap-auto" className={`capability-pane glass-card p-6 md:p-12 ${activeTab === 'cap-auto' ? 'active' : ''}`}>
            <div className="text-center md:text-left">
              <h4 className="font-serif text-2xl md:text-4xl text-white mb-6 uppercase tracking-tight">Intelligent Automation</h4>
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center md:justify-start gap-2 mb-10 w-full">
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">AI Automation</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Code Automation</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Workflow Systems</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">AI Chatbots</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Process Optimization</span>
              </div>
              <p className="text-gray-100 text-sm md:text-lg font-light leading-relaxed mx-auto md:mx-0 max-w-2xl mb-12">
                I build robust, automated workflows that eliminate manual tasks and accelerate business operations. By seamlessly connecting diverse apps and leveraging AI, I create scalable systems that save hundreds of hours, allowing you to focus on high-level growth rather than repetitive admin work.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 border-t border-white/5 pt-12 text-left">
                <div>
                  <p className="text-gold-base font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-6 flex items-center">
                    <span className="w-6 h-[1px] bg-gold-base mr-3"></span>Perfect for:
                  </p>
                  <ul className="space-y-5">
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Founders wanting to put operations on autopilot.</span>
                    </li>
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Sales teams requiring automated lead nurturing.</span>
                    </li>
                  </ul>
                </div>
                <div className="sm:pt-11">
                  <ul className="space-y-5">
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Agencies looking to scale without adding headcount.</span>
                    </li>
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>E-commerce stores needing seamless fulfillment flows.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pane 4: UI/UX */}
          <div id="cap-info" className={`capability-pane glass-card p-6 md:p-12 ${activeTab === 'cap-info' ? 'active' : ''}`}>
            <div className="text-center md:text-left">
              <h4 className="font-serif text-2xl md:text-4xl text-white mb-6 uppercase tracking-tight">Intuitive Experiences</h4>
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center md:justify-start gap-2 mb-10 w-full">
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">User Research</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Wireframing</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Prototyping</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Interaction Design</span>
                <span className="block w-full sm:w-auto text-center px-3 py-2 sm:py-1.5 md:py-1 bg-gold-base/5 border border-gold-base/20 rounded-sm text-[9px] font-bold text-gold-base uppercase tracking-widest hover:bg-gold-base/10 transition-colors">Usability Testing</span>
              </div>
              <p className="text-gray-100 text-sm md:text-lg font-light leading-relaxed mx-auto md:mx-0 max-w-2xl mb-12">
                I craft intuitive, user-centric interfaces that seamlessly blend aesthetics with functionality. By focusing on user behavior and strategic design principles, I create engaging digital experiences that drive both conversion and customer satisfaction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 border-t border-white/5 pt-12 text-left">
                <div>
                  <p className="text-gold-base font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-6 flex items-center">
                    <span className="w-6 h-[1px] bg-gold-base mr-3"></span>Perfect for:
                  </p>
                  <ul className="space-y-5">
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Startups building a scalable Minimum Viable Product (MVP).</span>
                    </li>
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>E-commerce platforms aiming to boost conversion rates.</span>
                    </li>
                  </ul>
                </div>
                <div className="sm:pt-11">
                  <ul className="space-y-5">
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>SaaS companies needing clean, intuitive dashboards.</span>
                    </li>
                    <li className="flex items-start space-x-4 text-sm md:text-base text-gray-300 group">
                      <ArrowUpRight className="w-5 h-5 text-gold-base mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Brands wanting to modernize legacy applications.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Technical Arsenal Section */}
        <div className="mt-16 md:mt-24 fade-in-up delay-200 max-w-6xl mx-auto border-t border-white/5 pt-16 md:pt-20">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-10 h-[1px] bg-gold-base/60"></div>
            <h3 className="text-white font-serif text-xl md:text-3xl font-bold uppercase tracking-widest">Technical <span className="text-gold italic">Arsenal</span></h3>
            <div className="flex-grow h-[1px] bg-white/5"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            
            {/* Skill 1 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Workflow className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Workflow Automation</h4>
            </div>

            {/* Skill 2 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Activity className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Google Flow Ads</h4>
            </div>

            {/* Skill 3 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Receipt className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Billing & Invoicing</h4>
            </div>

            {/* Skill 4 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <PieChart className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Google Analytics</h4>
            </div>

            {/* Skill 5 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Search className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">SEO Optimization</h4>
            </div>

            {/* Skill 6 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Sparkles className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">AI Prompting</h4>
            </div>

            {/* Skill 7 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Bot className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Google Gemini</h4>
            </div>

            {/* Skill 8 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Cpu className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Claude Skill Opt.</h4>
            </div>

            {/* Skill 9 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <PenTool className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Copywriting</h4>
            </div>

            {/* Skill 10 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Layers className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Google Stitch</h4>
            </div>

            {/* Skill 11 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Code2 className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">React / Next.js</h4>
            </div>

            {/* Skill 12 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <LayoutTemplate className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Frontend Dev</h4>
            </div>

            {/* Skill 13 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Paintbrush className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Tailwind CSS</h4>
            </div>

            {/* Skill 14 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <LayoutDashboard className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">UI/UX Design</h4>
            </div>

            {/* Skill 15 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Files className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Excel, Word, PPT</h4>
            </div>

            {/* Skill 16 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Coins className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Crypto Analytics</h4>
            </div>

            {/* Skill 17 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <LineChart className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">TradingView Analytics</h4>
            </div>

            {/* Skill 18 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <ShieldCheck className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Web3 Testing</h4>
            </div>

            {/* Skill 19 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <BarChart3 className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Data Visualization</h4>
            </div>

            {/* Skill 20 */}
            <div className="glass-card group p-4 border border-white/5 hover:border-gold-base/40 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1">
              <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-gold-base/20 transition-colors">
                <Camera className="w-5 h-5 text-gray-400 group-hover:text-gold-base transition-colors" />
              </div>
              <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Cinematic Photo</h4>
            </div>

          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mt-16 md:mt-24 fade-in-up delay-200 max-w-6xl mx-auto border-t border-white/5 pt-16 md:pt-20">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-10 h-[1px] bg-gold-base/60"></div>
            <h3 className="text-white font-serif text-xl md:text-3xl font-bold uppercase tracking-widest">Professional <span className="text-gold italic">Acumen</span></h3>
            <div className="flex-grow h-[1px] bg-white/5"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Acumen 1 */}
            <div className="glass-card group p-6 border border-white/5 hover:border-gold-base/40 transition-all duration-500">
              <div className="p-3 bg-white/5 rounded-sm inline-block mb-4 group-hover:bg-gold-base/20 transition-colors">
                <Brain className="w-6 h-6 text-gold-base group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Strategic Thinking</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Aligning technical execution with overarching business goals.</p>
            </div>
            
            {/* Acumen 2 */}
            <div className="glass-card group p-6 border border-white/5 hover:border-gold-base/40 transition-all duration-500">
              <div className="p-3 bg-white/5 rounded-sm inline-block mb-4 group-hover:bg-gold-base/20 transition-colors">
                <Puzzle className="w-6 h-6 text-gold-base group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Adaptive Problem Solving</h4>
              <p className="text-gray-400 text-xs leading-relaxed">De-escalating high-pressure client or operational situations seamlessly.</p>
            </div>
            
            {/* Acumen 3 */}
            <div className="glass-card group p-6 border border-white/5 hover:border-gold-base/40 transition-all duration-500">
              <div className="p-3 bg-white/5 rounded-sm inline-block mb-4 group-hover:bg-gold-base/20 transition-colors">
                <Users className="w-6 h-6 text-gold-base group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Cross-functional Leadership</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Managing and motivating cross-disciplinary teams effectively.</p>
            </div>
            
            {/* Acumen 4 */}
            <div className="glass-card group p-6 border border-white/5 hover:border-gold-base/40 transition-all duration-500">
              <div className="p-3 bg-white/5 rounded-sm inline-block mb-4 group-hover:bg-gold-base/20 transition-colors">
                <Handshake className="w-6 h-6 text-gold-base group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Client Relationship</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Building trust and managing expectations for long-term partnerships.</p>
            </div>
            
            {/* Acumen 5 */}
            <div className="glass-card group p-6 border border-white/5 hover:border-gold-base/40 transition-all duration-500">
              <div className="p-3 bg-white/5 rounded-sm inline-block mb-4 group-hover:bg-gold-base/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-gold-base group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Persuasive Communication</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Presenting complex data to non-technical stakeholders with clarity.</p>
            </div>

            {/* Acumen 6 */}
            <div className="glass-card group p-6 border border-white/5 hover:border-gold-base/40 transition-all duration-500">
              <div className="p-3 bg-white/5 rounded-sm inline-block mb-4 group-hover:bg-gold-base/20 transition-colors">
                <Lightbulb className="w-6 h-6 text-gold-base group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Continuous Learning</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Rapidly mastering new technologies (AI/Web3) to keep strategies cutting-edge.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
