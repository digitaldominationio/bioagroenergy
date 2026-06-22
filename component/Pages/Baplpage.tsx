"use client";

import Image from "next/image";

export default function CommunityDevelopment() {
  return (
    <main>

      {/* ================= HEADER ================= */}
     <section className="relative w-full h-[400px] flex items-center justify-center">
             <Image
               src="/img/bricks-4.png"
               alt="BAEPL"
               fill
               sizes="100vw"
               className="object-cover"
             />
     
             {/* Overlay */}
             <div className="absolute inset-0 bg-black/60"></div>
     
             {/* Title */}
             <h1 className="relative text-white text-4xl md:text-7xl font-bold">
               BAEPL
             </h1>
           </section>


    </main>
  );
}