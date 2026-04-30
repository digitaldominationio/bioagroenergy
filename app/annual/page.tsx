import React from 'react'
import Image from "next/image";

function page() {
  return (
    <>
     <section className="relative w-full h-[400px] flex items-center justify-center">
            <Image
              src="/img/bricks-4.png"
              alt="Compliance"
              fill
              className="object-cover"
            />
    
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
    
            {/* Title */}
             <h1 className="relative text-white text-4xl md:text-7xl font-bold heading-1">
         ANNUAL ENVIRONMENTAL
        </h1>
           
          </section>
    </>
  )
}

export default page