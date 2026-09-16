"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2, Clock } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const whatsappUrl = "https://wa.me/6281237135940?text=Halo%20PT%20HEKA%20Sejahtera%20Bersama,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi.";

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-8 relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 origin-bottom-right"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-accent text-primary p-2 rounded-lg">
                <Building2 className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-white">
                  PT. HEKA
                </span>
                <span className="text-xs font-semibold tracking-wider text-accent">
                  SEJAHTERA BERSAMA
                </span>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm pr-4">
              Mewujudkan konstruksi impian Anda dengan presisi dan kualitas unggul. Kontraktor Umum terpercaya yang melayani perencanaan, pembangunan, hingga perawatan interior dan eksterior.
            </p>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Clock className="w-4 h-4 text-accent" />
              Senin - Jumat (08:00 - 17:00 WIB)
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 text-white border-b border-slate-700 pb-3 inline-block">Tautan Navigasi</h3>
            <ul className="space-y-4">
              {['Beranda', 'Tentang Kami', 'Layanan', 'Portofolio', 'Legalitas'].map((item) => (
                <li key={item}>
                  <Link href={`#${item === 'Beranda' ? 'home' : item === 'Tentang Kami' ? 'about' : item === 'Layanan' ? 'services' : item === 'Portofolio' ? 'portfolio' : 'clients'}`} className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-bold text-lg mb-6 text-white border-b border-slate-700 pb-3 inline-block">Hubungi Kami</h3>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-white mb-1">Kantor Pusat</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Jl. Bangah Jaya Indah No. 225, RT.04 RW.07, Desa Bangah, Kec. Gedangan, Kab. Sidoarjo, Jawa Timur 61254
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-white mb-1">Telepon & WhatsApp</p>
                <div className="flex flex-col gap-1">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 text-sm hover:text-accent transition-colors">
                    +62 812-3713-5940
                  </a>
                  <a href="tel:+6282338246867" className="text-slate-300 text-sm hover:text-accent transition-colors">
                    +62 823-3824-6867
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-white mb-1">Email</p>
                <a href="mailto:pthekasejahterabersama@gmail.com" className="text-slate-300 text-sm hover:text-accent transition-colors break-all">
                  pthekasejahterabersama@gmail.com
                </a>
              </div>
            </div>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full text-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-green-500/20"
            >
              Chat via WhatsApp Sekarang
            </motion.a>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} PT HEKA SEJAHTERA BERSAMA. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-slate-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
