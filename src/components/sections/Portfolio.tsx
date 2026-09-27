"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, X, Maximize2 } from "lucide-react";

interface WilwaSlide {
  id: number;
  image: string;
}

const wilwaSlides: WilwaSlide[] = [
  {
    id: 1,
    image: "/assets/images/foto%20hasil%20kerja%20kami/1.jpeg",
  },
  {
    id: 2,
    image: "/assets/images/foto%20hasil%20kerja%20kami/2.jpeg",
  },
  {
    id: 3,
    image: "/assets/images/foto%20hasil%20kerja%20kami/3.jpeg",
  },
  {
    id: 4,
    image: "/assets/images/foto%20hasil%20kerja%20kami/4.jpeg",
  },
  {
    id: 5,
    image: "/assets/images/foto%20hasil%20kerja%20kami/5.jpeg",
  }
];


export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % wilwaSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Escape key listener for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxImage) {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  // Scroll active thumbnail into view without hijacking page scroll
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[currentSlide] as HTMLElement;
      if (activeThumb) {
        const container = thumbnailsRef.current;
        const scrollLeft = activeThumb.offsetLeft - (container.clientWidth / 2) + (activeThumb.clientWidth / 2);
        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth"
        });
      }
    }
  }, [currentSlide]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentSlide((prev) => (prev + 1) % wilwaSlides.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + wilwaSlides.length) % wilwaSlides.length);
    }
  };

  const current = wilwaSlides[currentSlide];

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary font-semibold text-sm rounded-full">
              Portofolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Hasil <span className="text-primary">Kinerja Kami</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Kami telah menyelesaikan lebih dari 30+ proyek. Berikut adalah dokumentasi hasil kerja dan mahakarya konstruksi yang telah kami wujudkan.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#contact"
              className="inline-block px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors text-center"
            >
              Konsultasikan Proyek Anda
            </a>
          </motion.div>
        </div>

        {/* FEATURED SLIDER: HASIL KERJA CV WILWA KARYA MANDIRI */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                Dokumentasi Hasil Kerja <span className="text-primary block sm:inline mt-1 sm:mt-0">CV Wilwa Karya Mandiri</span>
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-500">
              <span className="text-primary font-bold text-base">{String(currentSlide + 1).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(wilwaSlides.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Main Slide Frame */}
          <div
            className="rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/80 group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden bg-slate-950">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={current.image}
                    alt="Dokumentasi Hasil Kerja CV Wilwa"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>
                </motion.div>
              </AnimatePresence>

              {/* Verified Badge */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20">
                <div className="bg-primary/95 backdrop-blur-md text-accent text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border border-accent/40 flex items-center gap-1.5 sm:gap-2">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent animate-pulse" />
                  <span>Hasil Kerja CV Wilwa</span>
                </div>
              </div>

              {/* Fullscreen zoom button */}
              <button
                onClick={() => setLightboxImage(current.image)}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-primary text-white backdrop-blur-md transition-all shadow-lg border border-white/20 flex items-center gap-1.5"
                aria-label="Lihat Layar Penuh"
                title="Lihat Layar Penuh"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline text-xs font-semibold pr-1">Layar Penuh</span>
              </button>

              {/* Left/Right Navigation Arrows over Image */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-white text-white hover:text-slate-900 shadow-xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-white/20"
                aria-label="Slide Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-white text-white hover:text-slate-900 shadow-xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-white/20"
                aria-label="Slide Berikutnya"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

          </div>

          {/* Thumbnail Carousel Strip */}
          <div className="mt-4 sm:mt-6">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 mb-3 text-center px-1">
              <span>Pilih foto untuk melihat sudut lainnya ({wilwaSlides.length} foto tersedia):</span>
              <span className="sm:hidden font-semibold text-primary">({currentSlide + 1}/{wilwaSlides.length})</span>
            </div>
            <div
              ref={thumbnailsRef}
              className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3.5 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-slate-200"
            >
              {wilwaSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setDirection(idx > currentSlide ? 1 : -1);
                    setCurrentSlide(idx);
                  }}
                  className={`relative shrink-0 rounded-xl overflow-hidden aspect-[4/3] w-20 sm:w-28 md:w-32 transition-all duration-300 border-2 cursor-pointer ${idx === currentSlide
                    ? "border-accent scale-105 shadow-lg ring-2 ring-accent/40"
                    : "border-transparent opacity-60 hover:opacity-100 hover:scale-102"
                    }`}
                  aria-label={`Slide ${idx + 1}`}
                >
                  <img
                    src={slide.image}
                    alt="Thumbnail Hasil Kerja"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/70 px-1.5 py-0.5 rounded text-[10px] font-bold text-white">
                    {idx + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Link to Dedicated Portfolio Gallery Page */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-sm sm:text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-102 transition-all active:scale-95 group"
            >
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              <span>Jelajahi Galeri Portofolio Lengkap (Rumah Hunian, Cafe, & Rumah Kos)</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-accent" />
            </Link>
          </div>
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-5 md:p-6 overflow-y-auto"
            onClick={() => setLightboxImage(null)}
          >
            {/* Top Bar with Close Button */}
            <div className="w-full max-w-6xl flex items-center justify-end shrink-0 pb-2">
              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/10 flex items-center gap-2 text-xs font-semibold backdrop-blur-sm"
                aria-label="Tutup Layar Penuh"
                title="Tutup (Esc)"
              >
                <span className="hidden sm:inline">Tutup</span>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Pure Photo Frame - Maximum Focus & Detail */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative w-full max-w-6xl flex-1 flex items-center justify-center min-h-[45vh] max-h-[85vh] my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Dokumentasi Hasil Kerja"
                className="w-auto h-full max-h-[85vh] max-w-full object-contain rounded-xl sm:rounded-2xl shadow-2xl drop-shadow-2xl select-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
