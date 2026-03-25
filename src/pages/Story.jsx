import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { storyData } from "../data/storyData";
import Gallery from "../components/Gallery";

export default function Story() {
  const { id } = useParams();
  const navigate = useNavigate();
  const storyIndex = storyData.findIndex((s) => s.id === id);
  const story = storyData[storyIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!story) navigate("/");
  }, [id, story, navigate]);

  if (!story) return null;

  const nextStory = storyData[(storyIndex + 1) % storyData.length];
  const prevStory = storyData[(storyIndex - 1 + storyData.length) % storyData.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-primary min-h-screen pt-24 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-text/60 hover:text-accent transition-colors mb-12 group uppercase tracking-widest text-xs"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Timeline</span>
        </Link>

        {/* Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="text-accent font-body uppercase tracking-[0.3em] text-xs mb-4 block">
              {story.date}
            </span>
            <h1 className="text-5xl md:text-7xl font-display text-text mb-8 leading-tight">
              {story.title}
            </h1>
            <div className="w-24 h-px bg-accent mb-12" />
            <p className="text-text/80 text-lg md:text-xl leading-relaxed font-body italic">
              "{story.narrative}"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-24">
          <h2 className="text-3xl font-display mb-12 text-center">Captured Moments</h2>
          <Gallery images={story.gallery} />
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-accent/10 pt-12 space-y-8 md:space-y-0">
          <Link
            to={`/story/${prevStory.id}`}
            className="group flex flex-col items-start space-y-2 max-w-xs"
          >
            <span className="text-[10px] uppercase tracking-widest text-text/40 group-hover:text-accent font-body">Previous Chapter</span>
            <div className="flex items-center space-x-3">
              <ChevronLeft size={20} className="text-accent group-hover:-translate-x-1 transition-transform" />
              <span className="font-display text-xl text-text group-hover:text-accent transition-colors">{prevStory.title}</span>
            </div>
          </Link>

          <div className="flex flex-col items-center">
            <div className="w-12 h-px bg-accent/20 mb-4" />
            <span className="font-display italic text-accent opacity-50 text-2xl">&</span>
          </div>

          <Link
            to={`/story/${nextStory.id}`}
            className="group flex flex-col items-end space-y-2 max-w-xs text-right"
          >
            <span className="text-[10px] uppercase tracking-widest text-text/40 group-hover:text-accent font-body">Next Chapter</span>
            <div className="flex items-center space-x-3">
              <span className="font-display text-xl text-text group-hover:text-accent transition-colors">{nextStory.title}</span>
              <ChevronRight size={20} className="text-accent group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
