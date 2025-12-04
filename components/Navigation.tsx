import React from 'react';
import { SectionId } from '../types';

interface NavigationProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate, isMenuOpen, toggleMenu }) => {
  const navItems = [
    { id: SectionId.INTRO, label: 'Introducción' },
    { id: SectionId.CLASSIFICATION, label: 'Clasificaciones' },
    { id: SectionId.METHODOLOGY, label: 'Metodologías' },
    { id: SectionId.CASES, label: 'Casos Reales' },
    { id: SectionId.ETHICS, label: 'Ética y Gobernanza' },
    { id: SectionId.CHAT, label: 'Asistente IA', special: true },
  ];

  return (
    <>
      {/* Mobile Header Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/50 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`} onClick={toggleMenu} />

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-50 h-full w-64 bg-brand-dark border-r border-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
              <span className="text-brand-dark font-bold text-xl">IA</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">Módulo 1</h1>
              <p className="text-slate-400 text-xs">Sector Público</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                if (window.innerWidth < 1024) toggleMenu();
              }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group
                ${activeSection === item.id 
                  ? item.special 
                    ? 'bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-800 text-brand-accent border-l-4 border-brand-accent'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                }
              `}
            >
              <span className="font-medium">{item.label}</span>
              {activeSection === item.id && (
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              )}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center">
            Universidad de Cartagena<br/>MinTIC 2025
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navigation;