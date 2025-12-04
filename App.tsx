import React, { useState } from 'react';
import Navigation from './components/Navigation';
import SectionCard from './components/SectionCard';
import ChatComponent from './components/ChatComponent';
import { SectionId } from './types';
import { APP_TITLE, APP_SUBTITLE, INTRO_TEXT, AI_TYPES, CASE_STUDIES, ETHICS_POINTS } from './constants';

// Icons as simple SVG components for performance and simplicity
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
);

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.INTRO);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case SectionId.INTRO:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 p-8 md:p-12 border border-slate-700 shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                  <span className="text-brand-accent">1.2</span> Tipos de IA
                </h2>
                <p className="text-xl text-slate-300 font-light mb-8 max-w-2xl">
                  {APP_SUBTITLE}
                </p>
                <div className="h-1 w-24 bg-brand-accent rounded"></div>
              </div>
              {/* Decorative background element */}
              <div className="absolute right-0 top-0 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <SectionCard title="Introducción al Módulo" className="bg-slate-800/80">
              <p className="text-lg text-slate-300 whitespace-pre-line">
                {INTRO_TEXT}
              </p>
            </SectionCard>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                    <h4 className="text-brand-accent font-bold mb-2">Objetivo</h4>
                    <p className="text-sm text-slate-400">Distinguir tipos de IA para tomar decisiones informadas sobre transparencia, gobernanza y costos.</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                    <h4 className="text-brand-accent font-bold mb-2">Impacto</h4>
                    <p className="text-sm text-slate-400">Anticipar capacidades necesarias y preparar políticas públicas justas y eficientes.</p>
                </div>
            </div>
          </div>
        );

      case SectionId.CLASSIFICATION:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Clasificaciones Amplias</h2>
                <p className="text-slate-400">Según alcance y madurez tecnológica</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {AI_TYPES.map((type, idx) => (
                <SectionCard 
                    key={idx} 
                    title={type.name} 
                    icon={<CpuIcon />}
                    className="h-full"
                >
                  <p className="mb-4">{type.description}</p>
                  <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                    <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">Ejemplo</span>
                    <p className="text-sm italic text-slate-400">{type.example}</p>
                  </div>
                </SectionCard>
              ))}
            </div>
          </div>
        );

      case SectionId.METHODOLOGY:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Enfoques Metodológicos</h2>
                <p className="text-slate-400">De la IA Simbólica a la IA Generativa</p>
            </div>

            {/* Timeline Visualization */}
            <div className="relative border-l-2 border-slate-700 ml-4 space-y-12">
              <div className="relative pl-8">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-primary ring-4 ring-slate-900"></span>
                <h3 className="text-xl font-bold text-white mb-2">IA Simbólica</h3>
                <p className="text-slate-300 mb-2">Reglas explícitas y conocimiento experto. Totalmente auditable pero rígida.</p>
                <div className="text-sm text-slate-500 bg-slate-800/50 p-2 rounded inline-block">Ej: Sistemas tributarios</div>
              </div>

              <div className="relative pl-8">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-accent ring-4 ring-slate-900"></span>
                <h3 className="text-xl font-bold text-white mb-2">Aprendizaje Supervisado</h3>
                <p className="text-slate-300 mb-2">Aprende patrones de datos etiquetados. Requiere monitoreo de sesgos.</p>
                <div className="text-sm text-slate-500 bg-slate-800/50 p-2 rounded inline-block">Ej: Predicción de deserción escolar (SAT)</div>
              </div>

              <div className="relative pl-8">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-slate-900"></span>
                <h3 className="text-xl font-bold text-white mb-2">Aprendizaje por Refuerzo</h3>
                <p className="text-slate-300 mb-2">Aprende por prueba y error (recompensas).</p>
                <div className="text-sm text-slate-500 bg-slate-800/50 p-2 rounded inline-block">Ej: Optimización de semáforos</div>
              </div>
              
               <div className="relative pl-8">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-slate-900"></span>
                <h3 className="text-xl font-bold text-white mb-2">IA Generativa</h3>
                <p className="text-slate-300 mb-2">Crea contenido nuevo. Potente pero con riesgo de "alucinaciones".</p>
                <div className="text-sm text-slate-500 bg-slate-800/50 p-2 rounded inline-block">Ej: Borradores de informes</div>
              </div>
            </div>
          </div>
        );

      case SectionId.CASES:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Casos Reales</h2>
                <p className="text-slate-400">Innovación en el Servicio Público Global</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {CASE_STUDIES.map((study, idx) => (
                <div key={idx} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 group hover:border-brand-accent transition-colors">
                  <div className="h-2 bg-gradient-to-r from-brand-primary to-brand-accent"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-brand-accent">
                         <GlobeIcon />
                         <span className="font-bold text-sm uppercase tracking-wide">{study.country}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{study.title}</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{study.description}</p>
                    <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-green-500 mb-4">
                       <p className="text-sm text-green-400 font-semibold mb-1">Impacto:</p>
                       <p className="text-sm text-slate-300">{study.impact}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case SectionId.ETHICS:
        return (
           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Implicaciones Éticas</h2>
                <p className="text-slate-400">Desafíos de gobernanza diferenciados por tipo de IA</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ETHICS_POINTS.map((point, idx) => (
                    <SectionCard key={idx} title={point.title} icon={<ShieldIcon />} className="border-t-4 border-t-red-500/50">
                        <p>{point.desc}</p>
                    </SectionCard>
                ))}
            </div>

            <div className="mt-8 p-6 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Conclusión Normativa</h3>
                <p className="text-slate-300">
                    La adaptación normativa debe ser proporcional al riesgo. El Marco Europeo de IA y las directrices latinoamericanas convergen en una lógica basada en niveles de riesgo: desde sistemas de bajo riesgo (auditorías internas) hasta alto riesgo (auditorías externas obligatorias).
                </p>
            </div>
           </div>
        );
        
      case SectionId.CHAT:
        return (
             <div className="animate-in fade-in zoom-in-95 duration-300 h-full">
                 <ChatComponent />
             </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col lg:flex-row text-slate-200 font-sans selection:bg-brand-accent selection:text-brand-dark">
      <Navigation 
        activeSection={activeSection} 
        onNavigate={setActiveSection}
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      <main className="flex-1 lg:ml-64 relative min-h-screen flex flex-col">
        {/* Mobile Header Trigger */}
        <div className="lg:hidden p-4 bg-brand-dark border-b border-slate-800 flex justify-between items-center sticky top-0 z-30">
          <span className="font-bold text-lg text-white">Módulo IA</span>
          <button onClick={() => setIsMenuOpen(true)} className="p-2 text-white bg-slate-800 rounded-lg">
            <MenuIcon />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;