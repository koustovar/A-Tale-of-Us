import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Heart } from "lucide-react";

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "1",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 px-8 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl border border-accent/20 max-w-2xl mx-auto"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-accent/10 rounded-full">
             <Heart className="w-12 h-12 text-accent fill-accent" />
          </div>
        </div>
        <h2 className="text-4xl font-display text-text mb-4">Thank You!</h2>
        <p className="text-text/70 font-body text-lg">Your response has been received. We can't wait to celebrate with you!</p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display text-text mb-4">Kindly Respond</h2>
        <p className="font-body text-text/60 uppercase tracking-widest text-sm">Please RSVP by May 1st, 2025</p>
        <div className="w-16 h-px bg-accent mx-auto mt-6" />
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white/50">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-text/60 font-body">Full Name</label>
            <input
              type="text"
              required
              placeholder="Your Name"
              className="w-full bg-primary/50 border-b border-accent/30 py-3 px-4 focus:outline-none focus:border-accent font-body transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-text/60 font-body">Email Address</label>
            <input
              type="email"
              required
              placeholder="hello@example.com"
              className="w-full bg-primary/50 border-b border-accent/30 py-3 px-4 focus:outline-none focus:border-accent font-body transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-text/60 font-body">Will you attend?</label>
            <div className="flex space-x-6 pt-2">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === "yes"}
                  onChange={(e) => setFormData({...formData, attending: e.target.value})}
                  className="w-4 h-4 accent-accent"
                />
                <span className="text-text/80 font-body group-hover:text-text">Joyfully Accept</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === "no"}
                  onChange={(e) => setFormData({...formData, attending: e.target.value})}
                  className="w-4 h-4 accent-accent"
                />
                <span className="text-text/80 font-body group-hover:text-text">Regretfully Decline</span>
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-text/60 font-body">Number of Guests</label>
            <select
              className="w-full bg-primary/50 border-b border-accent/30 py-3 px-4 focus:outline-none focus:border-accent font-body transition-colors"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
            >
              <option value="1">Just Me</option>
              <option value="2">Plus One</option>
              {formData.attending === "no" && <option value="0">None</option>}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-text/60 font-body">Message / Song Request</label>
            <textarea
              rows="4"
              placeholder="Leave a message for the couple..."
              className="w-full bg-primary/50 border-b border-accent/30 py-3 px-4 focus:outline-none focus:border-accent font-body transition-colors resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-luxury-black text-primary py-4 rounded-xl font-body uppercase tracking-[0.2em] text-sm flex items-center justify-center space-x-3 hover:bg-accent transition-colors duration-300 shadow-lg"
          >
            <span>Send RSVP</span>
            <Send size={16} />
          </motion.button>
        </div>
      </form>
    </div>
  );
}
