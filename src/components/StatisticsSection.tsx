import React from 'react';
import { Building2, Users, Award, MapPin } from 'lucide-react';

const StatisticsSection: React.FC = () => {
  const stats = [
    {
      icon: Building2,
      number: '25+',
      label: 'مشروع مكتمل',
      description: 'مشاريع عقارية متميزة'
    },
    {
      icon: Users,
      number: '500+',
      label: 'عميل راضي',
      description: 'ثقة وتميز في الخدمة'
    },
    {
      icon: Award,
      number: '15+',
      label: 'سنة خبرة',
      description: 'في مجال التطوير العقاري'
    },
    {
      icon: MapPin,
      number: '10+',
      label: 'موقع متميز',
      description: 'في أفضل أحياء المدينة'
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-36 md:w-72 h-36 md:h-72 bg-gradient-to-tr from-slate-100/40 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6 md:mb-8 tracking-wide">
            إنجازاتنا بالأرقام
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto px-4">
            نفخر بما حققناه من إنجازات متميزة في مجال التطوير العقاري
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="relative mb-6 md:mb-8">
                {/* Icon background circle */}
                <div className="w-16 md:w-24 h-16 md:h-24 mx-auto bg-gradient-to-br from-white to-slate-50 rounded-full flex items-center justify-center shadow-lg border border-slate-100 group-hover:scale-110 transition-all duration-500">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center">
                    <stat.icon size={20} className="text-amber-400 md:w-7 md:h-7" />
                  </div>
                </div>
                
                {/* Decorative ring */}
                <div className="absolute inset-0 w-16 md:w-24 h-16 md:h-24 mx-auto rounded-full border-2 border-amber-200/50 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-light text-slate-800 mb-2 tracking-wide">
                  {stat.number}
                </h3>
                <h4 className="text-base md:text-xl font-medium text-slate-700 mb-2">
                  {stat.label}
                </h4>
                <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed px-2">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center space-x-3 space-x-reverse">
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
            <div className="w-2 md:w-3 h-2 md:h-3 bg-amber-500 rounded-full"></div>
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;