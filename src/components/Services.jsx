// Services.jsx
import React from "react";
import { HeartIcon, ToothIcon, EyeIcon, TeddyIcon } from "./Icons"; // You can create simple SVG icons

const services = [
  { icon: <HeartIcon />, title: "Cardiology", desc: "Heart care & treatment" },
  { icon: <ToothIcon />, title: "Dental Care", desc: "Advanced dental services" },
  { icon: <EyeIcon />, title: "Eye Care", desc: "Vision & eye health" },
  { icon: <TeddyIcon />, title: "Pediatrics", desc: "Child health & wellness" },
];

const Services = () => {
  return (
 <section
  id="services"
  className="relative py-16 overflow-hidden
             bg-gradient-to-b
             from-black/95
             via-black/80
             to-blue-50"
>
  {/* CONTENT */}
  <div className="container mx-auto text-center relative z-10">
    <h2 className="text-3xl font-bold mb-12 text-gray-100">
      Our Services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {services.map((service, i) => (
        <div
          key={i}
          className="
            p-6
            bg-white
            rounded-2xl
            shadow-xl
            hover:shadow-2xl
            transition
          "
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Services;
