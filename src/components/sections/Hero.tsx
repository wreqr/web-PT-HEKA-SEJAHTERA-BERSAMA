"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 mt-12 md:mt-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            General Contractor Jawa Timur
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Mewujudkan Konstruksi Impian dengan <span className="text-accent">Presisi & Kualitas Unggul</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl"
          >
            Kontraktor Umum terpercaya sejak 2010 di Jawa Timur. Melayani perencanaan, pembangunan, hingga perawatan interior dan eksterior skala individu maupun perusahaan.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link
              href="#portfolio"
              className="px-8 py-3.5 rounded-full bg-accent text-primary font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,193,7,0.3)] flex items-center gap-2"
            >
              Lihat Portofolio <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all"
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
        className="absolute bottom-0 left-0 w-full translate-y-1/2 z-20 px-4 md:px-8"
      >
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <span className="text-2xl font-black">14+</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Tahun Pengalaman</h3>
                <p className="text-sm text-slate-500">Sejak 2010</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start md:pl-8 pt-6 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <span className="text-2xl font-black">100+</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Proyek Selesai</h3>
                <p className="text-sm text-slate-500">Hunian & Komersial</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start md:pl-8 pt-6 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">100% Legalitas</h3>
                <p className="text-sm text-slate-500">Kemenkumham & NIB</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
