"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CO2Page() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[300px] flex items-center justify-center">
        <Image
          src="/img/co2-4.png"
          alt="CO2"
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
          CO₂
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
            CO₂ (Carbon Dioxide)
          </h2>

          <p className="text-gray-600 leading-relaxed">
            CO₂ is another important byproduct of the ethanol production process.
            During fermentation, yeast converts sugars into ethanol and CO₂. The
            captured CO₂ is purified and reused in multiple industries.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            It is widely used in the beverage industry for carbonating soft drinks
            and beer, in food processing for refrigeration and preservation, and
            in the medical field for anesthesia and respiratory therapies.
            Additionally, CO₂ plays a role in industrial processes such as welding,
            chemical manufacturing, and oil recovery.
          </p>
        </motion.div>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {["/img/co2-1.png", "/img/co2-2.png", "/img/co2-3.png"].map(
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
                  alt={`co2-${index}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </motion.div>
            )
          )}

        </div>
      </section>

    </main>
  );
}