"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SportsPage() {
  // Stagger variants for the list items
  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="font-sans antialiased">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[250px] flex items-center justify-center">
        <Image
          src="/img/sports-4.png"
          alt="Sports"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Title */}
       
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 max-w-5xl mx-auto px-6 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800"
        >
          Sports 
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed mb-6"
        >
          Encouraging sports and physical activities is essential for the
          holistic development of individuals and communities. Our CSR
          initiatives in sports include:
        </motion.p>

        <motion.ul 
          className="space-y-4 text-gray-700"
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.li variants={listItem} className="flex gap-3">
            <span className="text-green-500 font-bold">✔</span>
            <span>
              <strong>Sports Facilities:</strong> Developing and maintaining
              playgrounds, sports fields, and indoor complexes to provide safe
              and accessible spaces for physical activities.
            </span>
          </motion.li>

          <motion.li variants={listItem} className="flex gap-3">
            <span className="text-green-500 font-bold">✔</span>
            <span>
              <strong>Talent Development:</strong> Identifying and nurturing
              young talents through coaching camps, sports equipment support,
              and participation in competitions.
            </span>
          </motion.li>

          <motion.li variants={listItem} className="flex gap-3">
            <span className="text-green-500 font-bold">✔</span>
            <span>
              <strong>Community Events:</strong> Organizing sports events and
              tournaments to promote fitness, teamwork, and community spirit.
            </span>
          </motion.li>
        </motion.ul>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {["/img/sports-1.png", "/img/sports-2.png", "/img/sports-3.png"].map(
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
                  alt={`sports-${index}`}
                  fill
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