
import React, { useState, useEffect } from 'react';
import { PROJECTS, TECH_STACK, TEAM } from './constants';
import AIChatbox from './components/AIChatbox';
import AuraLogo from './components/AuraLogo';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white bg-slate-950">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-2 border-b border-slate-800' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <AuraLogo className="w-10 h-10 group-hover:rotate-[360deg] transition-transform duration-700" />
            <span className="text-2xl font-bold tracking-tighter text-white">AURA<span className="text-cyan-400">TECH</span></span>
          </div>
          <div className="hidden md:flex">
             <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">Innovating Reality</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="container mx-auto text-center space-y-12 relative z-10">
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <AuraLogo className="w-32 h-32 md:w-56 md:h-56 mb-4 animate-float" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Pioneering Real-Time Innovation
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white leading-[1.1]">
              Elevate Your Reality with <br />
              <span className="text-gradient drop-shadow-sm">AURA Technology</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed font-light mt-8">
              A high-performance squad of seven visionaries engineering the future of 
              <span className="text-white font-medium"> AI, Web, Mobile, and IoT</span> solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/10 border-y border-slate-900">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.4em]">Our Mission</h2>
              <h3 className="text-4xl font-bold text-white leading-tight">Architecting the Invisible. <br/>Delivering the Extraordinary.</h3>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              At AURA Tech, we don't just write code; we architect experiences. Our team of seven specializes in taking complex business needs and translating them into elegant, real-time digital products.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="text-4xl font-black text-cyan-400">100%</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Real-Time Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black text-purple-400">7+</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Core Visionaries</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl rounded-[2rem] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Cyber Technology" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 px-6">
        <div className="container mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-bold text-purple-500 uppercase tracking-[0.4em]">Portfolio</h2>
            <h3 className="text-5xl font-black text-white">Latest Breakthroughs</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative bg-slate-900/40 border border-slate-800/50 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(34,211,238,0.2)] flex flex-col">
                <div className="h-72 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
                </div>
                <div className="p-10 -mt-20 relative z-10 space-y-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-bold uppercase tracking-widest">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 font-light">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-slate-500 border border-slate-800 px-2 py-0.5 rounded-md">{tag}</span>
                    ))}
                  </div>

                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all pt-4 mt-auto"
                    >
                      Explore Project
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                  ) : (
                    <button className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all pt-4 mt-auto">
                      View Showcase
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_0%,transparent_70%)]"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 relative z-10">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.4em]">Tech Ecosystem</h2>
              <h3 className="text-4xl font-bold text-white">Advanced Stack Integration</h3>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-slate-500 uppercase text-[10px] font-bold tracking-[0.3em]">Core Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {TECH_STACK.concepts.map((concept) => (
                    <div key={concept} className="px-5 py-2.5 rounded-2xl bg-slate-900/50 border border-slate-800 text-slate-300 text-sm hover:border-cyan-500/40 hover:text-white transition-all cursor-default">
                      {concept}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-slate-500 uppercase text-[10px] font-bold tracking-[0.3em]">AI Engineering</h4>
                <div className="flex flex-wrap gap-3">
                  {TECH_STACK.aiTools.map((tool) => (
                    <div key={tool} className="px-5 py-2.5 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 text-sm hover:bg-cyan-500/10 transition-all cursor-default">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-slate-500 uppercase text-[10px] font-bold tracking-[0.3em]">AI Automation & Design</h4>
                <div className="flex flex-wrap gap-3">
                  {TECH_STACK.editingTools.map((tool: string) => (
                    <div key={tool} className="px-5 py-2.5 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-purple-400 text-sm hover:bg-purple-500/10 transition-all cursor-default">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative group flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-600/5 blur-[100px] rounded-full group-hover:bg-cyan-600/10 transition-all"></div>
            <div className="bg-slate-900/40 backdrop-blur-3xl border border-slate-800/50 p-16 rounded-[3rem] text-center space-y-8 max-w-md shadow-2xl shadow-cyan-500/5">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-[2rem] mx-auto flex items-center justify-center shadow-2xl shadow-cyan-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">AI-First Pipeline</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                We utilize the world's most advanced AI models to accelerate development cycles and ensure peak performance architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 px-6">
        <div className="container mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.4em]">The Collective</h2>
            <h3 className="text-5xl font-black text-white tracking-tight">The Seven Minds</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-12">
            {TEAM.map((member, i) => (
              <div key={i} className="text-center group transition-transform duration-500 hover:-translate-y-4">
                <div className="relative mb-6 mx-auto w-28 h-28 md:w-36 md:h-36">
                  <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <img src={member.avatar} alt={member.name} className="relative w-full h-full rounded-full border border-slate-800 object-cover p-1.5 group-hover:border-cyan-500 transition-colors duration-500 grayscale group-hover:grayscale-0" />
                </div>
                <h4 className="text-white font-bold text-base md:text-lg group-hover:text-cyan-400 transition-colors">{member.name}</h4>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-900/50 bg-slate-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
               <AuraLogo className="w-8 h-8" />
               <span className="text-2xl font-black tracking-tighter text-white">AURA<span className="text-cyan-400">TECH</span></span>
            </div>
            <p className="text-slate-600 text-xs font-medium uppercase tracking-[0.2em]">Innovating the Real-Time Web</p>
          </div>
          <p className="text-slate-500 text-sm font-light">© 2026 AURA Tech. All rights reserved.</p>
        </div>
      </footer>

      <AIChatbox />
    </div>
  );
};

export default App;
