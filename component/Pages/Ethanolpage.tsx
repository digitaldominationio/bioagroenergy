"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EthanolPage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[400px] flex items-center justify-center text-white">
        <Image
          src="/img/carousel-1.jpg"
          alt="Ethanol"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-4xl md:text-6xl font-bold"
        >
          Ethanol
        </motion.h1>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Ethanol
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Ethanol, also known as ethyl alcohol, is a renewable biofuel produced
            by fermenting sugars found in biomass such as corn, sugarcane, or
            cellulosic feedstocks. Bio Agro Energy Private Limited uses
            broken/damaged rice as the primary feedstock, supporting local
            agriculture and increasing farmer income.
          </p>
        </motion.div>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {["/img/ethanol-1.png", "/img/ethanol-2.png", "/img/ethanol-3.png"].map(
            (img, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-[250px] rounded-lg overflow-hidden"
              >
                <Image
                  src={img}
                  alt="Ethanol"
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="py-16 max-w-5xl mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 leading-relaxed"
        >
          Ethanol plays a vital role in the government's ethanol blending
          program, helping reduce carbon emissions and promote energy
          independence. It is widely used as a fuel additive to gasoline,
          improving octane levels and reducing harmful emissions. Additionally,
          ethanol is used in pharmaceuticals, cosmetics, and beverages.
        </motion.p>
      </section>
    </main>
  );
}