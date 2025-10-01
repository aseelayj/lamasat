import React from 'react';
import { ArrowLeft, Users, Award, Target, Eye } from 'lucide-react';
import logoImage from '../logo.png';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
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
            من نحن؟
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
            لمسات للتطوير العقاري - رائدة في تطوير المشاريع العقارية الفاخرة في المملكة العربية السعودية
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="مبنى لمسات" 
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">قصتنا</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              تأسست لمسات للتطوير العقاري بهدف إعادة تعريف مفهوم السكن الفاخر في المملكة. منذ أكثر من 15 عاماً، نعمل على تطوير مشاريع عقارية متميزة تجمع بين الأصالة والحداثة.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              نؤمن بأن المنزل ليس مجرد مكان للسكن، بل هو حيث تبدأ القصص وتُصنع الذكريات. لذلك نضع في كل مشروع لمسة خاصة تعكس احتياجات وتطلعات عملائنا.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center">
                <Award size={20} className="text-amber-400" />
              </div>
              <div>
                <p className="font-medium text-slate-800">جائزة التميز في التطوير العقاري</p>
                <p className="text-slate-600 text-sm">2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye size={24} className="text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">رؤيتنا</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-center">
              أن نكون الشركة الرائدة في تطوير المشاريع العقارية المبتكرة والمستدامة، ونساهم في بناء مجتمعات عصرية تواكب رؤية المملكة 2030.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target size={24} className="text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">مهمتنا</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-center">
              تطوير مشاريع عقارية متميزة بأعلى معايير الجودة والتصميم، مع التركيز على راحة العملاء وتلبية احتياجاتهم بحلول مبتكرة ومستدامة.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-12 text-white mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">قيمنا</h2>
            <p className="text-slate-300 text-lg">القيم التي نؤمن بها ونعمل من خلالها</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">الجودة</h3>
              <p className="text-slate-300">نلتزم بأعلى معايير الجودة في جميع مراحل التطوير</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">العملاء أولاً</h3>
              <p className="text-slate-300">رضا عملائنا هو هدفنا الأول والأهم</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">الابتكار</h3>
              <p className="text-slate-300">نسعى دائماً لتطوير حلول مبتكرة ومتطورة</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">فريق العمل</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            فريق من المهندسين والمطورين ذوي الخبرة الواسعة في مجال التطوير العقاري
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'أحمد محمد السعيد', position: 'المدير التنفيذي', experience: '+20 سنة خبرة' },
              { name: 'فاطمة عبد الله', position: 'مدير المشاريع', experience: '+15 سنة خبرة' },
              { name: 'محمد عبد العزيز', position: 'مدير التطوير', experience: '+18 سنة خبرة' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                <p className="text-slate-600 mb-2">{member.position}</p>
                <p className="text-sm text-amber-600 font-medium">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;