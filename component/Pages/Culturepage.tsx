"use client";

import Image from "next/image";

export default function Culture() {
  return (
    <main>

      {/* ================= HEADER ================= */}
      <section className="relative w-full h-[300px] flex items-center justify-center text-white">
        <Image
          src="/img/culture-4.png"
          alt="Culture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Culture
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Preserving and promoting local culture and heritage is a key aspect of our CSR philosophy. 
          Our initiatives in culture focus on:
        </p>

        <ul className="space-y-4 text-gray-700">
          <li>
            <span className="font-semibold">Cultural Programs:</span> Supporting local cultural programs, 
            festivals, and events that celebrate the rich heritage and traditions.
          </li>

          <li>
            <span className="font-semibold">Arts and Crafts:</span> Promoting traditional arts and crafts 
            by providing platforms for local artisans to showcase their work.
          </li>

          <li>
            <span className="font-semibold">Cultural Education:</span> Encouraging cultural awareness programs 
            and supporting cultural clubs and activities.
          </li>
        </ul>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">

          {["/img/culture-1.png", "/img/culture-2.png", "/img/culture-3.png"].map((img, i) => (
            <div key={i} className="relative h-[250px] overflow-hidden rounded-lg">
              <Image
                src={img}
                alt="culture"
                fill
                className="object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}