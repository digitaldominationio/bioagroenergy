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
      <section className="py-16 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-bold tracking-[4px] text-xs uppercase mb-3 block">
            Corporate Social Responsibility
          </span>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-medium">
            At Bio Agro Energy, sustainability extends beyond renewable energy. We are committed to creating 
            positive social impact through healthcare, environmental stewardship, education and community 
            development.
          </p>
        </motion.div>

        {/* Split Section: Image & Health Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] w-full rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.1)] border-4 border-white bg-white overflow-hidden"
          >
            <Image
              src="/img/health-1.png"
              alt="Health Checkup"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right Column - Text Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2.5 mb-5">
              <span>🏥</span> Health & Well-being
            </h3>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-normal">
              We actively support healthcare initiatives that improve the quality of life of nearby 
              communities through medical camps, health awareness programmes and preventive healthcare services.
            </p>

            <ul className="space-y-4 w-full pl-1">
              {[
                "Medical Camps",
                "Blood Donation Drives",
                "Health Awareness"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-semibold text-sm md:text-base">
                  <span className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
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
                className="relative h-[250px] rounded-[32px] shadow-md border-2 border-white bg-white overflow-hidden"
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