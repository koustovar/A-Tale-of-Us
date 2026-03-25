import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play, Music, Volume2, VolumeX } from "lucide-react";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMusic = () => {
    setIsMuted(!isMuted);
    setIsPlaying(true);
  };

  const navLinks = [
    { name: "Story", path: "/" },
    { name: "Wedding Details", path: "/details" },
    { name: "Gallery", path: "/gallery" },
    { name: "RSVP", path: "/rsvp" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
        isScrolled ? "bg-primary/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="group">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="text-2xl md:text-3xl font-display font-medium tracking-tight text-text group-hover:text-accent transition-colors duration-300">
              Emma & James
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent mt-1">
              June 14, 2025
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative text-sm font-body uppercase tracking-widest text-text/80 hover:text-accent transition-colors duration-300",
                location.pathname === link.path && "text-accent font-medium"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                />
              )}
            </Link>
          ))}
          
          <button 
            onClick={toggleMusic}
            className="p-2 rounded-full hover:bg-accent/10 transition-colors duration-300 group"
            title={isMuted ? "Play Background Music" : "Mute Music"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-text/60 group-hover:text-accent" />
            ) : (
              <Volume2 className="w-5 h-5 text-accent animate-pulse" />
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <button 
            onClick={toggleMusic}
            className="p-2 rounded-full"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-text/60" />
            ) : (
              <Volume2 className="w-5 h-5 text-accent animate-pulse" />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-text"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-accent/10 mt-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 py-8 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-display tracking-wide text-text"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
