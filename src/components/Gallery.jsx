import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(images[nextIdx]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(images[prevIdx]);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg aspect-square"
            onClick={() => openLightbox(idx)}
          >
            <img
              src={img}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-luxury-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-8 right-8 text-primary hover:text-accent transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 md:left-8 text-primary hover:text-accent transition-colors hidden md:block"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
            />

            <button
              className="absolute right-4 md:right-8 text-primary hover:text-accent transition-colors hidden md:block"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            {/* Mobile Controls */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-12 md:hidden">
              <button className="text-primary p-2" onClick={prevImage}><ChevronLeft size={32} /></button>
              <button className="text-primary p-2" onClick={nextImage}><ChevronRight size={32} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
