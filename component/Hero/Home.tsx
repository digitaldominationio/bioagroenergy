"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const slides = [
  {
    image: "/img/carousel.jpeg",
    title: "Bio Agro Energy Pvt. Ltd.",
    subtitle: "Powering Progress, Fueling the Future!",
  },
  {
    image: "/img/carousel-1.png",
    title: "Leading the way in Ethanol Manufacturing Technology.",
    subtitle: "Ethanol Plant",
  },
  {
    image: "/img/carousel-2.jpg",
    title: "Innovative Ethanol Solutions for a Better Tomorrow.",
    subtitle: "Ethanol Plant",
  },
];

// Updated services with IDs for modal tracking
const services = [
  {
    id: "ethanol",
    title: "Ethanol",
    image: "/img/product-1.png",
  },
  {
    id: "ddgs",
    title: "DDGS",
    image: "/img/product-2.jpg",
  },
  {
    id: "bricks",
    title: "Bricks",
    image: "/img/product-3.jpg",
  },
  {
    id: "co2",
    title: "CO2",
    image: "/img/product-4.jpg",
  },
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
const csrNote = `<div class="mt-5 pt-4 border-t border-gray-200 text-gray-700 bg-gray-50 p-4 rounded-lg">
  <h4 class="font-bold text-green-800 flex items-center gap-2"><span class="text-xl">🤝</span> Community Commitment – Sonepur District, Odisha</h4>
  <p class="text-sm mt-1">Our decision to establish the ethanol plant in Sonepur (despite lack of existing industries) is driven by strategic advantage and dedication to inclusive growth. Through CSR initiatives, we invest in education, healthcare, infrastructure, and women's empowerment. Contributions include: mobile health clinics, skill development for rural youth, solar lighting in villages, and support for local schools. Our presence creates a sustainable model for economic development, directly benefiting farmers, small businesses, and the wider community.</p>
</div>`;

const partners = [
  "/img/invister-1.png",
  "/img/invister-2.png",
  "/img/invister-3.png",
  "/img/invister-4.png",
];

function Logo({ src }: { src: string }) {
  return (
    <motion.div
      className="flex-shrink-0 w-40 h-32 md:w-80 md:h-60 relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={src}
        alt="Partner Logo"
        fill
        className="object-contain p-4 transition-all duration-300"
      />
    </motion.div>
  );
}

const images = [
  "/img/gallery-1.jpg",
  "/img/gallery-2.jpg",
  "/img/gallery-3.jpg",
  "/img/gallery-4.jpg",
  "/img/gallery-5.jpg",
  "/img/gallery-6.jpg",
  "/img/gallery-7.jpg",
  "/img/gallery-8.jpg",
  "/img/gallery-9.jpg",
  "/img/gallery-10.jpg",
  "/img/gallery-11.jpg",
  "/img/gallery-12.jpg",
  "/img/gallery-13.jpg",
  "/img/gallery-14.jpg",
  "/img/gallery-15.jpg",
  "/img/gallery-16.jpg",
  "/img/gallery-17.jpg",
];

const team = [
  {
    name: "Siba Narayan Samantaray",
    role: "Managing Director",
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

// Staggered word animation component
function AnimatedWords({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay }
    }
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotate: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block mr-[0.25em] py-[2px]">
          <motion.span
            className="inline-block"
            variants={child}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// Staggered character animation component
function AnimatedLetters({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: delay }
    }
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 120
      }
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 120
      }
    }
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // State for service modal
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  // Auto Scroll for gallery
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Manual Controls for gallery
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  // Auto slide for hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Auto slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[testimonialIndex];

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => setIsOpen(!isOpen);

  // Function to open service modal
  const openServiceModal = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsServiceModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Function to close service modal
  const closeServiceModal = () => {
    setIsServiceModalOpen(false);
    document.body.style.overflow = "unset";
    setTimeout(() => setSelectedService(null), 300);
  };

  // Handle escape key for service modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isServiceModalOpen) {
        closeServiceModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isServiceModalOpen]);

  const selectedServiceDetail = selectedService ? serviceDetails[selectedService] : null;

  return (
    <>
      {/* Hero Section - Split layout with text on left and image on right */}
      <section className="relative w-full h-[65vh] md:h-[80vh] min-h-[500px] md:min-h-[650px] overflow-hidden bg-white mt-10 ">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === current && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <div className="w-full h-full flex flex-col md:flex-row">
                  {/* Left Side - Text Content */}
                  <div className="w-full md:w-[40%] h-[40%] md:h-full bg-white flex flex-col items-center md:items-start justify-center text-center md:text-left px-6 md:px-12 lg:px-16">
                    <div className="max-w-xl">
                      <div className="mb-4 flex justify-center md:justify-start">
                        <AnimatedLetters
                          text={slide.subtitle}
                          delay={0.15}
                          className="text-amber-500 text-xs sm:text-sm md:text-base uppercase tracking-[4px] sm:tracking-[5px] font-semibold"
                        />
                      </div>
                      
                      <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight select-none">
                        <AnimatedWords
                          text={slide.title}
                          delay={0.35}
                          className="justify-center md:justify-start"
                        />
                      </h1>
                      
                      {/* <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                      >
                        <button className="mt-6 sm:mt-8 inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold text-sm sm:text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer">
                          Learn More →
                        </button>
                      </motion.div> */}
                    </div>
                  </div>

                  {/* Right Side - Image Box */}
                  <div className="w-full md:w-[60%] h-[60%] md:h-full bg-white flex items-center justify-center p-4 md:p-8 lg:p-12">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.45, duration: 0.8, type: "spring", stiffness: 80 }}
                      className="relative w-full h-full rounded-2xl md:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-4 md:border-8 border-white bg-white aspect-[4/3] md:aspect-auto max-h-[45vh] md:max-h-[75dvh]"
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 90vw, 45vw"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>



        {/* Dot Indicators */}
        <div className="absolute bottom-5 sm:bottom-6 left-0 right-0 z-20 flex justify-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i 
                  ? "bg-amber-500 w-7 sm:w-8" 
                  : "bg-gray-400 w-3 sm:w-4 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full py-12 md:py-20 bg-gray-100 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src="/img/about.jpg"
                alt="About Bio Agro Energy"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover w-full h-auto"
              />
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">About Us</h2>

              <p className="text-black leading-relaxed font-normal text-[15px] md:text-base">
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
                onClick={toggleModal}
                className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
              >
                Read More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/40"
            onClick={toggleModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleModal}
                className="absolute top-4 right-5 text-gray-500 hover:text-gray-800 text-3xl font-bold z-10"
              >
                ×
              </button>
              <div className="p-6 pt-4">
                <h2 className="text-3xl font-bold mb-4">About</h2>
                <div className="w-full mb-5">
                  <Image
                    src="/img/about.jpg"
                    alt="Groundbreaking Ceremony"
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="text-gray-700 text-sm leading-relaxed space-y-3 overflow-hidden font-serif">
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
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services Section */}
      <section id="service" className="w-full py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h6 className="uppercase text-green-500 tracking-[3px] mb-2">
              Services
            </h6>
            <h1 className="text-3xl md:text-5xl font-bold">What We Do.</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Sustainable bioenergy solutions driving India's green future & rural prosperity
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {services.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
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
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-[0.98]"
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="bg-gray-200 text-center py-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {isServiceModalOpen && selectedServiceDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 transition-opacity duration-300"
              onClick={closeServiceModal}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-white px-6 pt-6 pb-3 border-b flex justify-between items-center z-10">
                <h2 id="service-modal-title" className="text-2xl md:text-3xl font-bold text-green-700">
                  {selectedServiceDetail.title}
                </h2>
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
                <div className="w-full mb-6 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/img/carousel-1.jpg"
                    alt="Bricks Product"
                    width={1200}
                    height={600}
                    className="w-full h-[220px] md:h-[420px] object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div
                  className="text-gray-700 space-y-5"
                  dangerouslySetInnerHTML={{ __html: selectedServiceDetail.description }}
                />
                <div dangerouslySetInnerHTML={{ __html: csrNote }} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ethanol Process Section */}
      <section id="ethanol-process" className="w-full py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              Ethanol Manufacturing Process
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-[300px] md:h-[1000px] relative rounded-xl overflow-hidden"
          >
            <Image
              src="/img/distillery.jpg"
              alt="process"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-10 md:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12"
          >
            Our Partners
          </motion.h2>

          <div className="relative overflow-hidden w-full">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="flex gap-4 md:gap-8 lg:gap-12 items-center px-2 md:px-6">
                {partners.map((logo, i) => (
                  <Logo key={`first-${i}`} src={logo} />
                ))}
              </div>
              <div className="flex gap-4 md:gap-8 lg:gap-12 items-center px-2 md:px-6">
                {partners.map((logo, i) => (
                  <Logo key={`second-${i}`} src={logo} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section id="project" className="w-full py-24 relative text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/img/carousel-2.jpg"
            alt="bg"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h6 className="uppercase text-green-400 tracking-[3px] mb-3">
              Project
            </h6>
            <h1 className="text-3xl md:text-5xl font-bold">
              Project Photo Gallery
            </h1>
          </motion.div>
          <div className="flex justify-end gap-4 mb-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
            >
              <ChevronLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollRight}
              className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
            >
              <ChevronRight />
            </motion.button>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="min-w-[280px] h-[200px] relative rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelected(src)}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={src}
                  alt="gallery"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-3xl">+</span>
                </div>
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                onClick={() => setSelected(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative w-[90%] h-[80%]"
                >
                  <Image
                    src={selected}
                    alt="preview"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-20"
          >
            <p className="text-green-500 tracking-[4px] text-sm uppercase">Team</p>
            <h2 className="text-3xl md:text-5xl font-bold">Meet The Directors</h2>
            <div className="w-20 h-[2px] bg-blue-500 mx-auto mt-4"></div>
          </motion.div>
          <div className="space-y-32">
            {team.map((member, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={member.name} className="relative flex flex-col md:flex-row items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={`relative w-[280px] h-[320px] z-10 shadow-xl ${isEven ? "md:translate-x-20" : "md:-translate-x-20"}`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-sm"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={`z-20 bg-[#dfe3ea] w-[280px] p-8 text-center shadow-lg border-t-4 border-blue-500
                    md:absolute md:top-1/2 md:-translate-y-1/2 
                    ${isEven ? "md:left-[15%]" : "md:right-[15%]"}
                    mt-[-40px] md:mt-0`}
                  >
                    <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                    <p className="text-blue-600 italic text-sm mb-3">{member.role}</p>
                    <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                      {member.desc}
                    </p>
                    <div className="flex justify-center gap-3">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="border border-blue-500 p-2 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer">
                        <FaTwitter size={14} />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="border border-blue-500 p-2 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer">
                        <FaFacebook size={14} />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="border border-blue-500 p-2 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer">
                        <FaLinkedin size={14} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="w-full py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
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
            <div className="relative w-40 h-[2px] bg-blue-950 mx-auto mt-4">
              <div className="absolute top-[4px] left-1/4 right-1/4 h-[2px] bg-blue-950 rounded-full"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-950 -translate-x-1/2"></div>

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

      {/* Testimonial Section */}
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
                className={`w-3 h-3 rounded-full transition ${i === testimonialIndex ? "bg-green-500" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add Tailwind animation styles */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}