import React from 'react';

interface CTASectionProps {
  onRegisterClick?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onRegisterClick }) => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6 md:mb-8 tracking-wide">
          سجل اهتمامك
        </h2>
        <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 md:mb-12"></div>
        <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed mb-8 md:mb-12 max-w-4xl mx-auto px-4">
          نقدم لك حلول سكنية مبتكرة تواكب تطلعاتك وتلبي احتياجاتك بأعلى معايير الجودة والرفاهية.
        </p>
        <button 
          onClick={onRegisterClick}
          className="inline-flex items-center px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl hover:from-slate-700 hover:to-slate-600 transition-all duration-300 font-medium text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <span>من هنا</span>
          <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 md:mr-3"></div>
        </button>
      </div>
    </section>
  );
};

export default CTASection;