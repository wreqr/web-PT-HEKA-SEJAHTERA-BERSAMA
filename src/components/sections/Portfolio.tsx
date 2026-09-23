"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, X, Maximize2 } from "lucide-react";

interface WilwaSlide {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

const wilwaSlides: WilwaSlide[] = [
  {
    id: 1,
    title: "Pembangunan Rumah Tinggal Modern 2 Lantai",
    category: "Fasad Eksterior (Siang)",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/1.jpeg",
    description: "Desain fasad kontemporer 2 lantai dengan cantilever modern, panel tekstur vertikal, dan gerbang minimalis."
  },
  {
    id: 2,
    title: "Desain Fasad & Konstruksi Hunian Eksklusif",
    category: "Perspektif Sudut (Siang)",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/2.jpeg",
    description: "Tampilan sudut arsitektur rumah mewah dengan aksen kurva halus dan dinding pembatas modern."
  },
  {
    id: 3,
    title: "Pekerjaan Struktur & Fasad Bangunan Modern",
    category: "Detail Struktur & Kanopi",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/3.jpeg",
    description: "Struktur kanopi carport baja ekspos dengan kisi-kisi gerbang besi modern dan finishing presisi."
  },
  {
    id: 4,
    title: "Tata Cahaya & Fasad Arsitektural Malam",
    category: "Pencahayaan Malam (Tampak Depan)",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/4.jpeg",
    description: "Sistem pencahayaan LED arsitektural tersembunyi yang menonjolkan estetika fasad di malam hari."
  },
  {
    id: 5,
    title: "Desain Eksterior & Pencahayaan Hunian Modern",
    category: "Pencahayaan Malam (Perspektif)",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/5.jpeg",
    description: "Harmonisasi warm ambient lighting pada kanopi plafon kayu dan taman depan rumah."
  },
  {
    id: 6,
    title: "Akses Masuk & Dinding Roster Bata Modern",
    category: "Detail Arsitektur Eksterior",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/6.jpeg",
    description: "Kombinasi dinding roster bata ekspos 3D dengan jalur setapak taman dan tangga entrance."
  },
  {
    id: 7,
    title: "Foyer Entrance & Partisi Fasad Geometris",
    category: "Foyer & Entrance Area",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/7.jpeg",
    description: "Partisi arsitektural berlubang geometris dengan plafon wood paneling dan lantai batu alam."
  },
  {
    id: 8,
    title: "Courtyard Zen Garden & Wood Decking",
    category: "Inner Courtyard & Lanskap",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/8.jpeg",
    description: "Area santai tengah rumah berkonsep Zen Garden dengan decking kayu, taman kering, dan pintu kaca geser."
  },
  {
    id: 9,
    title: "Taman Kering Inner Court dengan Pohon Utama",
    category: "Lanskap Tropis Modern",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/9.jpeg",
    description: "Integrasi pencahayaan alami melalui void atap terbuka yang menerangi pohon taman tengah."
  },
  {
    id: 10,
    title: "Lounge Deck & Taman Kering Minimalis",
    category: "Area Relaksasi Hunian",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/10.jpeg",
    description: "Ruang terbuka hijau privat yang menghubungkan ruang keluarga dengan sirkulasi udara optimal."
  },
  {
    id: 11,
    title: "Suasana Malam Courtyard Zen Garden",
    category: "Courtyard Lighting (Malam)",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/11.jpeg",
    description: "Pemandangan magis taman dalam rumah di malam hari dengan bollard light dan indirect lighting plafon."
  },
  {
    id: 12,
    title: "Pencahayaan Zen Garden & Tekstur Dinding",
    category: "Detail Lanskap Malam",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/12.jpeg",
    description: "Sorotan lampu taman mempertegas keindahan bebatuan, rumput hijau, dan panel kayu."
  },
  {
    id: 13,
    title: "Fasad Dalam 2 Lantai Mengelilingi Courtyard",
    category: "Arsitektur Courtyard 2 Lantai",
    location: "Jawa Timur",
    image: "/assets/images/foto%20hasil%20kerja%20kami/13.jpeg",
    description: "Desain fasad interior 2 lantai modern yang memaksimalkan bukaan kaca dan sirkulasi alami."
  }
];


export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<{ image: string; title: string; category: string; location: string } | null>(null);
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
              Portofolio Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Bukti Nyata <span className="text-primary">Kinerja Kami</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Kami telah menyelesaikan lebih dari 60+ proyek. Berikut adalah dokumentasi hasil kerja asli dan mahakarya konstruksi yang telah kami wujudkan.
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
                    alt={current.title}
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
                onClick={() => setLightboxImage(current)}
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

            {/* Dedicated Caption & Information Panel (Spacious & Clean) */}
            <div className="p-5 sm:p-7 bg-slate-900 text-white border-t border-white/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="max-w-3xl">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 mb-3">
                    <span className="inline-block w-fit px-2.5 py-1 rounded-md bg-accent text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      {current.category}
                    </span>
                    <span className="text-slate-400 text-xs sm:text-sm font-medium flex items-center gap-1.5">
                      <span className="hidden sm:inline">•</span>
                      <svg className="w-3.5 h-3.5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {current.location}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                    {current.title}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Counter and Navigation Controls */}
                <div className="flex items-center justify-between md:flex-col md:items-end gap-3 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-white/10 shrink-0">
                  <span className="text-xs text-slate-400 font-medium">
                    Foto <strong className="text-accent text-sm font-bold">{currentSlide + 1}</strong> dari {wilwaSlides.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => paginate(-1)}
                      className="px-3 py-1.5 sm:p-2 rounded-lg sm:rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 text-xs"
                      aria-label="Sebelumnya"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="sm:hidden">Prev</span>
                    </button>
                    <button
                      onClick={() => paginate(1)}
                      className="px-3 py-1.5 sm:p-2 rounded-lg sm:rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 text-xs"
                      aria-label="Berikutnya"
                    >
                      <span className="sm:hidden">Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Carousel Strip */}
          <div className="mt-4 sm:mt-6">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
              <span>Pilih foto untuk melihat sudut lainnya ({wilwaSlides.length} foto tersedia):</span>
              <span className="sm:hidden font-semibold text-primary">{currentSlide + 1} dari {wilwaSlides.length}</span>
            </div>
            <div
              ref={thumbnailsRef}
              className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-slate-200"
            >
              {wilwaSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setDirection(idx > currentSlide ? 1 : -1);
                    setCurrentSlide(idx);
                  }}
                  className={`relative shrink-0 rounded-xl overflow-hidden aspect-[4/3] w-20 sm:w-28 transition-all duration-300 border-2 ${
                    idx === currentSlide
                      ? "border-accent scale-105 shadow-md ring-2 ring-accent/30"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Slide ${idx + 1}: ${slide.title}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/70 px-1.5 py-0.5 rounded text-[10px] font-bold text-white">
                    {idx + 1}
                  </div>
                </button>
              ))}
            </div>
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
              className="relative w-full max-w-6xl flex-1 flex items-center justify-center min-h-[45vh] max-h-[76vh] my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-auto h-full max-h-[76vh] max-w-full object-contain rounded-xl sm:rounded-2xl shadow-2xl drop-shadow-2xl select-none"
              />
            </motion.div>

            {/* Bottom Info Bar - Shifted down, clean & unobtrusive */}
            <div
              className="w-full max-w-6xl mt-3 p-4 sm:p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-accent font-bold text-xs uppercase tracking-wider">
                    {lightboxImage.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-[11px] font-semibold">
                    <Sparkles className="w-3 h-3 text-accent" />
                    Hasil Kerja CV Wilwa
                  </span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight">
                  {lightboxImage.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {lightboxImage.location}
                </p>
              </div>

              <a
                href="#contact"
                onClick={() => setLightboxImage(null)}
                className="px-6 py-2.5 rounded-full bg-accent hover:bg-yellow-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 text-center flex items-center justify-center self-start sm:self-center active:scale-95"
              >
                Konsultasi Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
