"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Home, HardHat, Hammer, Droplet, Zap, Ruler } from "lucide-react";

const individualServices = [
  {
    icon: <Ruler className="w-8 h-8 text-primary" />,
    title: "Perencanaan",
    description: "Perencanaan dan desain rumah hunian pribadi secara matang sesuai dengan kebutuhan dan estetika Anda."
  },
  {
    icon: <Home className="w-8 h-8 text-primary" />,
    title: "Pembangunan & Renovasi",
    description: "Layanan pembangunan baru atau renovasi rumah hunian pribadi dengan pengawasan ketat untuk hasil maksimal."
  },
  {
    icon: <Hammer className="w-8 h-8 text-primary" />,
    title: "Pemeliharaan Rumah",
    description: "Perbaikan kebocoran, instalasi listrik & air bersih, pengecatan dinding, penggantian kusen aluminium, plafond gypsum/PVC, pembuatan pagar, kanopi, dan teralis."
  }
];

const corporateServices = [
  {
    icon: <Building className="w-8 h-8 text-accent" />,
    title: "Perencanaan Konstruksi",
    description: "Manajemen dan perencanaan proyek konstruksi skala besar untuk memastikan efisiensi waktu dan anggaran perusahaan."
  },
  {
    icon: <HardHat className="w-8 h-8 text-accent" />,
    title: "Konstruksi Gedung & Sipil",
    description: "Pekerjaan konstruksi bangunan gedung komersial, fasilitas industri, dan infrastruktur sipil dengan standar tinggi."
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Konstruksi Baja & Atap",
    description: "Pemasangan rangka dan atap baja berat maupun ringan untuk struktur bangunan pabrik atau pergudangan."
  },
  {
    icon: <Droplet className="w-8 h-8 text-accent" />,
    title: "Pembuatan Mebel / Furnitur",
    description: "Desain dan pembuatan mebel atau furnitur custom untuk kebutuhan interior kantor atau properti komersial Anda."
  }
];

export default function Services() {
  return (
    <section id="services" className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-2 sm:mb-3 px-3.5 py-1 bg-primary/5 border border-primary/10 text-primary font-semibold text-xs sm:text-sm rounded-full">
              Produk & Layanan
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">
              Layanan Komprehensif untuk <span className="text-primary">Segala Skala</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Kami menawarkan solusi konstruksi end-to-end baik untuk kebutuhan personal berupa hunian, maupun kebutuhan korporat skala besar.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="perusahaan" className="w-full">
            <div className="flex justify-center mb-6 sm:mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2 p-1 sm:p-1.5 bg-slate-200/50 rounded-xl h-auto sm:h-14 gap-1 sm:gap-0">
                <TabsTrigger value="individual" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-xs sm:text-sm md:text-base font-medium h-full py-2 sm:py-0 border-none whitespace-normal text-center leading-tight">
                  Individual (Hunian)
                </TabsTrigger>
                <TabsTrigger value="perusahaan" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm text-xs sm:text-sm md:text-base font-medium h-full py-2 sm:py-0 border-none whitespace-normal text-center leading-tight">
                  Perusahaan (Komersial)
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="individual" className="mt-0">
              <div className="grid md:grid-cols-3 gap-6">
                {individualServices.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                  >
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary/5">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="perusahaan" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {corporateServices.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-accent/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -z-10 group-hover:bg-accent/10 transition-colors"></div>
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

      </div>
    </section>
  );
}
