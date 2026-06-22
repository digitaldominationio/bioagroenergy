"use client";

import Image from "next/image";
import { useState } from "react";
import { User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Career() {
  const [search, setSearch] = useState("");

  const jobs = [
    { title: "Shift Incharge (Power Plant)", exp: "4 - 5 years.", open: 1 },
    { title: "DCS Engg (Power Plant)", exp: "3-4 years.", open: 1 },
    { title: "1st Class Boiler Operator", exp: "4-5 years.", open: 1 },
    { title: "2nd Class Boiler Operator", exp: "4-5 years.", open: 1 },
    { title: "Sr. Engg (Mechanical)", exp: "4-5 years.", open: 1 },
    { title: "Shift Engg (Mechanical)", exp: "4-5 years.", open: 1 },
    { title: "Electrical & Instrumental Incharge", exp: "4-5 years.", open: 1 },
    { title: "Electrical Incharge", exp: "3-4 years.", open: 1 },
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-gray-50 min-h-screen font-sans antialiased">
      {/* ================= HEADER ================= */}
      <section className="relative w-full h-[250px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/img/bricks-4.png"
          alt="Career"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-5xl font-bold tracking-tight"
        >
          Career
        </motion.h1>
      </section>

      {/* ================= JOB SECTION ================= */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-8 bg-blue-900"></div>
          <h2 className="text-3xl font-bold text-slate-800">
            {filteredJobs.length} Jobs
          </h2>
        </div>

        {/* Search Input */}
        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-400 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-lg transition-all"
          />
        </div>

        {/* Jobs Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  layout
                  key={job.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-start transition-shadow hover:shadow-xl"
                >
                  {/* Card Top Row */}
                  <div className="flex justify-between w-full mb-4">
                    <div className="bg-[#002B5B] p-3 rounded-lg">
                      <User className="text-white w-8 h-8" /> 
                    </div>
                    <span className="text-red-400 font-medium text-sm">
                      {job.open} open position
                    </span>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-xl font-bold text-[#002B5B] mb-4 min-h-[56px]">
                    {job.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-sm">
                    Experience: <span className="font-semibold">{job.exp}</span>
                  </p>

                  {/* Button */}
                  <button className="w-full mt-auto py-2.5 px-4 border-2 border-[#002B5B] text-[#002B5B] font-bold rounded-lg hover:bg-[#002B5B] hover:text-white transition-all active:scale-95">
                    Send Resume
                  </button>
                </motion.div>
              ))
            ) : (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-gray-500 py-10"
              >
                No jobs found matching your search.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}