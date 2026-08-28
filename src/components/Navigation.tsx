interface NavProps {
  activeTab: 'teens' | 'companies';
  setActiveTab: (tab: 'teens' | 'companies') => void;
}

export function Navigation({ activeTab, setActiveTab }: NavProps) {
  return (
    <nav className="h-[80px] flex justify-between items-center px-12 bg-[#0B0F1A] sticky top-0 z-50 border-b border-[#242B3D]">
      <a href="#" className="text-[24px] font-extrabold text-[#10B981] tracking-tight no-underline uppercase">FUNNGRO</a>
      
      <div className="flex gap-8 items-center">
        <button
          className={`text-[14px] font-medium transition-all duration-300 pb-1 ${
            activeTab === 'teens'
              ? 'text-[#F8FAFC] border-b-2 border-[#10B981]'
              : 'text-[#94A3B8] border-b-2 border-transparent hover:text-[#F8FAFC]'
          }`}
          onClick={() => setActiveTab('teens')}
        >
          For Teens
        </button>
        <button
          className={`text-[14px] font-medium transition-all duration-300 pb-1 ${
            activeTab === 'companies'
              ? 'text-[#F8FAFC] border-b-2 border-[#10B981]'
              : 'text-[#94A3B8] border-b-2 border-transparent hover:text-[#F8FAFC]'
          }`}
          onClick={() => setActiveTab('companies')}
        >
          For Companies
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => alert("Login is currently disabled.")}
          className="px-6 py-2.5 bg-transparent border border-[#10B981] text-[#10B981] font-semibold text-[14px] rounded-lg hover:bg-[#10B981]/10 transition-colors"
        >
          Login
        </button>
      </div>
    </nav>
  );
}
