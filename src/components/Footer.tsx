import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import logoImage from '../logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-white border-t border-slate-100 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <img 
            src={logoImage}
            alt="لمسات" 
            className="h-12 md:h-16 w-auto drop-shadow-sm filter invert"
          />
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-slate-600">
            <a href="tel:+96895225952" className="flex items-center gap-2 md:gap-3 hover:text-amber-600 transition-colors duration-300 font-medium text-sm md:text-base">
              <Phone size={14} className="md:w-4 md:h-4" />
              <span className="text-sm md:text-base">+968 95225952</span>
            </a>
            <a href="mailto:lamasat@gmail.com" className="flex items-center gap-2 md:gap-3 hover:text-amber-600 transition-colors duration-300 font-medium text-sm md:text-base">
              <Mail size={14} className="md:w-4 md:h-4" />
              <span className="text-sm md:text-base">lamasat@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 md:gap-3 font-medium text-sm md:text-base">
              <MapPin size={14} className="md:w-4 md:h-4" />
              <span className="text-sm md:text-base">مسقط، سلطنة عمان</span>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-slate-200 pt-4 md:pt-6 w-full">
            <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-3 md:mb-4"></div>
            <p className="text-slate-500 text-xs md:text-sm font-medium">
              © 2025 لمسات للتطوير العقاري. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;