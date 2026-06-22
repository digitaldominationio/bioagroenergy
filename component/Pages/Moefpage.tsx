"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CompliancePage() {
  // Variants for staggered list animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
          alt="Compliance"
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Title removed as per your original structure, but overlay kept for visual consistency */}
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="relative text-3xl md:text-5xl font-bold text-center px-4 text-gray-800">
            MOEF & CC Compliances
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-600">
            Download Reports
          </h2>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* 2023-2024 */}
          <motion.div variants={itemVariants} className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-600 mb-3">
              2023 – 2024
            </h3>
            <ul className="space-y-0.5">
              <li>
                <a
                  href="/download/Six monthly compliance - Oct -2023-to-Mar-2024.pdf"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
                >
                  Report: Oct 2023 – Mar 2024
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 2023 */}
          <motion.div variants={itemVariants} className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-600 mb-3">
              2023
            </h3>
            <ul className="space-y-0.5">
              <li>
                <a
                  href="/download/Six monthly compliance -Apr 2023-to-Sep-2023.pdf"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
                >
                  Report: Apr 2023 – Sep 2023
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 2022-2023 */}
          <motion.div variants={itemVariants} className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-600 mb-3">
              2022 – 2023
            </h3>
            <ul className="space-y-0.5">
              <li>
                <a
                  href="/download/Six monthly Compliance Report-Oct-2022-to-Mar-2023.pdf"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
                >
                  Report: Oct 2022 – Mar 2023
                </a>
              </li>
            </ul>
          </motion.div>

        </motion.div>
      </section>

    </main>
  );
}