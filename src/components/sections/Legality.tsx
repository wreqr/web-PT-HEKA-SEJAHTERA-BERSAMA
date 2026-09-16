"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Scale, Landmark } from "lucide-react";

export default function Legality() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 bg-green-100 border border-green-200 text-green-700 font-semibold text-sm rounded-full flex items-center gap-2 w-max">
              <ShieldCheck className="w-4 h-4" /> 100% Legal & Terpercaya
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Legalitas Perusahaan <span className="text-primary">Terjamin</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              PT. HEKA Sejahtera Bersama telah tercatat sebagai perusahaan yang legal sesuai dengan keputusan yang dikeluarkan oleh Kementerian Hukum dan HAM serta memiliki badan hukum resmi. Kami berharap Anda dapat mempercayakan kegiatan konstruksi kepada kami dengan tenang.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Badan Hukum Resmi</h4>
                  <p className="text-slate-600 font-medium">PT HEKA SEJAHTERA BERSAMA</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">SK Kemenkumham RI</h4>
                  <p className="text-slate-600 font-mono mt-1 text-sm bg-slate-100 px-2 py-1 rounded inline-block">AHU-0081856.AH.01.01.TAHUN 2024</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Nomor Induk Berusaha (NIB)</h4>
                  <p className="text-slate-600 font-mono mt-1 text-sm bg-slate-100 px-2 py-1 rounded inline-block">2410240164971</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary rounded-3xl -rotate-6 scale-95 opacity-20 blur-lg"></div>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden border border-slate-100">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="text-center mb-10 relative z-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Garuda_Pancasila_Logo.svg" alt="Garuda Pancasila" className="w-20 mx-auto mb-6 drop-shadow-md" />
                <h3 className="font-bold text-slate-900 text-xl uppercase tracking-wider mb-2">Akta Pendirian</h3>
                <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="text-center">
                  <p className="text-slate-500 text-sm mb-1 uppercase tracking-widest font-semibold">Notaris & PPAT</p>
                  <p className="text-slate-900 font-bold text-lg">Syaifuddin Zuhri, S.H., M.Kn.</p>
                </div>
                <div className="border-t border-slate-200"></div>
                <div className="text-center">
                  <p className="text-slate-500 text-sm mb-1 uppercase tracking-widest font-semibold">Tanda Daftar</p>
                  <p className="text-slate-900 font-bold text-lg">Akta No. 10</p>
                  <p className="text-slate-500 text-sm">Tanggal 04 Oktober 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
