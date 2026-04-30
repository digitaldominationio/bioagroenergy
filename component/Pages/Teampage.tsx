"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const team = [
    {
        name: "MR. SIBA NARAYAN SAMANTARAY",
        role: "Managing Director & CEO",
        desc: "Mr. Siba Narayan Samantaray is the Managing Director of Bio Agro Energy Private Limited, a Graduate Engineer with MBA in Finance & Personnel Management and also a Law Graduate. Holds more than 32 years experience in Distillery plants and other related plants.",
        image: "/img/team-1.jpg",
    },
    {
        name: "MR. PURANDARA BABU POTHUGUNTA",
        role: "Director",
        desc: "Mr. Purandara Babu Pothugunta is the Director of Bio Agro Energy Private Limited. He pursued a Master’s Degree in Public Administration and has over three decades of expertise in Public Administration, Hydro Power Companies and packaging industries.",
        image: "/img/team-2.jpg",
    },
    {
        name: "MR. ANUPAM PATNAIK",
        role: "Director",
        desc: "Mr. Anupam Patnaik is the Director of Bio Agro Energy Private Limited. He has experience in automobile industry, film production and media & advertising and holds leadership roles in major automobile dealerships.",
        image: "/img/team-3.jpg",
    },
];

const testimonials = [
    {
        image: "/img/testimonial-1.jpg",
        text: "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed.",
        name: "Client Name",
        role: "Profession",
    },
    {
        image: "/img/testimonial-2.jpg",
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
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                            >
                                {/* Image Container with Zoom Effect */}
                                <motion.div 
                                    variants={cardHover}
                                    className="relative h-[450px] overflow-hidden"
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>

                                {/* Content */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6"
                                >
                                    <h2 className="text-lg font-bold text-gray-900">
                                        {member.name}
                                    </h2>
                                    <motion.h3 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.1 }}
                                        className="text-green-500 font-semibold mb-3"
                                    >
                                        {member.role}
                                    </motion.h3>
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className="text-gray-600 text-sm leading-relaxed"
                                    >
                                        {member.desc}
                                    </motion.p>
                                </motion.div>

                            </motion.div>
                        ))}
                    </motion.div>

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