// pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-b from-black/95 to-blue-900 pt-32 pb-20"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Book an Appointment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* FORM */}
          <div className="bg-white/95 rounded-2xl p-8 shadow-2xl">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg"
              />
              <select className="w-full p-3 border rounded-lg">
                <option>Select Service</option>
                <option>Cardiology</option>
                <option>Dental Care</option>
                <option>Eye Care</option>
                <option>Pediatrics</option>
              </select>
              <input
                type="date"
                className="w-full p-3 border rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-500 transition"
              >
                Submit Appointment
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="text-white space-y-6">
            <h3 className="text-2xl font-semibold">
              Contact Information
            </h3>
            <p>📍 Chandigarh, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ clinic@example.com</p>

            <div className="rounded-xl overflow-hidden shadow-xl">
              <iframe
                title="Clinic Location"
                className="w-full h-64 border-0"
                loading="lazy"
                src="https://maps.google.com/maps?q=Chandigarh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
