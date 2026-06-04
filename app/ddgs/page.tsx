"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DDGSPage() {
    return (
        <main className="font-sans antialiased">

            {/* ================= HERO ================= */}
            <section className="relative w-full h-[300px] flex items-center justify-center text-white">

                <Image
                    src="/img/carousel-2.jpg"
                    alt="About Background"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative text-4xl md:text-6xl font-bold"
                >
                    DDGS
                </motion.h1>

            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-16 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                        DDGS (Distiller's Dried Grain Soluble)
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        DDGS is a valuable co-product of the ethanol production process. It is
                        the nutrient-rich by-product left after the ethanol is distilled from
                        fermented grains.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        DDGS is primarily used as a high-protein animal feed, rich in essential
                        nutrients such as proteins, fats, minerals, and vitamins. It is widely
                        utilized in the livestock industry, including dairy, poultry, swine,
                        and aquaculture.
                    </p>

                    <p className="text-gray-700 font-semibold mt-6">
                        For DDGS Sale Phone No:
                    </p>

                    <p className="mt-2 text-gray-800 font-medium">
                        B C NAYAK :{" "}
                        <a href="tel:9178456374" className="text-green-600 underline hover:text-green-700 transition-colors">
                            9178456374
                        </a>
                        <br />
                        BIKRAM PATNAIK 
                        {/* <a href="tel:7008598317" className="text-green-600 underline hover:text-green-700 transition-colors">
                            7008598317
                        </a> */}
                    </p>
                </motion.div>
            </section>

            {/* ================= IMAGE GRID ================= */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

                    {["/img/ddgs-1.png", "/img/ddgs-2.png", "/img/ddgs-3.png"].map(
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
                                    alt={`ddgs-${index}`}
                                    fill
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