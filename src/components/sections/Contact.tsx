"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2, Clock } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const whatsappUrl = "https://wa.me/6281237135940?text=Halo%20CV%20Wilwa%20Karya%20Mandiri,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi.";

  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-8 relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 origin-bottom-right"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="https://www.instagram.com/wilwakaryamandiri?stkn=MWhhMmZjd3V5Mm0xNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-6 hover:opacity-90 transition-opacity">
              <img 
                src="/assets/images/merk.jpeg" 
                alt="Logo CV Wilwa Karya Mandiri" 
                className="h-14 w-auto object-contain rounded-md bg-white p-1"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-white">
                  CV. WILWA
                </span>
                <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
                  Karya Mandiri
                </span>
              </div>
            </a>
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
              {['Beranda', 'Tentang Kami', 'Layanan', 'Portofolio', 'Klien'].map((item) => (
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
                <a href="https://share.google/L0HmSCkl59LGEynh2" target="_blank" rel="noopener noreferrer" className="text-slate-300 text-sm leading-relaxed hover:text-accent transition-colors block">
                  Jalan Kalikepiting Jaya I No 44
                </a>
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
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-white mb-1">Email</p>
                <a href="mailto:wilwakaryamandiri@gmail.com" className="text-slate-300 text-sm hover:text-accent transition-colors break-all">
                  wilwakaryamandiri@gmail.com
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
            &copy; {new Date().getFullYear()} CV WILWA KARYA MANDIRI. All Rights Reserved.
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
