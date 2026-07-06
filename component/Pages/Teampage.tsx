"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Siba Narayan Samantaray",
    role: "Managing Director & CEO",
    desc: "Mr. Siba Narayan Samantaray is the Managing Director of the Bio Agro Energy Pvt. Ltd.",
    image: "/img/team-01.jpg",
  },
  {
    name: "Purandara Babu Pothugunta",
    role: "Director",
    desc: "Mr. Purandara Babu Pothugunta is the Director of the Bio Agro Energy Pvt. Ltd.",
    image: "/img/team-2.jpg",
  },
  {
    name: "Anupam Patnaik",
    role: "Director",
    desc: "Mr. Anupam Patnaik is the Director of the Bio Agro Energy Pvt. Ltd.",
    image: "/img/team-3.jpg",
  },
];

const testimonials = [
    {
        image: "/img/testimonial.jpeg",
        text: "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed.",
        name: "Client Name",
        role: "Profession",
    },
    {
        image: "/img/testimonial2.png",
        text: "Diam sed sed dolor stet amet eirmod eos labore diam. Rebum elitr dolore et eos labore, stet justo sed est.",
        name: "Client Name",
        role: "Profession",
    },
];

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { 
        scale: 1.03, 
        y: -8,
        transition: { duration: 0.3, type: "spring" as const, stiffness: 300 }
    }
};

const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
};

const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
};

const testimonialVariants = {
    enter: { opacity: 0, scale: 0.9, y: 20 },
    center: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring" as const, damping: 20 } },
    exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.3 } }
};

export default function Testimonial() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    // ✅ Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentTestimonial = testimonials[testimonialIndex];
    

    return (
        <main>

            {/* ================= HEADER ================= */}
            <motion.section
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                className="relative w-full h-[300px] flex items-center justify-center text-white"
            >
                <Image
                    src="/img/carousel-2.jpg"
                    alt="About Background"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <motion.h1
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative text-4xl md:text-6xl font-bold"
                >
                    OUR TEAM
                </motion.h1>
            </motion.section>

            {/* ================= Team ================= */}
            <section className="w-full py-10 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Title */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold">
                            Meet Our Leadership
                        </h1>
                    </motion.div>

                    {/* Cards */}
                    <div className="flex flex-col items-center gap-12 mt-12">
                        {/* Row 1: Managing Director & CEO (centered) */}
                        {team.filter(member => member.role.includes("Managing Director")).map((member) => {
                            return (
                                <motion.div
                                    key={member.name}
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.03, y: -8 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-slate-100/90 hover:bg-slate-200/50 rounded-[32px] p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/60 flex flex-col items-center group w-full max-w-[380px]"
                                >
                                    {/* Circular Image Container */}
                                    <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 bg-slate-200 border-4 border-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                sizes="144px"
                                            />
                                        ) : (
                                            <span className="text-slate-400 text-xs font-semibold">PHOTO</span>
                                        )}
                                    </div>

                                    {/* Role */}
                                    <p className="text-green-700 font-bold text-sm tracking-wider uppercase mb-1">
                                        {member.role}
                                    </p>

                                    {/* Name */}
                                    <h2 className="text-xl font-bold text-slate-800 mb-4">
                                        {member.name}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 max-w-[240px] grow">
                                        {member.desc}
                                    </p>

                                    {/* Social Links */}
                                    <div className="flex justify-center gap-3 mt-auto">
                                        <motion.a
                                            whileHover={{ scale: 1.15, y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            href="#"
                                            className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-green-700 hover:text-white hover:border-green-700 transition-all duration-300 cursor-pointer bg-white"
                                        >
                                            <FaTwitter size={14} />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.15, y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            href="#"
                                            className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-green-700 hover:text-white hover:border-green-700 transition-all duration-300 cursor-pointer bg-white"
                                        >
                                            <FaFacebook size={14} />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.15, y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            href="#"
                                            className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-green-700 hover:text-white hover:border-green-700 transition-all duration-300 cursor-pointer bg-white"
                                        >
                                            <FaLinkedin size={14} />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Row 2: Directors (side-by-side, centered) */}
                        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 w-full max-w-4xl">
                            {team.filter(member => !member.role.includes("Managing Director")).map((member, i) => {
                                return (
                                    <motion.div
                                        key={member.name}
                                        variants={staggerItem}
                                        whileHover={{ scale: 1.03, y: -8 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-slate-100/90 hover:bg-slate-200/50 rounded-[32px] p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/60 flex flex-col items-center group w-full md:w-[350px] max-w-[380px]"
                                    >
                                        {/* Circular Image Container */}
                                        <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 bg-slate-200 border-4 border-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                                            {member.image ? (
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="144px"
                                                />
                                            ) : (
                                                <span className="text-slate-400 text-xs font-semibold">PHOTO</span>
                                            )}
                                        </div>

                                        {/* Role */}
                                        <p className="text-green-700 font-bold text-sm tracking-wider uppercase mb-1">
                                            {member.role}
                                        </p>

                                        {/* Name */}
                                        <h2 className="text-xl font-bold text-slate-800 mb-4">
                                            {member.name}
                                        </h2>

                                        {/* Description */}
                                        <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 max-w-[240px] grow">
                                            {member.desc}
                                        </p>

                                        {/* Social Links */}
                                        <div className="flex justify-center gap-3 mt-auto">
                                            <motion.a
                                                whileHover={{ scale: 1.15, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                                href="#"
                                                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-green-700 hover:text-white hover:border-green-700 transition-all duration-300 cursor-pointer bg-white"
                                            >
                                                <FaTwitter size={14} />
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.15, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                                href="#"
                                                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-green-700 hover:text-white hover:border-green-700 transition-all duration-300 cursor-pointer bg-white"
                                            >
                                                <FaFacebook size={14} />
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.15, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                                href="#"
                                                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-green-700 hover:text-white hover:border-green-700 transition-all duration-300 cursor-pointer bg-white"
                                            >
                                                <FaLinkedin size={14} />
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= TESTIMONIAL ================= */}
                 <section id="testimonial" className="w-full py-20 bg-white overflow-hidden">
                   <div className="max-w-4xl mx-auto px-6">
                     <motion.div
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6 }}
                       viewport={{ once: true, amount: 0.3 }}
                       className="text-center mb-20"
                     >
                       <h6 className="uppercase text-green-500 tracking-[3px] mb-2">
                         Testimonial
                       </h6>
                       <h1 className="text-3xl md:text-5xl font-bold">
                         Our Clients Say
                       </h1>
                     </motion.div>
                     <AnimatePresence mode="wait">
                       <motion.div
                         key={testimonialIndex}
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -20 }}
                         transition={{ duration: 0.5 }}
                         className="text-center"
                       >
                         <div className="relative w-[100px] h-[100px] mx-auto mb-4">
                           <Image
                             src={currentTestimonial.image}
                             alt={currentTestimonial.name}
                             fill
                             sizes="100px"
                             className="rounded-full object-cover"
                           />
                         </div>
                         <p className="text-lg md:text-xl text-gray-700 mb-6">
                           {currentTestimonial.text}
                         </p>
                         <h4 className="text-xl font-semibold">{currentTestimonial.name}</h4>
                         <span className="text-gray-500">{currentTestimonial.role}</span>
                       </motion.div>
                     </AnimatePresence>
                     <div className="flex justify-center mt-6 gap-2">
                       {testimonials.map((_, i) => (
                         <button
                           key={i}
                           onClick={() => setTestimonialIndex(i)}
                           className={`w-3 h-3 rounded-full transition ${i === testimonialIndex ? "bg-green-500" : "bg-gray-300"
                             }`}
                         />
                       ))}
                     </div>
                   </div>
                 </section>

            {/* Optional: Add floating animation styles */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-pulse-slow {
                    animation: pulse 2s ease-in-out infinite;
                }
            `}</style>

        </main>
    );
}