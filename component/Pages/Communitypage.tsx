"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CommunityDevelopment() {
  // Variants for staggered list and grid items
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="font-sans antialiased bg-white">

      {/* ================= HEADER ================= */}
      <section className="relative w-full h-[300px] flex items-center justify-center text-white">
        <Image
          src="/img/community-4.png"
          alt="Community Development"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Community Development
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our commitment to community development is reflected in our efforts
            to improve the overall quality of life in the communities we serve.
            Key initiatives include:
          </p>

          <motion.ul
            className="space-y-4 text-gray-700"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.li variants={itemVariants} className="flex gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>
                <span className="font-semibold text-gray-800">Livelihood Programs:</span> Implementing
                skill development and vocational training programs to empower individuals
                with the skills needed to secure sustainable livelihoods.
              </span>
            </motion.li>

            <motion.li variants={itemVariants} className="flex gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>
                <span className="font-semibold text-gray-800">Infrastructure Development:</span> Contributing
                to community infrastructure development by building roads, community centers,
                and other essential facilities.
              </span>
            </motion.li>

            <motion.li variants={itemVariants} className="flex gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>
                <span className="font-semibold text-gray-800">Environmental Sustainability:</span> Promoting
                environmental sustainability through tree plantation drives, waste management
                programs, and awareness campaigns on conservation.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto bg-gray-50 rounded-3xl mb-16">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            "/img/community-1.png",
            "/img/community-2.png",
            "/img/community-3.png",
          ].map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative h-[250px] overflow-hidden rounded-xl shadow-md border-4 border-white"
            >
              <Image
                src={img}
                alt={`community-${i + 1}`}
                fill
                className="object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
        <section className="py-16 px-6 max-w-5xl mx-auto border-t border-gray-100">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 leading-relaxed text-center italic"
          >
            At Bio Agro Energy Private Limited, we are dedicated to making a
            positive impact on society through our comprehensive CSR initiatives.
            By focusing on health, education, sports, culture, and community
            development, we aim to contribute to the holistic development and
            well-being of the communities we are a part of.
          </motion.p>
        </section>
      </section>

      
    </main>
  );
}