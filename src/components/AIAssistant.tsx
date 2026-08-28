import { useState } from 'react';
import { Send, Loader2, Sparkles, Search } from 'lucide-react';
import Markdown from 'react-markdown';

export function AIAssistant() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'search' | 'think'>('search');

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');
    try {
      const endpoint = mode === 'search' ? '/api/ask' : '/api/think';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      
      setResponse(data.text);
    } catch (err: any) {
      setResponse(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-12 py-10 border-t border-[#242B3D] shrink-0">
      <div className="bg-[#161B28] rounded-[16px] p-6 md:p-8 border border-[#242B3D]">
        <h2 className="text-[24px] font-bold text-[#F8FAFC] mb-6 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-[#10B981]" />
          Funngro AI Assistant
        </h2>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setMode('search')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
              mode === 'search' 
                ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30' 
                : 'bg-[#0B0F1A] text-[#94A3B8] border border-[#242B3D] hover:bg-[#242B3D]/50'
            }`}
          >
            <Search className="w-4 h-4" />
            Web Search
          </button>
          <button
            onClick={() => setMode('think')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
              mode === 'think' 
                ? 'bg-purple-400/10 text-purple-400 border border-purple-400/30' 
                : 'bg-[#0B0F1A] text-[#94A3B8] border border-[#242B3D] hover:bg-[#242B3D]/50'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Deep Thinking
          </button>
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            placeholder={mode === 'search' ? "Ask anything... (Search enabled)" : "Ask complex questions... (High Thinking)"}
            className="flex-1 bg-[#0B0F1A] border border-[#242B3D] rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#10B981] placeholder:text-[#94A3B8] transition-colors"
          />
          <button
            onClick={handleAsk}
            disabled={loading || !prompt.trim()}
            className="bg-[#10B981] text-black px-8 py-3 rounded-lg font-semibold text-[14px] hover:bg-[#0e9f6e] transition-colors disabled:opacity-50 flex items-center justify-center min-w-[100px]"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>

        {response && (
          <div className="mt-8 bg-[#0B0F1A] rounded-[12px] p-6 border border-[#242B3D] text-[#94A3B8] leading-[1.6]">
            <div className="space-y-4">
              <Markdown>{response}</Markdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
