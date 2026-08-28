import { motion } from 'motion/react';

export function TeensPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-12 py-10 w-full max-w-none flex flex-col"
    >
      <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[60px] items-center py-10">
        <div>
          <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-extrabold mb-6 tracking-[-2px] text-[#F8FAFC]">
            Earn Money & Gain <span className="text-[#10B981]">Real Skills</span> Early.
          </h1>
          <p className="text-[18px] text-[#94A3B8] leading-[1.6] max-w-[500px] mb-8">
            Start your freelancing journey in your teenage years. Work with real companies and earn money safely.
          </p>
          <div className="flex gap-5">
            <button className="bg-[#10B981] text-black px-10 py-4 font-semibold text-[16px] rounded-lg hover:bg-[#0e9f6e] transition-colors">
              Start Earning Today
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#161B28] border border-[#242B3D] p-6 rounded-[16px]">
            <div className="text-[32px] font-bold text-[#10B981] mb-1">3,500+</div>
            <div className="text-[12px] text-[#94A3B8] uppercase tracking-[1px]">Companies</div>
          </div>
          <div className="bg-[#161B28] border border-[#242B3D] p-6 rounded-[16px] mt-6">
            <div className="text-[32px] font-bold text-[#10B981] mb-1">12+</div>
            <div className="text-[12px] text-[#94A3B8] uppercase tracking-[1px]">Categories</div>
          </div>
          <div className="bg-[#161B28] border border-[#242B3D] p-6 rounded-[16px]">
            <div className="text-[32px] font-bold text-[#10B981] mb-1">$2M+</div>
            <div className="text-[12px] text-[#94A3B8] uppercase tracking-[1px]">Total Earned</div>
          </div>
          <div className="bg-[#161B28] border border-[#242B3D] p-6 rounded-[16px] mt-6">
            <div className="text-[32px] font-bold text-[#10B981] mb-1">4.8/5</div>
            <div className="text-[12px] text-[#94A3B8] uppercase tracking-[1px]">User Rating</div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 mt-6">
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-[10px] bg-[#10B981]/10 border border-[#10B981]/20 shrink-0 flex items-center justify-center text-[#10B981] font-bold">
            01
          </div>
          <div>
            <h3 className="text-[16px] text-[#F8FAFC] mb-2 font-semibold">Learn Skills</h3>
            <p className="text-[14px] text-[#94A3B8] leading-[1.5]">
              Gain hands-on experience in graphic design, SEO content writing, web development, and social media management.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-[10px] bg-[#10B981]/10 border border-[#10B981]/20 shrink-0 flex items-center justify-center text-[#10B981] font-bold">
            02
          </div>
          <div>
            <h3 className="text-[16px] text-[#F8FAFC] mb-2 font-semibold">Real Projects</h3>
            <p className="text-[14px] text-[#94A3B8] leading-[1.5]">
              Work directly on tasks assigned by real companies and build a professional portfolio early.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-[10px] bg-[#10B981]/10 border border-[#10B981]/20 shrink-0 flex items-center justify-center text-[#10B981] font-bold">
            03
          </div>
          <div>
            <h3 className="text-[16px] text-[#F8FAFC] mb-2 font-semibold">Get Paid Safely</h3>
            <p className="text-[14px] text-[#94A3B8] leading-[1.5]">
              Earn money for completed projects transferred securely directly to your approved payout method.
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
