"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Sparkles, 
  Home, 
  Coffee, 
  Building2, 
  Maximize2, 
  X, 
  ChevronLeft,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";

interface PortfolioItem {
  id: string;
  category: "hunian1" | "hunian2" | "cafe" | "kos";
  categoryLabel: string;
  image: string;
}

const portfolioData: PortfolioItem[] = [
  // --- RUMAH HUNIAN 1 (7 FOTO) ---
  {
    id: "hunian1-1",
    category: "hunian1",
    categoryLabel: "Rumah Hunian 1",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/hunian1.jpeg",
  },
  {
    id: "hunian1-2",
    category: "hunian1",
    categoryLabel: "Rumah Hunian 1",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/hunian2.jpeg",
  },
  {
    id: "hunian1-3",
    category: "hunian1",
    categoryLabel: "Rumah Hunian 1",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/hunian3.jpeg",
  },
  {
    id: "hunian1-4",
    category: "hunian1",
    categoryLabel: "Rumah Hunian 1",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/hunian4.jpeg",
  },
  {
    id: "hunian1-5",
    category: "hunian1",
    categoryLabel: "Rumah Hunian 1",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/hunian5.jpeg",
  },
  {
    id: "hunian1-6",
    category: "hunian1",
    categoryLabel: "Rumah Hunian 1",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/hunian6.jpeg",
  },
  {
    id: "hunian1-7",
    category: "hunian1",
    categoryLabel: "Rumah Hunian 1",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/hunian7.jpeg",
  },

  // --- RUMAH HUNIAN 2 (14 FOTO) ---
  {
    id: "hunian2-1",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/1.jpeg",
  },
  {
    id: "hunian2-2",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/2.jpeg",
  },
  {
    id: "hunian2-3",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/3.jpeg",
  },
  {
    id: "hunian2-4",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/4.jpeg",
  },
  {
    id: "hunian2-5",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/5.jpeg",
  },
  {
    id: "hunian2-6",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/6.jpeg",
  },
  {
    id: "hunian2-7",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/7.jpeg",
  },
  {
    id: "hunian2-8",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/8.jpeg",
  },
  {
    id: "hunian2-9",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/9.jpeg",
  },
  {
    id: "hunian2-10",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/10.jpeg",
  },
  {
    id: "hunian2-11",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/11.jpeg",
  },
  {
    id: "hunian2-12",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/12.jpeg",
  },
  {
    id: "hunian2-13",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/13.jpeg",
  },
  {
    id: "hunian2-14",
    category: "hunian2",
    categoryLabel: "Rumah Hunian 2",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/14.jpeg",
  },

  // --- CAFE & KOMERSIAL (15 FOTO) ---
  {
    id: "cafe-1",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/1.jpeg",
  },
  {
    id: "cafe-2",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/c2.jpeg",
  },
  {
    id: "cafe-3",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/3.jpeg",
  },
  {
    id: "cafe-4",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/4.jpeg",
  },
  {
    id: "cafe-5",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/5.jpeg",
  },
  {
    id: "cafe-6",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/6.jpeg",
  },
  {
    id: "cafe-7",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/7.jpeg",
  },
  {
    id: "cafe-8",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/8.jpeg",
  },
  {
    id: "cafe-9",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/9.jpeg",
  },
  {
    id: "cafe-10",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/10.jpeg",
  },
  {
    id: "cafe-11",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/11.jpeg",
  },
  {
    id: "cafe-12",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/12.jpeg",
  },
  {
    id: "cafe-13",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/13.jpeg",
  },
  {
    id: "cafe-14",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/14.jpeg",
  },
  {
    id: "cafe-15",
    category: "cafe",
    categoryLabel: "Cafe & Komersial",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/hunian1/cafe/15.jpeg",
  },

  // --- RUMAH KOS (11 FOTO) ---
  {
    id: "kos-main",
    category: "kos",
    categoryLabel: "Rumah Kos",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/rumah%20kos.jpeg",
  },
  {
    id: "kos-1",
    category: "kos",
    categoryLabel: "Rumah Kos",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/kos1.jpeg",
  },
  {
    id: "kos-2",
    category: "kos",
    categoryLabel: "Rumah Kos",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/kos2.jpeg",
  },
  {
    id: "kos-3",
    category: "kos",
    categoryLabel: "Rumah Kos",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/kos3.jpeg",
  },
  {
    id: "kos-4",
    category: "kos",
    categoryLabel: "Rumah Kos",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/kos4.jpeg",
  },
  {
    id: "kos-5",
    category: "kos",
    categoryLabel: "Rumah Kos",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/kos5.jpeg",
  },
  {
    id: "kos-6",
    category: "kos",
    categoryLabel: "Rumah Kos",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/kos6.jpeg",
  },
  {
    id: "kos-7",
    category: "kos",
    categoryLabel: "Rumah Kos",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/kos7.jpeg",
  },
  {
    id: "kos-8",
    category: "kos",
    categoryLabel: "Rumah Kos",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/kos8.jpeg",
  },
  {
    id: "kos-9",
    category: "kos",
    categoryLabel: "Rumah Kos",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/kos9.jpeg",
  },
  {
    id: "kos-10",
    category: "kos",
    categoryLabel: "Rumah Kos",
    image: "/assets/images/portfolio/dokumentasi%20terbaru/kos10.jpeg",
  }
];

const categoryTabs = [
  { id: "hunian1", label: "Rumah Hunian 1", icon: Home, count: portfolioData.filter(i => i.category === "hunian1").length },
  { id: "hunian2", label: "Rumah Hunian 2", icon: Home, count: portfolioData.filter(i => i.category === "hunian2").length },
  { id: "cafe", label: "Cafe & Komersial", icon: Coffee, count: portfolioData.filter(i => i.category === "cafe").length },
  { id: "kos", label: "Rumah Kos", icon: Building2, count: portfolioData.filter(i => i.category === "kos").length },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("hunian1");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on selected category
  const filteredItems = portfolioData.filter((item) => item.category === activeCategory);

  const prevSlide = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const nextSlide = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredItems.length;
    });
  }, [filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, prevSlide, nextSlide]);

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="min-h-screen font-sans bg-slate-50 flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-accent transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">Galeri Portofolio Lengkap</span>
          </div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary font-semibold text-xs sm:text-sm rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              Dokumentasi Hasil Kerja Asli
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Galeri Mahakarya <span className="text-primary">CV Wilwa Karya Mandiri</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Pilih kategori di bawah dan klik foto mana saja untuk melihat detail foto secara penuh serta dapat digeser dengan bebas.
            </p>
          </motion.div>

          {/* Category Switcher Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-slate-200/80 border border-slate-300/70 rounded-2xl gap-1.5 shadow-inner max-w-full">
              {categoryTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeCategory === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveCategory(tab.id);
                      setLightboxIndex(null);
                    }}
                    className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 cursor-pointer select-none ${
                      isActive
                        ? "bg-primary text-white shadow-md scale-102"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-accent" : "text-slate-500"}`} />
                    <span>{tab.label}</span>
                    <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-300/80 text-slate-700"
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pure Photo Gallery Grid (No text cards) */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer select-none"
                  onClick={() => setLightboxIndex(index)}
                >
                  <img
                    src={item.image}
                    alt={item.categoryLabel}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-md">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Clean Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4.5">
                    <span className="text-white text-xs font-semibold">Klik untuk lihat detail & geser</span>
                    <div className="p-2 rounded-full bg-accent text-slate-950 shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Banner at Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-primary text-white shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          >
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold mb-3 border border-accent/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Konsultasi & Survei Lokasi
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
                Tertarik Mewujudkan Proyek Seperti di Atas?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Diskusikan kebutuhan rumah tinggal, bangunan kos, cafe, maupun renovasi properti Anda bersama tim ahli CV Wilwa Karya Mandiri.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent hover:bg-yellow-400 text-slate-950 font-extrabold text-sm sm:text-base transition-all shadow-xl active:scale-95 text-center"
              >
                Konsultasikan Sekarang
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Swipeable / Navigable Lightbox Preview Modal */}
      <AnimatePresence>
        {currentLightboxItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-5 md:p-6 select-none overflow-y-auto"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Bar with Counter & Close Button */}
            <div className="w-full max-w-6xl flex items-center justify-between shrink-0 pb-2 text-white">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-accent">
                  {currentLightboxItem.categoryLabel}
                </span>
                <span className="text-slate-400">
                  Foto {lightboxIndex + 1} dari {filteredItems.length}
                </span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/10 flex items-center gap-2 text-xs font-semibold backdrop-blur-sm"
                aria-label="Tutup Layar Penuh"
                title="Tutup (Esc)"
              >
                <span className="hidden sm:inline">Tutup</span>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Interactive Photo Frame with Left & Right Slide Navigation */}
            <div 
              className="relative w-full max-w-6xl flex-1 flex items-center justify-center min-h-[45vh] max-h-[76vh] my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-white text-white hover:text-slate-900 shadow-2xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-white/20 cursor-pointer"
                aria-label="Foto Sebelumnya"
                title="Sebelumnya (Panah Kiri)"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>

              {/* Photo Display */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentLightboxItem.id}
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.categoryLabel}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="w-auto h-full max-h-[76vh] max-w-full object-contain rounded-xl sm:rounded-2xl shadow-2xl drop-shadow-2xl"
                />
              </AnimatePresence>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-white text-white hover:text-slate-900 shadow-2xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-white/20 cursor-pointer"
                aria-label="Foto Berikutnya"
                title="Berikutnya (Panah Kanan)"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Bottom Bar: Action & Nav Hints */}
            <div
              className="w-full max-w-6xl mt-3 p-4 sm:p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Hasil Kerja CV Wilwa
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  Gunakan tombol panah ◄ ► atau klik tombol samping untuk menggeser foto
                </span>
              </div>

              <a
                href="/#contact"
                onClick={() => setLightboxIndex(null)}
                className="px-6 py-2.5 rounded-full bg-accent hover:bg-yellow-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 text-center flex items-center justify-center self-start sm:self-center active:scale-95"
              >
                Konsultasi Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Contact />
    </div>
  );
}
