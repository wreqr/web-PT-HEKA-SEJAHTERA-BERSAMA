"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="pt-14 pb-12 lg:pt-24 lg:pb-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary font-semibold text-sm rounded-full">
            Tentang Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Profil Perusahaan <span className="text-primary">Kontraktor</span>
          </h2>

          <div className="prose prose-slate prose-lg text-slate-600 mb-8 max-w-none">
            <p className="mb-4">
              <strong className="text-primary">CV Wilwa Karya Mandiri</strong> adalah perusahaan yang bergerak di bidang jasa konstruksi. Perusahaan kami memiliki spesialisasi dalam <strong className="text-slate-800">perencanaan hingga pelaksanaan interior maupun eksterior</strong>. Kami juga melayani maintenance gedung perkantoran, konstruksi bangunan komersial skala besar, konstruksi baja, residensial, dan lain-lain.
            </p>
            <p className="mb-4">
              Berdiri sejak tahun 2010 di Jalan Kalikepiting Jaya I No 44, kami memiliki keinginan untuk memenuhi kebutuhan masyarakat akan kualitas konstruksi yang unggul khususnya di Jawa Timur.
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
      </div>
    </section>
  );
}
