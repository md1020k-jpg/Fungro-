import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { TeensPage } from './components/TeensPage';
import { CompaniesPage } from './components/CompaniesPage';
import { AIAssistant } from './components/AIAssistant';

export default function App() {
  const [activeTab, setActiveTab] = useState<'teens' | 'companies'>('teens');

  return (
    <div className="min-h-screen bg-[#0B0F1A] font-sans text-[#F8FAFC] flex flex-col">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 'teens' ? (
            <TeensPage key="teens" />
          ) : (
            <CompaniesPage key="companies" />
          )}
        </AnimatePresence>
        <AIAssistant />
      </div>

      <footer className="h-12 border-t border-[#242B3D] flex items-center justify-between text-[12px] text-[#94A3B8] px-12 mt-12 shrink-0">
        <div>&copy; 2026 Funngro. The Future of Work for Teens.</div>
        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-[#F8FAFC]">Privacy Policy</span>
          <span className="cursor-pointer hover:text-[#F8FAFC]">Terms of Service</span>
          <span className="cursor-pointer hover:text-[#F8FAFC]">Help Center</span>
        </div>
      </footer>
    </div>
  );
}
