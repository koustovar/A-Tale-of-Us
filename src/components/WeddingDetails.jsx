import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Coffee, Music, Camera } from "lucide-react";

export default function WeddingDetails() {
  const schedule = [
    { time: "4:00 PM", event: "Wedding Ceremony", icon: <Heart className="w-5 h-5" />, desc: "The main event at the North Garden." },
    { time: "5:00 PM", event: "Cocktail Hour", icon: <Coffee className="w-5 h-5" />, desc: "Drinks and appetizers on the terrace." },
    { time: "6:30 PM", event: "Dinner & Toasts", icon: <Music className="w-5 h-5" />, desc: "A seated dinner in the Grand Ballroom." },
    { time: "8:30 PM", event: "Dancing", icon: <Camera className="w-5 h-5" />, desc: "Celebration with live music and late snacks." },
  ];

  return (
    <div className="bg-primary min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-body uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            All the Details
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display text-text"
          >
            The Celebration
          </motion.h1>
          <div className="w-24 h-px bg-accent mx-auto mt-12" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Location & Time Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/40 backdrop-blur-md p-10 rounded-[2rem] shadow-xl border border-white/50 space-y-12"
          >
            <div className="space-y-6">
               <h2 className="text-3xl font-display text-text flex items-center space-x-3">
                <MapPin className="text-accent" />
                <span>Venue & Location</span>
              </h2>
              <p className="text-text/70 font-body leading-relaxed text-lg">
                The Grand Arboretum<br />
                123 Botanical Way, New York, NY 10001
              </p>
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-inner grayscale-[30%] opacity-80 hover:grayscale-0 transition-all duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528082188!2d-74.1197637399446!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1711234567890!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-display text-xl flex items-center space-x-2">
                  <Calendar className="text-accent w-5 h-5" />
                  <span>Date</span>
                </h3>
                <p className="font-body text-text/70 uppercase tracking-widest text-sm">June 14, 2025</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-xl flex items-center space-x-2">
                  <Clock className="text-accent w-5 h-5" />
                  <span>Time</span>
                </h3>
                <p className="font-body text-text/70 uppercase tracking-widest text-sm">Ceremony at 4:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-display text-text">The Schedule</h2>
            <div className="space-y-8">
              {schedule.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex space-x-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                      {item.icon}
                    </div>
                    {idx !== schedule.length - 1 && (
                      <div className="w-px h-full bg-accent/20 my-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-accent font-body text-xs uppercase tracking-widest font-semibold">{item.time}</span>
                    <h3 className="text-2xl font-display text-text mt-1">{item.event}</h3>
                    <p className="text-text/60 font-body text-sm mt-2">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-8 bg-secondary/20 rounded-2xl border border-accent/10">
              <h3 className="font-display text-xl mb-4">Attire</h3>
              <p className="text-text/70 font-body leading-relaxed">
                We'd love to see you in Black Tie optional. Think elegant cocktail dresses, floor-length gowns, and sharp suits or tuxedos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Simple Heart component fallback since I used Heart in icon list but didn't import from lucide-react if it doesn't exist
function Heart(props) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
