"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import Image from "next/image";

const clients = [
  { 
    name: "Partai Perindo", 
    image: "/assets/logo-partai-perindo.png",
    type: "image"
  },
  { 
    name: "Partai Hanura", 
    image: "/logo-partai-hanura.png",
    type: "image"
  },
  { 
    name: "MNC Group", 
    image: "/mnc.png",
    type: "image"
  },
  { 
    name: "MPM Insurance", 
    image: null,
    type: "custom",
    render: () => (
      <div className="flex flex-col items-center justify-center">
        <span className="text-[#F26522] font-extrabold text-3xl tracking-tighter">MPM</span>
        <span className="text-[#F26522] text-[0.6rem] font-bold tracking-widest uppercase">Insurance</span>
      </div>
    )
  },
  { 
    name: "Hana Bank", 
    image: "/assets/logo-hana.png",
    type: "image"
  },
  { 
    name: "Clarisa Clinic", 
    image: null,
    type: "custom",
    render: () => (
      <div className="flex flex-col items-center justify-center">
        <div className="w-14 h-14 bg-[#6A1B57] rounded-full flex items-center justify-center border-2 border-white mb-1">
          <span className="text-white font-serif text-xl italic font-bold">C</span>
        </div>
        <span className="text-[#6A1B57] font-bold text-xs uppercase">Clarisa</span>
        <span className="text-[#6A1B57] text-[0.5rem] tracking-wider uppercase">Skin & Beauty</span>
      </div>
    )
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-slate-50 to-slate-200 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_#ffffff,_transparent)]"></div>
      
      <div className="container relative mx-auto px-4 md:px-6 lg:px-8 z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Dipercaya Oleh Berbagai <span className="text-primary">Klien Kami</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            PT. HEKA Sejahtera Bersama telah membangun reputasi dan hubungan baik dengan klien dari berbagai sektor. Perusahaan kami akan terus mengembangkan hubungan baik dengan berbagai pihak sehingga kualitas perusahaan kami terus meningkat.
          </p>
        </div>

        {/* Grid of Clients */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white hover:bg-slate-50 border border-slate-200 shadow-sm rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all cursor-pointer h-40 group hover:shadow-md"
            >
              <div className="h-20 w-full flex items-center justify-center mb-3">
                {client.type === 'image' ? (
                  <img 
                    src={client.image!} 
                    alt={client.name} 
                    className="max-h-full max-w-[80%] object-contain group-hover:scale-105 transition-transform" 
                  />
                ) : (
                  client.render && client.render()
                )}
              </div>
              <h3 className="text-slate-800 font-bold text-sm">{client.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
