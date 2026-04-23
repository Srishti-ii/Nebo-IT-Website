import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Calendar, User } from 'lucide-react';

const MOCK_BLOGS = [
  { id: '1', title: 'Daily skincare routine tips', author: 'Ellen Brooks', date: 'Feb 22, 2026', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800', description: 'Expert advice for daily skincare routines to maintain healthy, glowing skin.', content: 'A consistent skincare routine is the foundation of long-term skin health. For professionals in high-stress environments, we recommend a three-step process: Cleanse, Hydrate, and Protect. Using a pH-balanced cleanser ensures that the skin barrier remains intact while removing pollutants encountered during the day.' },
  { id: '2', title: 'Achieving skin radiance naturally', author: 'Lily Thompson', date: 'Mar 17, 2026', image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800', description: 'Natural methods to achieve a radiant complexion without harsh chemicals.', content: 'Radiance comes from within. Integrating antioxidants like Vitamin C and E through both topical application and a balanced diet can significantly improve skin luminosity. We explore how cold-pressed botanical oils can provide the necessary fatty acids to restore that natural glow.' },
  { id: '3', title: 'Natural ingredients for skincare', author: 'Oliver Davis', date: 'Apr 30, 2026', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800', description: 'Explore the benefits of botanical extracts in your modern products.', content: 'The plant kingdom offers surgical precision in addressing specific skin concerns. This article breaks down the molecular benefits of five key botanical extracts, from Aloe Vera for soothing irritation to Jojoba oil for mimicking natural sebum.' },
  { id: '4', title: 'The Science of Hydration', author: 'Srishti Srivastava', date: 'May 05, 2026', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800', description: 'Understanding how molecular hydration works for skin elasticity.', content: 'Deep dive into hyaluronic acid and moisture retention. We analyze how different molecular weights of active ingredients penetrate skin layers to provide lasting industrial-grade protection.' },
  { id: '5', title: 'Sun Protection Essentials', author: 'Pranav Srivastava', date: 'June 12, 2026', image: 'https://images.unsplash.com/photo-1526045431048-f857369aba09?q=80&w=800', description: 'Why SPF is the most critical step in your engineering of skin health.', content: 'Protecting against UV damage in outdoor industrial settings is non-negotiable. This guide explains the difference between chemical and physical blocks for long-term health.' }
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof MOCK_BLOGS[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Logic to toggle between a preview (3 items) and the full list
  const displayedBlogs = showAll ? MOCK_BLOGS : MOCK_BLOGS.slice(0, 3);

  return (
    <section id="blog" className="py-32 bg-[var(--bg-primary)] border-t border-slate-900">
      <div className="container mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="mb-16">
          <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase block mb-4">Insights</span>
          <h2 className="text-4xl md:text-7xl font-black var(--text-main) tracking-tighter leading-none uppercase">
            Scented stories for <br/> every mood
          </h2>
        </div>

        {/* Animated Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {displayedBlogs.map((post) => (
              <motion.div 
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedPost(post)}
                className="flex flex-col group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                </div>
                <div className="text-slate-500 text-xs font-medium mb-3 uppercase tracking-wider">{post.date}</div>
                <h3 className="text-2xl font-bold var(--text-main) mb-4 group-hover:text-cyan-400 transition-colors leading-tight">{post.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 line-clamp-3">{post.description}</p>
                <div className="mt-auto flex items-center gap-2 var(--text-main) text-xs font-bold uppercase tracking-tighter border-b border-[var(--border-subtle)] group-hover:border-cyan-500 w-fit pb-1 transition-all">
                  Read more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Toggle */}
        <div className="mt-20">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 border border-slate-700 rounded-full text-xs font-bold text-slate-300 hover:bg-white hover:text-slate-950 transition-all uppercase tracking-widest"
          >
            {showAll ? 'Show Less ↑' : 'View more articles →'}
          </button>
        </div>
      </div>

      {/* Full Modal Restoration */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-[var(--bg-primary)]/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[var(--bg-secondary)] rounded-3xl shadow-2xl border border-[var(--border-subtle)] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 min-h-[300px] md:h-auto">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-4 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={14}/> {selectedPost.date}</span>
                  <span className="flex items-center gap-1"><User size={14}/> {selectedPost.author}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-blackvar(--text-main) leading-tight uppercase">{selectedPost.title}</h2>
                <div className="h-1 w-20 bg-cyan-500" />
                <p className="text-slate-300 text-lg leading-relaxed">{selectedPost.content}</p>
                <p className="text-[var(--text-muted)] leading-relaxed text-sm italic border-l-2 border-[var(--border-subtle)] pl-4">{selectedPost.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;