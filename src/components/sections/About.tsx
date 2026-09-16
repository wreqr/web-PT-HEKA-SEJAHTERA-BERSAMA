"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary font-semibold text-sm rounded-full">
              Tentang Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Profil Perusahaan <span className="text-primary">Kontraktor</span>
            </h2>
            
            <div className="prose prose-slate prose-lg text-slate-600 mb-8">
              <p className="mb-4">
                <strong className="text-primary">PT. HEKA Sejahtera Bersama</strong> adalah perusahaan yang bergerak di bidang jasa konstruksi. Perusahaan kami memiliki spesialisasi dalam <strong className="text-slate-800">perencanaan hingga pelaksanaan interior maupun eksterior</strong>. Kami juga melayani maintenance gedung perkantoran, konstruksi bangunan komersial skala besar, konstruksi baja, residensial, dan lain-lain.
              </p>
              <p className="mb-4">
                Berdiri sejak tahun 2010 di Jl. Bangah Jaya Indah No. 225, Sidoarjo, kami memiliki keinginan untuk memenuhi kebutuhan masyarakat akan kualitas konstruksi yang unggul khususnya di Jawa Timur.
              </p>
              <p>
                Perusahaan kami terdiri dari para profesional yang berpengalaman sehingga kami yakin dapat memberikan layanan yang <strong className="text-slate-800">berkualitas tinggi</strong>. Kami menyediakan layanan <strong className="text-slate-800">komprehensif</strong> mulai dari desain, rekayasa konstruksi, hingga manajemen untuk membangun hubungan jangka panjang yang baik dengan klien kami.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Visi Kami</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Menjadi penyedia utama jasa konstruksi yang menghadirkan rancangan inovatif dengan hasil luar biasa dan melebihi ekspektasi setiap klien.
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Misi Kami</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Menyediakan layanan konstruksi berkualitas tinggi yang komprehensif melalui inovasi, keahlian, dan komitmen terhadap keselamatan pekerja.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg shadow-slate-200/50 relative">
                  <img src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" alt="Konstruksi Bangunan" className="object-cover w-full h-full" />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 shadow-lg shadow-slate-200/50 relative">
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=1974&auto=format&fit=crop" alt="Arsitektur Pekerja" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 shadow-lg shadow-slate-200/50 relative">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Interior Rumah" className="object-cover w-full h-full" />
                </div>
                <div className="rounded-2xl overflow-hidden h-72 shadow-lg shadow-slate-200/50 relative">
                  <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop" alt="Gedung Komersial" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
