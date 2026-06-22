"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HealthPage() {
  return (
    <main className="font-sans antialiased">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[300px] flex items-center justify-center">
        <Image
          src="/img/health-4.png"
          alt="Health"
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Title removed per original code */}
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 max-w-5xl mx-auto px-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
            Health
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            At Bio Agro Energy Private Limited, we prioritize the health and
            well-being of the communities where we operate. Our CSR initiatives in
            health include:
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>
                <span className="font-semibold text-gray-800">Healthcare Access:</span> Providing
                access to quality healthcare services by organizing medical camps,
                offering free health check-ups, and supporting local health centers
                with necessary medical equipment and supplies.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>
                <span className="font-semibold text-gray-800">Health Awareness:</span> Conducting
                awareness programs to educate communities about preventive
                healthcare, hygiene, nutrition, and disease prevention.
              </span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {["/img/health-1.png", "/img/health-2.png", "/img/health-3.png"].map(
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
                  alt={`health-${index}`}
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