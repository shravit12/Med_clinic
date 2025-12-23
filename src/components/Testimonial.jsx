import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Patient",
    review:
      "Doctor was very polite and explained everything clearly. Clinic is clean and well managed.",
    rating: 5,
  },
  {
    name: "Vikram Sharma",
    role: "Patient",
    review:
      "Very smooth appointment process. Doctor listened patiently and guided well.",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    role: "Patient",
    review:
      "Clinic staff is cooperative and environment feels hygienic and safe.",
    rating: 4,
  },
  {
    name: "Simran Kaur",
    role: "Patient",
    review:
      "Best experience so far. Treatment was effective and consultation was clear.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Patient",
    review:
      "Highly recommended clinic. Professional doctor and friendly staff.",
    rating: 5,
  },
];

const cardFloat = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14"
        >
          Trusted by Our Patients
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={cardFloat}
              animate="animate"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/80 backdrop-blur rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              {/* Quote */}
              <span className="absolute top-6 right-6 text-5xl text-blue-100 font-serif">
                “
              </span>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.review}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Name */}
              <div>
                <h4 className="font-semibold text-gray-800">
                  {item.name}
                </h4>
                <span className="text-sm text-gray-500">
                  {item.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
