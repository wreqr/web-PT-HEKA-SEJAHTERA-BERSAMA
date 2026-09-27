"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ChevronDown, 
  HelpCircle, 
  ArrowLeft, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  DollarSign, 
  FileText 
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: typeof HelpCircle;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Layanan apa saja yang dilayani oleh CV. Wilwa Karya Mandiri?",
    answer: "Kami melayani rancang bangun (desain arsitektur & sipil), konstruksi fisik dari nol, renovasi bangunan (rumah tinggal, ruko, kost, kafe/butik), pembuatan custom furnitur/interior, hingga maintenance gedung perkantoran.",
    category: "Layanan & Cakupan",
    icon: Compass,
  },
  {
    id: 2,
    question: "Berapa estimasi biaya dan bagaimana sistem pembayarannya?",
    answer: "Biaya disesuaikan dengan volume pekerjaan dan spesifikasi material (RAB transparan). Sistem pembayaran biasanya menggunakan skema bertahap (termin) sesuai progres pengerjaan di lapangan setelah kesepakatan SPK.",
    category: "Biaya & Pembayaran",
    icon: DollarSign,
  },
  {
    id: 3,
    question: "Apakah melayani konsultasi desain dan survei lokasi?",
    answer: "Ya, kami menyediakan sesi konsultasi dan survei langsung ke lokasi Anda di wilayah Jawa Timur dan sekitarnya.",
    category: "Konsultasi & Survei",
    icon: MessageCircle,
  },
  {
    id: 4,
    question: "Bagaimana dengan garansi pemeliharaan proyek?",
    answer: "Setiap pekerjaan yang kami serah-terimakan memiliki masa retensi / garansi pemeliharaan untuk memastikan kualitas struktur dan kenyamanan klien.",
    category: "Garansi & Kualitas",
    icon: ShieldCheck,
  },
  {
    id: 5,
    question: "Apakah CV. Wilwa Karya Mandiri membantu pengurusan perizinan (seperti PBG / SLF)?",
    answer: "Ya, tim teknis kami dapat membantu dan menyesuaikan gambar kerja teknis sesuai regulasi dan tata ruang yang berlaku.",
    category: "Legalitas & Izin",
    icon: FileText,
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(1);
  const whatsappUrl = "https://wa.me/6281237135940?text=Halo%20CV%20Wilwa%20Karya%20Mandiri,%20saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20layanan%20konstruksi.";

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Breadcrumb & Back Link */}
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-accent transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">FAQ</span>
          </div>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary font-semibold text-xs sm:text-sm rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              Pusat Informasi & Tanya Jawab
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Pertanyaan yang <span className="text-primary">Sering Diajukan (FAQ)</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Temukan jawaban lengkap seputar layanan rancang bangun, skema pembayaran, survei lokasi, hingga garansi pemeliharaan CV Wilwa Karya Mandiri.
            </p>
          </motion.div>

          {/* Accordion FAQ List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openId === faq.id;
              const IconComponent = faq.icon;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-primary/30 shadow-lg ring-1 ring-primary/10"
                      : "bg-white/80 hover:bg-white border-slate-200/80 shadow-sm hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-primary text-accent shadow-sm" : "bg-primary/5 text-primary"
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[11px] font-bold text-accent uppercase tracking-wider block mb-1">
                          {faq.category}
                        </span>
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {faq.question}
                        </h2>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-primary/10 text-primary" : "bg-slate-100 text-slate-500"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-slate-100/80 text-slate-600 text-sm sm:text-base leading-relaxed pl-14 sm:pl-[4.5rem]">
                          <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-700">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Help / WhatsApp CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-3xl mx-auto mt-12 sm:mt-16 bg-gradient-to-br from-primary to-[#081b38] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-lg">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold mb-3 border border-accent/30">
                <Sparkles className="w-3.5 h-3.5" />
                Butuh Informasi Lain?
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Punya Pertanyaan Khusus Terkait Proyek Anda?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Tim teknis dan konsultan CV Wilwa Karya Mandiri siap berdiskusi langsung melalui survei lokasi dan estimasi anggaran.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent hover:bg-yellow-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                Konsultasi WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </main>

      <Contact />
    </div>
  );
}
