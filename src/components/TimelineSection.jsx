import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "../utils/cn";

export default function TimelineSection({ story, index }) {
  const isEven = index % 2 === 0;

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "relative group order-2",
            isEven ? "md:order-1" : "md:order-2"
          )}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl aspect-[4/5] md:aspect-[3/4]">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={cn(
            "flex flex-col space-y-6 order-1",
            isEven ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12"
          )}
        >
          <div className="flex items-center space-x-4">
            <span className="text-accent font-display text-4xl opacity-30">
              0{index + 1}
            </span>
            <div className="h-px w-12 bg-accent/30" />
            <span className="text-secondary font-body uppercase tracking-[0.2em] text-xs font-semibold">
              {story.date}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text leading-tight">
            {story.title}
          </h2>

          <p className="text-text/70 text-lg leading-relaxed max-w-md font-body">
            {story.shortDescription}
          </p>

          <Link
            to={`/story/${story.id}`}
            className="group inline-flex items-center space-x-3 text-text font-body uppercase tracking-widest text-sm hover:text-accent transition-colors duration-300"
          >
            <span>Explore Chapter</span>
            <motion.div
              whileHover={{ x: 5 }}
              className="p-2 bg-accent/10 rounded-full group-hover:bg-accent group-hover:text-primary transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/5 -z-10 hidden md:block" />
    </section>
  );
}
