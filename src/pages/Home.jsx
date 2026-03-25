import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import TimelineSection from "../components/TimelineSection";
import { storyData } from "../data/storyData";
import { ChevronDown, MapPin, Calendar, Clock, Play, Pause, X } from "lucide-react";
import heroImage from "../assets/images/hero.png";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 1.1]);
  
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let scrollInterval;
    if (isAutoScrolling) {
      scrollInterval = setInterval(() => {
        window.scrollBy({ top: 2, behavior: 'smooth' });
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
           setIsAutoScrolling(false);
        }
      }, 30);
    }
    return () => clearInterval(scrollInterval);
  }, [isAutoScrolling]);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const handleUserInteraction = () => {
      setIsAutoScrolling(false);
    };

    window.addEventListener("wheel", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [isAutoScrolling]);

  return (
    <div className="bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroImage}
            alt="Wedding Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/30 via-transparent to-primary" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-primary font-body uppercase tracking-[0.5em] text-xs md:text-sm mb-6 block">
              The Journey of Two Hearts
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display text-primary leading-none mb-12 drop-shadow-2xl">
              Emma & James
            </h1>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className="group bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-8 py-4 rounded-full font-body uppercase tracking-widest text-xs flex items-center space-x-3 hover:bg-primary hover:text-text transition-all duration-500"
            >
              {isAutoScrolling ? <Pause size={16} /> : <Play size={16} />}
              <span>{isAutoScrolling ? "Pause Story" : "Watch Our Story"}</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="text-primary w-8 h-8 animate-bounce opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* Floating Stop Button */}
      <AnimatePresence>
        {isAutoScrolling && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAutoScrolling(false)}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-accent text-primary px-8 py-4 rounded-full shadow-large flex items-center space-x-3 group transition-all duration-300 backdrop-blur-md border border-primary/20"
          >
            <X size={20} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-body uppercase tracking-widest text-xs whitespace-nowrap">
              Stop Story
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Story Timeline */}
      <div className="relative z-10">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-1/2 hidden md:block" />
        {storyData.map((story, index) => (
          <TimelineSection key={story.id} story={story} index={index} />
        ))}
      </div>

      {/* Wedding Details Preview */}
      <section className="py-32 bg-secondary/20 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display text-text mb-20"
          >
            Join Our Celebration
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="flex flex-col items-center space-y-6"
            >
              <div className="p-4 bg-accent/5 rounded-full">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl">The Date</h3>
              <p className="font-body text-text/60 uppercase tracking-widest text-sm leading-relaxed">
                Saturday <br /> June 14, 2025
              </p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex flex-col items-center space-y-6"
            >
              <div className="p-4 bg-accent/5 rounded-full">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl">The Time</h3>
              <p className="font-body text-text/60 uppercase tracking-widest text-sm leading-relaxed">
                Ceremony at <br /> 4:00 PM CST
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="flex flex-col items-center space-y-6"
            >
              <div className="p-4 bg-accent/5 rounded-full">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl">The Venue</h3>
              <p className="font-body text-text/60 uppercase tracking-widest text-sm leading-relaxed">
                The Grand Arboretum <br /> New York, NY
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </section>
    </div>
  );
}
