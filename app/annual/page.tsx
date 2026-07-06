"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  const sustainabilityImages = [
    "/img/community-4.jpeg",
    "/img/community-5.jpeg",
    "/img/community-6.jpeg",
    "/img/community-7.jpeg",
  ];

  const sustainabilityPoints = [
    "Tree Plantation",
    "Water Conservation",
    "Greenbelt Development",
    "Circular Economy",
  ];

  return (
    <main className="font-sans antialiased bg-slate-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/img/bricks-4.png"
          alt="Sustainability Banner"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/45" />

        <h1 className="relative z-10 text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center px-6 tracking-wide">
          ANNUAL ENVIRONMENTAL
        </h1>
      </section>

      {/* ================= Sustainability Section ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Images: 2x2 grid with rounded corners as requested */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-6"
            >
              {sustainabilityImages.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white p-1"
                >
                  <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                    <Image
                      src={img}
                      alt={`Sustainability ${index + 1}`}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right Content: Centered as shown in the screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center text-center lg:items-center lg:text-center"
            >
              <div className="text-4xl mb-4 flex items-center justify-center">
                🌱
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight max-w-md">
                Sustainability & Environment
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-10 max-w-xl font-normal">
                Sustainability drives every aspect of our operations. Through
                renewable energy, resource conservation and environmental
                initiatives, we work towards a greener tomorrow.
              </p>

              {/* List items with dots aligned left and text centered */}
              <div className="w-full flex justify-center mt-2">
                <div className="grid grid-cols-[auto_1fr] gap-y-6 gap-x-12 text-sm md:text-base text-gray-700 font-semibold max-w-md w-full px-6">
                  {sustainabilityPoints.map((item, index) => (
                    <React.Fragment key={index}>
                      <span className="text-gray-400 text-xl font-bold flex items-center justify-start">•</span>
                      <span className="text-center flex items-center justify-center">{item}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}