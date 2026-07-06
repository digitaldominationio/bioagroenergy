"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[300px] flex items-center justify-center text-white">
        <Image
          src="/img/bricks-4.png"
          alt="Contact"
          fill
          sizes="100vw"
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
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Let's Start a Conversation
            </h2>
            
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Have questions about our products, business collaborations, careers or any other enquiry? 
              Fill out the form and our team will get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">
                  Company
                </h4>
                <p className="text-gray-600">Bio Agro Energy Pvt. Ltd.</p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">
                  Website
                </h4>
                <a 
                  href="https://bioagroenergy.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 hover:underline transition-colors"
                >
                  bioagroenergy.in
                </a>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">
                  Email
                </h4>
                <a 
                  href="mailto:hr_ho@bioagroenergy.in"
                  className="text-green-600 hover:text-green-700 hover:underline transition-colors"
                >
                  hr_ho@bioagroenergy.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-green-600 focus:bg-white focus:shadow-md transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-green-600 focus:bg-white focus:shadow-md transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-green-600 focus:bg-white focus:shadow-md transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-green-600 focus:bg-white focus:shadow-md transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Write Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write Your Message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-green-600 focus:bg-white focus:shadow-md transition-all resize-none"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>

    </main>
  );
}