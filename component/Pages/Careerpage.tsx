"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Career() {
  const [search, setSearch] = useState("");

  const jobs = [
    {
      title: "Senior Executive – Store",
      location: "Odisha",
      description:
        "Responsible for inventory management, SAP operations, material receipt & dispatch, documentation, and warehouse compliance.",
    },
    {
      title: "Shift Incharge (Power Plant)",
      location: "Odisha",
      description:
        "Responsible for operation and maintenance of the power plant, ensuring smooth shift operations and compliance with safety standards.",
    },
    {
      title: "DCS Engineer (Power Plant)",
      location: "Odisha",
      description:
        "Responsible for monitoring DCS systems, maintaining plant performance, and coordinating with maintenance teams.",
    },
    {
      title: "Senior Engineer – Mechanical",
      location: "Odisha",
      description:
        "Responsible for preventive maintenance, equipment inspection, troubleshooting, and mechanical system reliability.",
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const recruitmentSteps = [
    {
      number: "1",
      title: "Application Submission",
    },
    {
      number: "2",
      title: "Resume Screening",
    },
    {
      number: "3",
      title: "Interview Process",
    },
    {
      number: "4",
      title: "Final Selection",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}

      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/bricks-4.png"
          alt="Career"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-white text-5xl md:text-6xl font-bold"
        >
          Career
        </motion.h1>
      </section>

      {/* ================= OPENINGS ================= */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 rounded-full bg-green-700"></div>

          <h2 className="text-3xl font-bold text-gray-800">
            Current Openings
          </h2>
        </div>

        {/* Search */}

        <div className="mb-10">
          <input
            type="text"
            placeholder="Search Job..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        {/* Job Cards */}

        <div className="space-y-8">
          <AnimatePresence>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="relative bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden"
                >
                  {/* Green Border */}

                  <div className="absolute left-0 top-0 h-full w-1.5 bg-green-700"></div>

                  <div className="px-8 md:px-14 py-12 text-center">

                    <h3 className="text-3xl font-bold text-gray-800 mb-5">
                      {job.title}
                    </h3>

                    <p className="text-xl font-semibold text-gray-700 mb-8">
                      Location:{" "}
                      <span className="font-normal">
                        {job.location}
                      </span>
                    </p>

                    <p className="text-gray-600 text-lg leading-8 max-w-4xl mx-auto mb-10">
                      {job.description}
                    </p>

                    <button className="bg-green-700 hover:bg-green-800 text-white px-10 py-3 rounded-full font-semibold transition">
                      Apply Now
                    </button>

                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-gray-500 text-lg"
              >
                No jobs found.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </section>

      {/* ================= Recruitment Process ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
          >
            Our Recruitment Process
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {recruitmentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-gray-50 rounded-3xl shadow-md hover:shadow-xl border border-gray-100 h-56 flex flex-col justify-center items-center transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center text-2xl font-bold mb-6">
                  {step.number}
                </div>

                <h3 className="text-lg font-medium text-gray-700 text-center px-4">
                  {step.title}
                </h3>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}