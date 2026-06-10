"use client";

import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* MAP + CONTACT */}
      <section className="w-full bg-black text-white py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full mb-10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.175787465484!2d85.81646127385297!3d20.292989712645255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909121a2b07b7%3A0xd1b39b485fbdc6ff!2sBio%20Agro%20Energy%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716268769241!5m2!1sen!2sin"
              className="w-full h-[400px] border-0 shadow-lg rounded-2xl"
              loading="lazy"
              title="Bio Agro Energy Location Map"
            ></iframe>
          </motion.div>

          {/* Top Info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 bg-white/5 p-6 mb-12 text-center"
          >
            {["Our Office", "Email Us", "Contact Us"].map((title, i) => (
              <motion.div key={i} variants={fadeUp}>
                <h5 className="bg-gradient-to-r from-yellow-200 to-cyan-400 bg-clip-text text-transparent uppercase tracking-[3px] mb-2">
                  {title}
                </h5>
                {i === 0 && <p>Bhubaneswar</p>}
                {i === 1 && <p>office@bioagroenergy.in</p>}
                {i === 2 && <p>0674 - 3500284 / 3500285</p>}
               
              </motion.div>
            ))}
          </motion.div>

          {/* Main Footer - 4 Columns */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-10 "
          >

            {/* Column 1: Corporate Office */}
            <motion.div variants={fadeUp}>
              <h5 className="bg-gradient-to-r from-yellow-200 to-cyan-400 bg-clip-text text-transparent gradient-text uppercase tracking-[3px] mb-4">
                Corporate Office
              </h5>

              <p className="text-gray-300 leading-relaxed">
                Bio Agro Energy Private Limited <br />
                N – 6/454, Nayapali, IRC Village,<br />
                3rd Floor,<br />
                Opp. Crown Hotel <br />
                Bhubaneswar-751015 <br />
                Khordha, Odisha.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 mt-6">
                {[FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="border p-2 hover:bg-white hover:text-black transition"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Sonepur - Plant Site */}
            <motion.div variants={fadeUp}>
              <h5 className="bg-gradient-to-r from-yellow-200 to-cyan-400 bg-clip-text text-transparent gradient-text uppercase tracking-[3px] mb-4">
                Sonepur - Plant Site
              </h5>

              <p className="text-gray-300">
                At: Bankbija & Saradhapali <br />
                PO: S. Kalapathar <br />
                PS: Sonepur <br />
                Dist: Sonepur <br />
                Pin: 767017 <br />
                State: Odisha
              </p>
            </motion.div>

            {/* Column 3: Bhopal - Plant Site */}
            <motion.div variants={fadeUp}>
              <h5 className="bg-gradient-to-r from-yellow-200 to-cyan-400 bg-clip-text text-transparent gradient-text uppercase tracking-[3px] mb-4">
                Bhopal - Plant Site
              </h5>

              <p className="text-gray-300">
                At: Aliganj <br />
                Tehsil: Bareli <br />
                Dist: Raisen <br />
                Pin: 464668 <br />
                State: Madhya Pradesh
              </p>
            </motion.div>

            {/* Column 4: Our Products */}
            <motion.div variants={fadeUp}>
              <h5 className="bg-gradient-to-r from-yellow-200 to-cyan-400 bg-clip-text text-transparent gradient-text uppercase tracking-[3px] mb-4">
                Our Products
              </h5>

              <div className="flex flex-col gap-2 text-gray-300">
                {["Ethanol", "DDGS", "CO2", "Fly Ash Bricks"].map((item, i) => (
                  <motion.a
                    key={i}
                    href="#service"
                    whileHover={{ x: 8 }}
                    className="hover:text-white"
                  >
                    → {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-black text-center text-gray-300 border-t border-white/10 py-4 px-6"
      >
        <p>
          © <span className="bg-gradient-to-r from-yellow-200 to-cyan-400 bg-clip-text text-transparent gradient-text">Bioagroenergy</span>. All Rights Reserved.  
          Designed by{" "}
          <a
            href="https://trackepay.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-200 to-cyan-400 bg-clip-text text-transparent gradient-text hover:underline"
          >
            Trackepay
          </a>
        </p>
      </motion.div>
    </>
  );
}