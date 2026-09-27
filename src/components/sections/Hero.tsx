"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col justify-center min-h-[92vh] sm:min-h-[90vh] lg:min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
      </div>

      {/* Main Hero Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12 flex flex-col justify-center flex-1">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            General Contractor Jawa Timur
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-tight sm:leading-[1.15] mb-3 sm:mb-4"
          >
            Mewujudkan Konstruksi Impian dengan <span className="text-accent">Presisi & Kualitas Unggul</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-base md:text-lg text-white/85 leading-relaxed mb-6 sm:mb-8 max-w-2xl"
          >
            Layanan kontraktor profesional, terpercaya, dan amanah di Jawa Timur. Mengandalkan keahlian dalam perencanaan, pembangunan, hingga perawatan interior dan eksterior bagi klien individu maupun perusahaan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
          >
            <Link
              href="#portfolio"
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-accent text-primary font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,193,7,0.3)] flex items-center justify-center gap-2 text-center text-xs sm:text-base active:scale-95"
            >
              Lihat Portofolio <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all text-center justify-center flex items-center text-xs sm:text-base active:scale-95"
            >
              Hubungi Kami
            </Link>
          </motion.div>
        </div>

        {/* Stats Bar - Firmly anchored & beautifully proportioned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-3xl"
        >
          <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-3.5 sm:p-5 md:p-6 grid grid-cols-2 gap-2 sm:gap-6 divide-x divide-slate-200/80 border border-white/40">
            <div className="flex items-center gap-2.5 sm:gap-4 justify-center py-1 sm:py-0 sm:px-4 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-sm">
                <span className="text-lg sm:text-2xl font-black">7</span>
              </div>
              <div className="text-left min-w-0">
                <h3 className="font-bold text-slate-800 text-xs sm:text-base md:text-lg leading-tight truncate sm:overflow-visible">Tahun Pengalaman</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 mt-0.5">Sejak 2019</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-4 justify-center py-1 sm:py-0 sm:px-4 min-w-0 pl-3 sm:pl-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-accent/20 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                <span className="text-lg sm:text-2xl font-black">30+</span>
              </div>
              <div className="text-left min-w-0">
                <h3 className="font-bold text-slate-800 text-xs sm:text-base md:text-lg leading-tight truncate sm:overflow-visible">Proyek Selesai</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 mt-0.5 truncate sm:overflow-visible">Hunian & Komersial</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
