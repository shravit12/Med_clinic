// Footer.jsx
import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-900 via-gray-900 to-gray-900 text-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Clinic Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Med Clinic
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Providing trusted healthcare services with experienced doctors,
              modern facilities, and patient-first care.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span>123 Health St, Chandigarh</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span>info@clinicdemo.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © 2025 Med Clinic. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
