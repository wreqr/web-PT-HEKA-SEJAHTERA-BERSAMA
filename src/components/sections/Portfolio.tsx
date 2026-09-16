"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Pembangunan Kost 3 Lantai",
    location: "Joyogrand Malang",
    year: "2024",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
    category: "Residensial"
  },
  {
    title: "Pembuatan Furnitur Pusdiklek Kodiklatal",
    location: "Surabaya",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2000&auto=format&fit=crop",
    category: "Komersial & Interior"
  },
  {
    title: "Pembangunan Restoran Ramen Master",
    location: "Jl. Lontar Surabaya",
    year: "2023",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop",
    category: "Komersial"
  },
  {
    title: "Renovasi Kantor MPM Finance",
    location: "Jl. Kartini Surabaya",
    year: "2022",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    category: "Perkantoran"
  },
  {
    title: "Penggantian Ducting AC Hotel Oak Wood",
    location: "Surabaya",
    year: "2020",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop",
    category: "Hospitality / Maintenance"
  },
  {
    title: "Renovasi Kantor DPD Perindo & Hanura",
    location: "Jawa Timur",
    year: "2017-2019",
    image: "https://images.unsplash.com/photo-1497215842964-222b330cefa9?q=80&w=2000&auto=format&fit=crop",
    category: "Perkantoran"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
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
              Kami telah menyelesaikan lebih dari 100+ proyek. Berikut adalah sebagian kecil dari mahakarya yang pernah kami kerjakan.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors">
              Lihat Semua Proyek
            </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 shadow-md">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10 duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Year tag */}
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-primary shadow-sm">
                  {project.year}
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-accent font-semibold text-sm mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
