import React, { useState } from 'react';
import { ArrowLeft, Calculator, TrendingUp, FileText, Users, Award, CheckCircle } from 'lucide-react';
import logoImage from '../logo.png';

interface ConsultancyPageProps {
  onBack: () => void;
}

const ConsultancyPage: React.FC<ConsultancyPageProps> = ({ onBack }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const consultancyServices = [
    {
      id: 'investment',
      icon: TrendingUp,
      title: 'استشارات الاستثمار العقاري',
      description: 'نساعدك في اتخاذ قرارات استثمارية ذكية في السوق العقاري',
      price: 'من 5,000 ريال',
      duration: '2-4 أسابيع',
      features: [
        'تحليل السوق العقاري',
        'دراسة الفرص الاستثمارية',
        'تقييم المخاطر والعوائد',
        'خطة استثمارية مخصصة',
        'متابعة دورية للاستثمارات'
      ]
    },
    {
      id: 'valuation',
      icon: Calculator,
      title: 'التقييم العقاري',
      description: 'تقييم دقيق ومهني للعقارات بناءً على معايير السوق الحالية',
      price: 'من 2,000 ريال',
      duration: '1-2 أسبوع',
      features: [
        'تقييم فوري للعقار',
        'تقرير مفصل بالقيمة',
        'مقارنة مع العقارات المشابهة',
        'تحليل اتجاهات السوق',
        'شهادة تقييم معتمدة'
      ]
    },
    {
      id: 'feasibility',
      icon: FileText,
      title: 'دراسات الجدوى',
      description: 'دراسات شاملة لتقييم جدوى المشاريع العقارية قبل التنفيذ',
      price: 'من 10,000 ريال',
      duration: '3-6 أسابيع',
      features: [
        'تحليل السوق والمنافسين',
        'دراسة التكاليف والعوائد',
        'تقييم المخاطر',
        'خطة مالية مفصلة',
        'توصيات تنفيذية'
      ]
    },
    {
      id: 'management',
      icon: Users,
      title: 'إدارة الممتلكات',
      description: 'إدارة شاملة لممتلكاتك العقارية لضمان أفضل عائد',
      price: 'من 3,000 ريال/شهرياً',
      duration: 'خدمة مستمرة',
      features: [
        'إدارة عقود الإيجار',
        'صيانة دورية للعقارات',
        'تحصيل الإيجارات',
        'تسويق الوحدات الشاغرة',
        'تقارير شهرية مفصلة'
      ]
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
            الاستشارات العقارية
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
            احصل على استشارات عقارية متخصصة من فريق خبراء لاتخاذ قرارات استثمارية صحيحة
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">لماذا تختار استشاراتنا؟</h2>
            <p className="text-slate-300 text-lg">خبرة +15 سنة في السوق العقاري السعودي</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">خبرة واسعة</h3>
              <p className="text-slate-300">أكثر من 15 عاماً في السوق العقاري</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">فريق متخصص</h3>
              <p className="text-slate-300">خبراء معتمدون في التقييم والاستشارات</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">نتائج مضمونة</h3>
              <p className="text-slate-300">+500 عميل راضي عن خدماتنا</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {consultancyServices.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-8 shadow-lg border transition-all duration-300 cursor-pointer ${
                selectedService === service.id 
                  ? 'border-amber-500 shadow-xl' 
                  : 'border-slate-100 hover:shadow-xl'
              }`}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon size={24} className="text-amber-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm font-medium">
                      {service.price}
                    </div>
                    <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm">
                      {service.duration}
                    </div>
                  </div>
                  
                  {selectedService === service.id && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h4 className="font-bold text-slate-800 mb-4">ما نقدمه:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <CheckCircle size={16} className="text-amber-500 flex-shrink-0" />
                            <span className="text-slate-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="mt-6 w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-medium">
                        اطلب هذه الخدمة
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-12 shadow-lg border border-slate-100 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">كيف نعمل؟</h2>
            <p className="text-slate-600 text-lg">خطوات بسيطة للحصول على استشارة متخصصة</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'التواصل الأولي', description: 'تواصل معنا وحدد نوع الاستشارة المطلوبة' },
              { step: '02', title: 'تحليل الحالة', description: 'دراسة وتحليل وضعك العقاري الحالي' },
              { step: '03', title: 'إعداد التقرير', description: 'إعداد تقرير مفصل بالتوصيات' },
              { step: '04', title: 'المتابعة', description: 'متابعة تنفيذ التوصيات وتقديم الدعم' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-amber-400">{process.step}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{process.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-slate-50 to-amber-50/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            ابدأ رحلة الاستثمار الناجح اليوم
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            احجز استشارة مجانية مدتها 30 دقيقة مع أحد خبرائنا
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+96895225952" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl hover:from-slate-700 hover:to-slate-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>احجز استشارة مجانية</span>
            </a>
            <a 
              href="mailto:lamasat@gmail.com" 
              className="inline-flex items-center px-8 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-xl hover:bg-slate-50 hover:border-amber-500 hover:text-amber-600 transition-all duration-300 font-medium"
            >
              <span>اطلب عرض سعر</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyPage;