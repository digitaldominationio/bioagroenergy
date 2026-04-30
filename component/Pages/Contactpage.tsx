"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Message sent successfully!");
  };

  return (
    <main className="font-sans antialiased">

      {/* ================= HEADER ================= */}
      <section className="relative w-full h-[300px] flex items-center justify-center text-white">
        <Image
          src="/img/bricks-4.png"
          alt="Contact"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-4xl md:text-6xl font-bold tracking-tight"
        >
          CONTACT US
        </motion.h1>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h6 className="text-sm tracking-[3px] text-blue-600 uppercase mb-2 font-bold">
            Contact
          </h6>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Get In Touch
          </h1>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >

            <div className="grid sm:grid-cols-2 gap-4">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                required
              />

              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                required
              />
            </div>

            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              required
            />

            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              placeholder="Message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
              required
            />

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </div>

          </motion.form>
        </div>

      </section>

    </main>
  );
}