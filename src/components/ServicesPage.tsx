import React from 'react';
import { ArrowLeft, Home, Building2, Wrench, HeadphonesIcon, MapPin, Calculator } from 'lucide-react';
import logoImage from '../logo.png';

interface ServicesPageProps {
  onBack: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack }) => {
  const services = [
    {
      icon: Home,
      title: 'التطوير السكني',
      description: 'تطوير المشاريع السكنية الفاخرة بتصاميم عصرية ومواصفات عالية الجودة.',
      features: ['فلل فاخرة', 'شقق سكنية', 'مجمعات سكنية', 'وحدات دوبلكس']
    },
    {
      icon: Building2,
      title: 'التطوير التجاري',
      description: 'إنشاء المجمعات التجارية والمكاتب الإدارية بمواقع استراتيجية مميزة.',
      features: ['أبراج مكتبية', 'مجمعات تجارية', 'مراكز التسوق', 'مساحات مكتبية']
    },
    {
      icon: Wrench,
      title: 'إدارة المشاريع',
      description: 'إدارة شاملة للمشاريع من التخطيط إلى التسليم مع ضمان الجودة والمواعيد.',
      features: ['التخطيط والتصميم', 'الإشراف على التنفيذ', 'مراقبة الجودة', 'إدارة الموردين']
    },
    {
      icon: Calculator,
      title: 'الاستشارات المالية',
      description: 'تقديم استشارات مالية متخصصة لاختيار أفضل الحلول التمويلية المناسبة.',
      features: ['حلول التمويل', 'التقييم العقاري', 'دراسات الجدوى', 'الاستثمار العقاري']
    },
    {
      icon: HeadphonesIcon,
      title: 'خدمة العملاء',
      description: 'فريق متخصص لخدمة العملاء متاح على مدار الساعة لتلبية جميع الاستفسارات.',
      features: ['دعم على مدار الساعة', 'متابعة ما بعد البيع', 'خدمات الصيانة', 'الضمانات']
    },
    {
      icon: MapPin,
      title: 'اختيار المواقع',
      description: 'دراسة وتحليل المواقع لاختيار أفضل الأماكن الاستراتيجية للمشاريع.',
      features: ['دراسة السوق', 'تحليل المواقع', 'تقييم الفرص', 'التخطيط الحضري']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button 
                onClick={onBack}
                className="flex items-center gap-2 text-slate-700 hover:text-amber-600 transition-colors duration-300"
              >
                <ArrowLeft size={20} className="transform scale-x-[-1]" />
                <span className="font-medium">العودة للرئيسية</span>
              </button>
            </div>
            
            <img 
              src={logoImage}
              alt="لمسات" 
              className="h-12 w-auto filter invert"
            />
            
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-8 tracking-wide">
            خدماتنا
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
            نقدم مجموعة شاملة من الخدمات العقارية المتخصصة لتلبية جميع احتياجاتكم
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon size={24} className="text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-6 text-center">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">كيف نعمل؟</h2>
            <p className="text-slate-300 text-lg">خطوات واضحة ومنظمة لضمان نجاح مشروعك</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'الاستشارة', description: 'فهم احتياجاتكم ووضع الخطة المناسبة' },
              { step: '02', title: 'التصميم', description: 'تصميم المشروع وفقاً لمتطلباتكم' },
              { step: '03', title: 'التنفيذ', description: 'تنفيذ المشروع بأعلى معايير الجودة' },
              { step: '04', title: 'التسليم', description: 'تسليم المشروع في الموعد المحدد' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{process.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            هل تريد معرفة المزيد؟
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية حول مشروعك القادم
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+96895225952" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl hover:from-slate-700 hover:to-slate-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>اتصل بنا الآن</span>
            </a>
            <a 
              href="mailto:lamasat@gmail.com" 
              className="inline-flex items-center px-8 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-xl hover:bg-slate-50 hover:border-amber-500 hover:text-amber-600 transition-all duration-300 font-medium"
            >
              <span>راسلنا عبر الإيميل</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;