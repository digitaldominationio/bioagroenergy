"use client";

import Image from "next/image";
import { useState } from "react";

export default function Events() {
    const [filter, setFilter] = useState("all");

    const images = [
        { src: "/event-img/innaguration-1.JPG", type: "ice-cream" },
        { src: "/event-img/innaguration-2.JPG", type: "ice-cream" },
        { src: "/event-img/innaguration-3.JPG", type: "ice-cream" },
        { src: "/event-img/innaguration-4.jpg", type: "ice-cream" },
        { src: "/event-img/innaguration-5.jpg", type: "ice-cream" },
        { src: "/event-img/innaguration-6.jpg", type: "ice-cream" },

        { src: "/event-img/holi.jpg", type: "chocolate" },

        { src: "/event-img/plant-1.png", type: "cake" },
        { src: "/event-img/plant-2.jpg", type: "cake" },
        { src: "/event-img/plant-3.PNG", type: "cake" },
        { src: "/event-img/plant-4.jpg", type: "cake" },
        { src: "/img/New folder/plant-1.jpg", type: "cake" },
        { src: "/img/New folder/plant-2.jpg", type: "cake" },
        { src: "/img/New folder/plant-3.jpg", type: "cake" },
        { src: "/img/New folder/plant-4.jpg", type: "cake" },
        { src: "/img/New folder/plant-5.jpg", type: "cake" },
        { src: "/img/New folder/plant-6.jpg", type: "cake" },
        { src: "/img/New folder/plant-7.jpg", type: "cake" },
        { src: "/img/New folder/plant-8.jpg", type: "cake" },
        { src: "/img/New folder/plant-9.jpg", type: "cake" },
        { src: "/img/New folder/plant-10.jpg", type: "cake" },
        { src: "/img/New folder/plant-11.jpg", type: "cake" },
        { src: "/img/New folder/plant-12.jpg", type: "cake" },
        { src: "/img/New folder/plant-13.jpg", type: "cake" },
        { src: "/img/New folder/plant-14.jpg", type: "cake" },
        { src: "/img/New folder/plant-15.jpg", type: "cake" },
        { src: "/img/New folder/plant-16.jpg", type: "cake" },
        { src: "/img/New folder/plant-17.jpg", type: "cake" },
        { src: "/img/New folder/plant-18.jpg", type: "cake" },
        { src: "/img/New folder/plant-19.jpg", type: "cake" },
        { src: "/img/New folder/plant-20.jpg", type: "cake" },
        { src: "/img/New folder/plant-21.jpg", type: "cake" },
        { src: "/img/New folder/plant-22.jpg", type: "cake" },
        { src: "/img/New folder/plant-23.jpg", type: "cake" },

        { src: "/event-img/work-1.jpg", type: "juice" },
        { src: "/event-img/work-2.jpg", type: "juice" },
        { src: "/event-img/work-3.jpg", type: "juice" },
        { src: "/event-img/work-4.jpg", type: "juice" },
        { src: "/event-img/work-5.jpg", type: "juice" },
    ];

    const filteredImages =
        filter === "all"
            ? images
            : images.filter((img) => img.type === filter);

    return (
        <main>

            {/* ================= HEADER ================= */}
            <section className="relative w-full h-[400px] flex items-center justify-center text-white">
                <Image
                    src="/img/bricks-4.png"
                    alt="Events"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <h1 className="relative text-4xl md:text-6xl font-bold">
                    EVENTS
                </h1>
            </section>

            {/* ================= FILTER BUTTONS ================= */}
            <section className="py-10 px-6 flex justify-center">
                <ul className="flex flex-wrap gap-5 justify-center">
                    {[
                        { label: "All", value: "all" },
                        { label: "Inaguration", value: "ice-cream" },
                        { label: "Holi", value: "chocolate" },
                        { label: "Plant", value: "cake" },
                        { label: "Work", value: "juice" },
                    ].map((btn) => (
                        <li
                            key={btn.value}
                            onClick={() => setFilter(btn.value)}
                            className={`px-8 py-3 cursor-pointer transition-all duration-200 shadow-md text-lg min-w-[120px] text-center rounded-full ${filter === btn.value
                                ? "bg-[#004d00] text-white" // Dark green for active state
                                : "bg-white text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            {btn.label}
                        </li>
                    ))}
                </ul>
            </section>

            {/* ================= GALLERY ================= */}
            <section className="px-6 pb-20 max-w-7xl mx-auto">
                {/* Change 'grid' to 'flex flex-wrap' */}
                <div className="flex flex-wrap justify-center gap-6">
                    {filteredImages.map((img, i) => (
                        <div
                            key={i}
                            // Set a basis/width so they look like a grid (approx 33% minus gap)
                            className="relative h-[250px] w-full sm:w-[calc(50%-24px)] md:w-[calc(33.33%-24px)] overflow-hidden rounded-lg group"
                        >
                            <Image
                                src={img.src}
                                alt="event"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                className="object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}