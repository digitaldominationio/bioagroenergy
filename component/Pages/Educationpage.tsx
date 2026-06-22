"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EducationPage() {
  // Variants for staggered list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="font-sans antialiased">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[300px] flex items-center justify-center">
        <Image
          src="/img/education-4.png"
          alt="Education"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 max-w-5xl mx-auto px-6 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800"
        >
          Education 
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed mb-6"
        >
          We believe that education is a fundamental right and a powerful tool
          for social and economic development. Our CSR efforts in education aim to:
        </motion.p>

        <motion.ul 
          className="space-y-4 text-gray-700"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.li variants={itemVariants} className="flex gap-3">
            <span className="text-green-500 font-bold">✔</span>
            <span>
              <strong>School Infrastructure:</strong> Improving local schools by
              building classrooms, providing furniture, and ensuring access to
              clean drinking water and sanitation facilities.
            </span>
          </motion.li>

          <motion.li variants={itemVariants} className="flex gap-3">
            <span className="text-green-500 font-bold">✔</span>
            <span>
              <strong>Scholarships & Sponsorships:</strong> Offering financial aid
              to deserving students from underprivileged backgrounds to support
              their education.
            </span>
          </motion.li>

          <motion.li variants={itemVariants} className="flex gap-3">
            <span className="text-green-500 font-bold">✔</span>
            <span>
              <strong>Educational Resources:</strong> Supplying textbooks,
              stationery, and digital learning tools to enhance the learning
              experience.
            </span>
          </motion.li>
        </motion.ul>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {["/img/education-1.png", "/img/education-2.png", "/img/education-3.png"].map(
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
                  alt={`education-${index}`}
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