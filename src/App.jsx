import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Story from "./pages/Story";
import WeddingDetails from "./components/WeddingDetails";
import RSVPForm from "./components/RSVPForm";
import Gallery from "./components/Gallery";
import { storyData } from "./data/storyData";

// Full Gallery view page
const FullGallery = () => {
  const allImages = storyData.flatMap(s => s.gallery);
  return (
    <div className="pt-32 px-6 md:px-12 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-display text-text text-center mb-16">Our Memories</h1>
        <Gallery images={allImages} />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="selection:bg-accent/30 selection:text-text">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story/:id" element={<Story />} />
            <Route path="/details" element={<WeddingDetails />} />
            <Route path="/gallery" element={<FullGallery />} />
            <Route path="/rsvp" element={<RSVPForm />} />
          </Routes>
        </AnimatePresence>
        
        <footer className="bg-luxury-black text-primary py-16 px-6 text-center border-t border-accent/20 mt-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-4xl tracking-tight">Emma & James</h2>
            <div className="flex flex-col items-center space-y-4">
               <p className="font-body text-sm tracking-[0.4em] opacity-60 uppercase">Saturday • June 14, 2025</p>
               <p className="font-body text-sm tracking-[0.2em] opacity-60 uppercase italic text-accent">The Grand Arboretum, New York</p>
            </div>
            <div className="pt-8 flex justify-center items-center space-x-6">
              <span className="h-px w-16 bg-primary/20" />
              <span className="font-display italic text-xl opacity-80">Forever & Always</span>
              <span className="h-px w-16 bg-primary/20" />
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
