// About.jsx
import React from "react";
import Clinic from '../assets/images/clinic-image.jpg'
const About = () => (
  <section id="about" className="py-16 bg-gradient-to-b
             from-blue-50
             via-blue-50
             to-gray-800">
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
      <img src={Clinic} alt="Doctor" className="w-full md:w-1/2 rounded-lg" />
      <div>
        <h2 className="text-3xl font-bold mb-4">About Our Clinic</h2>
        <p className="text-gray-100 mb-2 tracking-wider leading-normal lg:text-gray-600">
          Experienced doctors and modern facilities to care for your needs.
        </p>
      </div>
    </div>
  </section>
);

export default About;
