import React from 'react';
import logoImage from '../logo.png';

const DiscoverSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Right Column - Logo */}
          <div className="text-center order-2 md:order-1 px-4">
            <img 
              src={logoImage}
              alt="لمسات" 
              className="mx-auto max-w-[200px] md:max-w-[280px] w-full h-auto drop-shadow-lg filter invert"
            />
          </div>
          
          {/* Left Column - Text Content */}
          <div className="text-right order-1 md:order-2 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6 md:mb-8 leading-tight tracking-wide">
              اكتشف معنا
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 font-light leading-relaxed">
              عالماً جديداً من الراحة والرفاهية.
            </p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mt-4 md:mt-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;