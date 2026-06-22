"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BricksPage() {
  return (
    <main className="font-sans antialiased">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <Image
          src="/img/bricks-4.png"
          alt="Bricks"
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-white text-4xl md:text-6xl font-bold"
        >
          BRICKS
        </motion.h1>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bricks
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Fly Ash Bricks are a sustainable and eco-friendly building material
            produced from the fly ash generated during the combustion of biomass
            or coal in the ethanol production process.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            These bricks are made by mixing fly ash, lime, gypsum, and sand, then
            compressed and cured. Compared to traditional clay bricks, they offer
            lower water absorption, higher compressive strength, reduced weight,
            and better thermal insulation.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            They help reduce environmental pollution by recycling industrial waste
            and minimizing the use of natural resources.
          </p>
        </motion.div>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {["/img/bricks-1.png", "/img/bricks-2.png", "/img/bricks-3.png"].map(
            (img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-[250px] overflow-hidden rounded-lg shadow-md group"
              >
                <Image
                  src={img}
                  alt={`bricks-${index}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </motion.div>
            )
          )}

        </div>
      </section>

      {/* ================= EXTRA TEXT ================= */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 leading-relaxed"
        >
          Each of these products not only supports our primary ethanol
          production but also adds significant value to our overall operations
          by contributing to sustainability and resource efficiency.
        </motion.p>
      </section>

    </main>
  );
}