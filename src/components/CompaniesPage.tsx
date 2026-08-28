import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

interface Project {
  id: string;
  title: string;
  description: string;
  createdAt: any;
}

export function CompaniesPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    try {
      const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const fetched = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      setProjects(fetched);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handlePostProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    setLoading(true);
    try {
      await addDoc(collection(db, 'projects'), {
        title,
        description,
        createdBy: 'anonymous',
        createdAt: serverTimestamp()
      });
      setTitle('');
      setDescription('');
      fetchProjects();
    } catch (error) {
      console.error("Error adding project: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-12 py-10 w-full max-w-none flex flex-col"
    >
      <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[60px] items-center py-10 border-b border-[#242B3D]">
        <div>
          <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-extrabold mb-6 tracking-[-2px] text-[#F8FAFC]">
            Hire Smart, Energetic <span className="text-[#10B981]">Teen Talent</span>
          </h1>
          <p className="text-[18px] text-[#94A3B8] leading-[1.6] max-w-[500px] mb-8">
            Scale your business with cost-effective, innovative work from over 1 million eager teen freelancers.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-[10px] bg-[#10B981]/10 border border-[#10B981]/20 shrink-0 flex items-center justify-center text-[#10B981] font-bold">
              01
            </div>
            <div>
              <h3 className="text-[16px] text-[#F8FAFC] mb-2 font-semibold">Cost-Effective Solutions</h3>
              <p className="text-[14px] text-[#94A3B8] leading-[1.5]">
                Get micro-tasks and projects completed efficiently without traditional hiring overheads.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-[10px] bg-[#10B981]/10 border border-[#10B981]/20 shrink-0 flex items-center justify-center text-[#10B981] font-bold">
              02
            </div>
            <div>
              <h3 className="text-[16px] text-[#F8FAFC] mb-2 font-semibold">Fresh Perspectives</h3>
              <p className="text-[14px] text-[#94A3B8] leading-[1.5]">
                Tap into Gen-Z insights for your brand content, social media channels, and app testing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] mt-12">
        <div>
          <h2 className="text-[24px] font-bold mb-6 text-[#F8FAFC] tracking-tight">Post a New Project</h2>
          <form onSubmit={handlePostProject} className="bg-[#161B28] p-8 rounded-[16px] border border-[#242B3D]">
            <div className="mb-4">
              <label className="block text-[#94A3B8] text-[14px] font-medium mb-2">Project Title</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="e.g. Need a Graphic Designer"
                className="w-full bg-[#0B0F1A] border border-[#242B3D] rounded-lg px-4 py-3 text-[#F8FAFC] focus:border-[#10B981] outline-none transition-colors"
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#94A3B8] text-[14px] font-medium mb-2">Description</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Describe what you need..."
                rows={4}
                className="w-full bg-[#0B0F1A] border border-[#242B3D] rounded-lg px-4 py-3 text-[#F8FAFC] focus:border-[#10B981] outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#10B981] text-black px-6 py-3 font-semibold text-[14px] rounded-lg hover:bg-[#0e9f6e] transition-colors disabled:opacity-50"
            >
              {loading ? 'Posting...' : 'Post Project'}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-[24px] font-bold mb-6 text-[#F8FAFC] tracking-tight">Recent Projects</h2>
          <div className="space-y-4">
            {projects.length === 0 ? (
              <p className="text-[#94A3B8] text-[14px]">No projects posted yet.</p>
            ) : (
              projects.map(project => (
                <div key={project.id} className="bg-[#161B28] p-6 rounded-[16px] border border-[#242B3D]">
                  <h3 className="text-[16px] font-bold text-[#10B981] mb-2">{project.title}</h3>
                  <p className="text-[#94A3B8] text-[14px] leading-[1.5]">{project.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </motion.main>
  );
}
