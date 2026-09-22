"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between pt-24 pb-8 lg:pb-0 overflow-hidden lg:overflow-visible">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Main Hero Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 my-auto py-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            General Contractor Jawa Timur
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6"
          >
            Mewujudkan Konstruksi Impian dengan <span className="text-accent">Presisi & Kualitas Unggul</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 sm:mb-8 max-w-2xl"
          >
            Layanan kontraktor profesional, terpercaya, dan amanah di Jawa Timur. Mengandalkan keahlian dalam perencanaan, pembangunan, hingga perawatan interior dan eksterior bagi klien individu maupun perusahaan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 lg:mb-16"
          >
            <Link
              href="#portfolio"
              className="px-6 sm:px-8 py-3.5 rounded-full bg-accent text-primary font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,193,7,0.3)] flex items-center justify-center gap-2 text-center"
            >
              Lihat Portofolio <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="px-6 sm:px-8 py-3.5 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all text-center justify-center flex items-center"
            >
              Hubungi Kami
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full z-20 px-4 sm:px-6 lg:px-8 mt-4 lg:mt-0 pb-8 lg:pb-0 lg:absolute lg:bottom-0 lg:left-0 lg:translate-y-1/2"
      >
        <div className="container mx-auto max-w-3xl">
          <div className="w-full bg-white rounded-2xl shadow-xl p-5 sm:p-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border border-slate-100/80">
            <div className="flex items-center gap-4 sm:justify-center py-2 sm:py-0 sm:px-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 shadow-sm">
                <span className="text-xl sm:text-2xl font-black">10+</span>
              </div>
              <div className="text-left min-w-0">
                <h3 className="font-bold text-slate-800 text-base sm:text-lg leading-tight">Tahun Pengalaman</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Sejak 2020</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:justify-center pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 shadow-sm">
                <span className="text-xl sm:text-2xl font-black">60+</span>
              </div>
              <div className="text-left min-w-0">
                <h3 className="font-bold text-slate-800 text-base sm:text-lg leading-tight">Proyek Selesai</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Hunian & Komersial</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
