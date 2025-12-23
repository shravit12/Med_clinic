// Hero.jsx
import React from "react";
import Heroimage from "../assets/images/doctor-hero.jpg";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="bg-blue-50 pt-28 pb-16 md:pt-32 md:pb-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div
        className="
          container mx-auto
          flex flex-col md:flex-row
          items-center justify-between
          px-6 md:px-4
          gap-10 md:gap-16
        "
      >
        {/* TEXT */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          variants={itemVariants}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight"
            variants={itemVariants}
          >
            Trusted Care for Your Health
          </motion.h1>

          <motion.p
            className="text-gray-600 text-base md:text-lg"
            variants={itemVariants}
          >
            Providing top-quality healthcare for you and your family.
          </motion.p>

          <motion.a
            href="/contact"
            className="
              inline-block
              bg-blue-600 text-white
              px-8 py-3
              rounded-xl
              hover:bg-blue-500
              transition
            "
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
          </motion.a>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="w-full md:w-1/2 mt-6 md:mt-0"
          variants={itemVariants}
        >
          <motion.img
            src={Heroimage}
            alt="Doctors"
            className="
              w-full
              rounded-2xl
              shadow-2xl shadow-black/50
            "
            whileHover={{
              y: -10,
              boxShadow: "0px 40px 80px rgba(0,0,0,0.6)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
