"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    { id: "ethanol", title: "Ethanol", image: "/img/product-1.png" },
    { id: "ddgs", title: "DDGS", image: "/img/product-2.jpg" },
    { id: "bricks", title: "Bricks", image: "/img/product-3.jpg" },
    { id: "co2", title: "CO2", image: "/img/product-4.jpg" },
];

// Detailed content for each service modal
const serviceDetails: Record<string, { title: string; description: string }> = {
    ethanol: {
        title: "Ethanol – Green Biofuel",
        description: `Ethanol Production Capacity:
The Company’s ethanol production capacity of 200 KLPD enables it to meet the requirements of the Govt’s 20% blending programme by 2025.
Production Process:
Our ethanol production process is based on cutting-edge technology and adheres to the highest industry standards. We utilize locally sourced damaged/broken rice and maize as our primary feedstock, ensuring a sustainable and reliable source of raw material. Ethanol, also known as ethyl alcohol, is a renewable biofuel produced by fermenting the sugars found in biomass such as corn, sugarcane, or cellulosic feedstocks. Bio Agro Energy Private Limited harnesses the rich agricultural heritage of Odisha by using broken/damaged rice as the primary feedstock for ethanol production. This approach aligns perfectly with the State’s rice cultivation industry, ensuring a stable and locally sourced raw material supply, thereby increasing the income of rice growers substantially It is a key component of the government's ethanol blending program, aiming to reduce carbon emissions and promote energy independence. Ethanol is primarily used as a fuel additive to gasoline, enhancing octane levels and reducing harmful emissions. It also finds applications in various industries, including pharmaceuticals, cosmetics, and beverages`,
    },
    ddgs: {
        title: "DDGS – Distillers Dried Grains with Solubles",
        description: `Our decision to establish our ethanol plant in Sonepur District, Odisha, despite the lack of existing industries, and how our presence in Sonepur District will contribute to the overall development of the community through CSR (Corporate Social Responsibility) activities, education, healthcare, or infrastructure improvement projects, was motivated by a combination of strategic advantages and a commitment to community development. We believe that our presence in Sonepur will benefit not only our company but also the people of the region by contributing to the creation of a sustainable model for economic growth and development.`,
    },
    co2: {
        title: "CO₂ Recovery & Utilization",
        description: `Our decision to establish our ethanol plant in Sonepur District, Odisha, despite the lack of existing industries, and how our presence in Sonepur District will contribute to the overall development of the community through CSR (Corporate Social Responsibility) activities, education, healthcare, or infrastructure improvement projects, was motivated by a combination of strategic advantages and a commitment to community development. We believe that our presence in Sonepur will benefit not only our company but also the people of the region by contributing to the creation of a sustainable model for economic growth and development.`,
    },
    bricks: {
        title: "Sustainable Bricks",
        description: `Our decision to establish our ethanol plant in Sonepur District, Odisha, despite the lack of existing industries, and how our presence in Sonepur District will contribute to the overall development of the community through CSR (Corporate Social Responsibility) activities, education, healthcare, or infrastructure improvement projects, was motivated by a combination of strategic advantages and a commitment to community development. We believe that our presence in Sonepur will benefit not only our company but also the people of the region by contributing to the creation of a sustainable model for economic growth and development.`,
    },
};

// CSR commitment note shown in every modal
const csrNote = `<div class="mt-5 pt-4 border-t border-gray-200 bg-gray-50 p-4 rounded-lg">
    <h4 class="font-bold text-green-800 flex items-center gap-2 text-base md:text-lg"><span class="text-xl">🤝</span> Community Commitment – Sonepur District, Odisha</h4>
    <p class="text-sm md:text-[14px] mt-2 leading-relaxed text-gray-600 font-normal">Our decision to establish the ethanol plant in Sonepur (despite lack of existing industries) is driven by strategic advantage and dedication to inclusive growth. Through CSR initiatives, we invest in education, healthcare, infrastructure, and women's empowerment. Contributions include: mobile health clinics, skill development for rural youth, solar lighting in villages, and support for local schools. Our presence creates a sustainable model for economic development, directly benefiting farmers, small businesses, and the wider community.</p>
</div>`;

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const cardVariants = {
    rest: { scale: 1, transition: { duration: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } }
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, damping: 25, stiffness: 300 } },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }
};

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
};

const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
};

export default function AboutPage() {
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

    const openServiceModal = (serviceId: string) => {
        setSelectedService(serviceId);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeServiceModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "unset";
        setTimeout(() => setSelectedService(null), 300);
    };

    const toggleReadMore = () => {
        setIsReadMoreOpen(!isReadMoreOpen);
        if (!isReadMoreOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    };

    const closeReadMore = () => {
        setIsReadMoreOpen(false);
        document.body.style.overflow = "unset";
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isModalOpen) {
                closeServiceModal();
            }
            if (e.key === "Escape" && isReadMoreOpen) {
                closeReadMore();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isModalOpen, isReadMoreOpen]);

    const selectedServiceDetail = selectedService ? serviceDetails[selectedService] : null;

    return (
        <main className="font-['Inter',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',sans-serif] antialiased">

            {/* ================= HEADER ================= */}
            <motion.section
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                className="relative w-full h-[400px] flex items-center justify-center text-white"
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
                    className="relative text-4xl md:text-6xl font-bold tracking-tight leading-tight"
                >
                    About Us
                </motion.h1>
            </motion.section>

            {/* ================= ABOUT ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                    {/* Image */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative w-full h-[400px]"
                    >
                        <Image
                            src="/img/about.jpg"
                            alt="about"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <p className="text-gray-600 leading-relaxed font-normal text-[15px] md:text-base font-serif">
                            Bio Agro Energy Pvt. Ltd is setting up 200 KLPD Ethanol Plant at Village-Bankbija &
                            Saradhapali, Sonepur, Odisha, India and 60 KLPD Ethanol Plant at Village- Aliganj,
                            Tehsil-Bareli, Dist- Raisen, Bhopal, Madhya Pradesh, India.
                            Odisha plant will be commissioned in September-2024 and Bhopal plant will be
                            commissioned in August-2024.
                            <br /><br />
                            The feed stock proposed to be used would be mainly Broken Rice /
                            Damaged rice and Maize to produce Bio-fuel Ethanol.
                            BAEPL is planning to produce around 8.60 Crore litres Ethanol per annum
                            from these factories. Bio-fuel Ethanol is to be used mainly for
                            blending with Petrol by supplying to OMCs (Oil Manufacturing Companies)
                            depots across Odissa, Madhya Pradesh and to other States as per the
                            requirement of OMC, for which Long Term Offtake Agreements have been
                            done with the Oil Companies. The by-products like CO2,
                            DDGS and Fly ash bricks will also be sold in the market.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleReadMore}
                            className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 shadow-sm hover:shadow-md text-[14px] md:text-base"
                        >
                            Read More
                        </motion.button>
                    </motion.div>

                </div>
            </section>

            {/* Read More Modal */}
            <AnimatePresence>
                {isReadMoreOpen && (
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4"
                    >
                        <motion.div
                            variants={modalVariants}
                            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto"
                        >
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={closeReadMore}
                                className="absolute top-4 right-5 text-gray-500 hover:text-gray-800 text-3xl font-bold z-10 transition-colors"
                            >
                                ×
                            </motion.button>
                            <div className="p-6 pt-4">
                                <motion.h2
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 tracking-tight"
                                >
                                    About Bio Agro Energy
                                </motion.h2>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="w-full mb-5"
                                >
                                    <Image
                                        src="/img/about.jpg"
                                        alt="About"
                                        width={800}
                                        height={400}
                                        className="w-full h-auto rounded-lg object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed space-y-4 font-serif"
                                >
                                    <p>
                                        Bio Agro Energy Pvt. Ltd is setting up 200 KLPD Ethanol Plant at Village-Bankbija & Saradhapali, Sonepur, Odisha, India and 60 KLPD Ethanol Plant at Village-Aliganj, Tehsil-Bareli, Dist-Raisen, Bhopal, Madhya Pradesh, India. Odisha plant will be commissioned in September-2024 and Bhopal plant will be commissioned in August-2024.
                                    </p>
                                    <p>
                                        The feed stock proposed to be used would be mainly Broken Rice / Damaged rice and Maize to produce Bio-fuel Ethanol. BAEPL is planning to produce around 8.60 Crore litres Ethanol per annum from these factories. Bio-fuel Ethanol is to be used mainly for blending with Petrol by supplying to OMCs (Oil Manufacturing Companies) depots across Odisha, Madhya Pradesh and other States as per the requirement of OMC, for which Long Term Offtake Agreements have been done with the Oil Companies. The by-products like CO2, DDGS and Fly ash bricks will also be sold in the market.
                                    </p>
                                    <p>
                                        According to Govt. of India, Ethanol Blending Programme (EBP), Ethanol is 99.9% pure alcohol that can be blended with petrol. India aims to achieve 20% Ethanol blending in petrol by 2025-26. At present all India average blending already achieved 13%. The EBP programme has envisioned using a variety of feedstock that are in ample surplus nation wide to meet the substantial Ethanol demand.
                                    </p>
                                    <p>
                                        The global production of fuel ethanol touched 111 billion litres. The United States of America (USA) and Brazil contribute for 92 billion litres (83% of global share).
                                    </p>
                                    <p>
                                        The Company wants to generate this environment friendly fuel to promote the concept of sustainable development as well as to promote Agro based industries with assured return for the farmers. This venture will also boost job opportunities and would also spur Indigenous technological development. This kind of industries will continuously do the upliftment of rural sectors of the country. And we as a company feel proud to align ourselves in the green fuel programme of Govt. of India.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ================= SERVICES ================= */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Title */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center mb-16"
                    >
                        <h6 className="uppercase text-green-500 tracking-[4px] mb-2 text-xs md:text-sm font-semibold">
                            Services
                        </h6>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight leading-tight">
                            What We Do
                        </h1>
                        <p className="text-gray-500 max-w-2xl mx-auto mt-4 font-normal text-[14px] md:text-base">
                            Sustainable bioenergy solutions driving India's green future & rural prosperity
                        </p>
                    </motion.div>

                    {/* Grid - Clickable Cards */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {services.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover="hover"
                                whileTap="tap"
                                initial="rest"
                                onClick={() => openServiceModal(item.id)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        openServiceModal(item.id);
                                    }
                                }}
                                tabIndex={0}
                                role="button"
                                aria-label={`View details about ${item.title}`}
                                className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg"
                            >
                                <motion.div
                                    variants={cardVariants}
                                    className="relative h-[250px] overflow-hidden rounded-lg shadow-md"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition duration-500"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                        <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide">
                                            {item.title}
                                        </h3>
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <div className="bg-gray-200 text-center py-4 mt-3 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 text-[15px] md:text-base">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* Service Detail Modal */}
            <AnimatePresence>
                {isModalOpen && selectedServiceDetail && (
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-100 flex items-center justify-center p-4"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="service-modal-title"
                    >
                        {/* Backdrop */}
                        <motion.div
                            variants={backdropVariants}
                            className="absolute inset-0 bg-black/40 "
                            onClick={closeServiceModal}
                        />

                        {/* Modal Content */}
                        <motion.div
                            variants={modalVariants}
                            className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
                        >
                            <div className="sticky top-0 bg-white px-6 pt-6 pb-3 border-b flex justify-between items-center z-10">
                                <motion.h2
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    id="service-modal-title"
                                    className="text-xl md:text-2xl lg:text-3xl font-bold text-green-700 tracking-tight leading-tight"
                                >
                                    {selectedServiceDetail.title}
                                </motion.h2>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={closeServiceModal}
                                    className="text-gray-500 hover:text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full p-1"
                                    aria-label="Close modal"
                                >
                                    <X className="w-6 h-6" />
                                </motion.button>
                            </div>

                            <div className="p-6 md:p-8">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="w-full mb-6 rounded-xl overflow-hidden shadow-md"
                                >
                                    <Image
                                        src="/img/carousel-1.jpg"
                                        alt="Bricks Product"
                                        width={1200}
                                        height={600}
                                        className="w-full h-[220px] md:h-[420px] object-cover hover:scale-105 transition duration-500"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="space-y-5"
                                    dangerouslySetInnerHTML={{ __html: selectedServiceDetail.description }}
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    dangerouslySetInnerHTML={{ __html: csrNote }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ================= FAQ ================= */}
            <section id="faqs" className="w-full py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h6 className="uppercase text-green-400 font-bold tracking-[4px] text-sm mb-2">
                            FAQs
                        </h6>

                        <h1 className="text-4xl md:text-5xl font-bold text-[#2A4365]">
                            You Should Know
                        </h1>

                        {/* Blue decorative underline from image */}
                        <div className="relative w-40 h-[2px] bg-blue-950 mx-auto mt-4">
                            <div className="absolute top-[4px] left-1/4 right-1/4 h-[2px] bg-blue-950 rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 relative">
                        {/* Vertical Divider line shown in image */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-950 -translate-x-1/2"></div>

                        {/* LEFT COLUMN */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center md:text-right md:pr-12 pb-10 md:pb-0"
                        >
                            <h3 className="text-3xl font-bold text-[#2A4365] mb-8">
                                Why Switch to Ethanol ?
                            </h3>

                            {[
                                "Renewable fuel from biomass.",
                                "Reduces greenhouse gas emissions.",
                                "Blends with gasoline.",
                                "Supports agricultural industry.",
                            ].map((item, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="mb-4 text-lg text-gray-700 font-medium flex items-center justify-center md:justify-end gap-3"
                                >
                                    <span>{item}</span>
                                    <span className="text-green-500 text-xl">✔</span>
                                </motion.p>
                            ))}
                        </motion.div>

                        {/* RIGHT COLUMN */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left md:pl-12 border-t md:border-t-0 pt-10 md:pt-0"
                        >
                            <h3 className="text-3xl font-bold text-[#2A4365] mb-8">
                                Why Choose Us ?
                            </h3>

                            {[
                                "Biodegradable and non-toxic.",
                                "Used in beverages and sanitizers.",
                                "Can be produced from waste.",
                                "Efficient and sustainable fuel.",
                            ].map((item, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="mb-4 text-lg text-gray-700 font-medium items-center justify-center md:justify-start gap-3 flex"
                                >
                                    <span className="text-green-500 text-xl">✔</span>
                                    <span>{item}</span>
                                </motion.p>
                            ))}
                        </motion.div>
                    </div>

                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center mt-14"
                    >
                        <a
                            href="/contact"
                            className="bg-green-700 hover:bg-green-800 text-white px-10 py-3 rounded-sm text-lg font-semibold transition-all shadow-md inline-block"
                        >
                            Get A Quote
                        </a>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}