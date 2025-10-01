import React, { useState } from 'react';
import { ArrowLeft, Send, User, Phone, Mail, Home, MapPin, Calculator } from 'lucide-react';
import logoImage from '../logo.png';
import { submitInterestRegistration } from '../lib/supabase';

interface RegisterInterestPageProps {
  onBack: () => void;
}

const RegisterInterestPage: React.FC<RegisterInterestPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property_type: '',
    budget: '',
    location: '',
    bedrooms: '',
    timeframe: '',
    financing_needed: '',
    additional_info: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitInterestRegistration(formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting interest registration:', error);
      alert('حدث خطأ أثناء تسجيل الاهتمام. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-slate-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={32} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold text-slate-800 mb-4">شكراً لك!</h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                تم تسجيل اهتمامك بنجاح. سيتواصل معك أحد مختصينا خلال 24 ساعة.
              </p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={onBack}
                  className="px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl hover:from-slate-700 hover:to-slate-600 transition-all duration-300 font-medium"
                >
                  العودة للرئيسية
                </button>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-xl hover:bg-slate-50 transition-all duration-300 font-medium"
                >
                  تسجيل اهتمام آخر
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            سجل اهتمامك
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
            أخبرنا عن العقار الذي تبحث عنه وسنساعدك في العثور على الخيار المثالي
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">المعلومات الشخصية</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute right-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-3 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      رقم الهاتف *
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute right-3 top-3 text-slate-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-3 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="أدخل رقم الهاتف"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      البريد الإلكتروني
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute right-3 top-3 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-3 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Preferences */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">تفضيلات العقار</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-slate-700 mb-2">
                      نوع العقار *
                    </label>
                    <div className="relative">
                      <Home size={18} className="absolute right-3 top-3 text-slate-400" />
                      <select
                        id="propertyType"
                        name="property_type"
                        value={formData.property_type}
                        onChange={handleChange}
                        required
                        className="w-full pl-3 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">اختر نوع العقار</option>
                        <option value="villa">فيلا</option>
                        <option value="apartment">شقة سكنية</option>
                        <option value="duplex">دوبلكس</option>
                        <option value="townhouse">تاون هاوس</option>
                        <option value="commercial">عقار تجاري</option>
                        <option value="office">مكتب إداري</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                      الميزانية المتوقعة *
                    </label>
                    <div className="relative">
                      <Calculator size={18} className="absolute right-3 top-3 text-slate-400" />
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full pl-3 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">اختر الميزانية</option>
                        <option value="500k-1m">500,000 - 1,000,000 ريال</option>
                        <option value="1m-1.5m">1,000,000 - 1,500,000 ريال</option>
                        <option value="1.5m-2m">1,500,000 - 2,000,000 ريال</option>
                        <option value="2m-3m">2,000,000 - 3,000,000 ريال</option>
                        <option value="3m+">أكثر من 3,000,000 ريال</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                      المنطقة المفضلة
                    </label>
                    <div className="relative">
                      <MapPin size={18} className="absolute right-3 top-3 text-slate-400" />
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full pl-3 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">اختر المنطقة</option>
                        <option value="narjis">حي النرجس</option>
                        <option value="nozha">حي النزهة</option>
                        <option value="wurud">حي الورود</option>
                        <option value="yasmin">حي الياسمين</option>
                        <option value="other">منطقة أخرى</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-slate-700 mb-2">
                      عدد غرف النوم
                    </label>
                    <select
                      id="bedrooms"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">اختر العدد</option>
                      <option value="1">غرفة واحدة</option>
                      <option value="2">غرفتين</option>
                      <option value="3">ثلاث غرف</option>
                      <option value="4">أربع غرف</option>
                      <option value="5+">خمس غرف أو أكثر</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeframe" className="block text-sm font-medium text-slate-700 mb-2">
                      الإطار الزمني للشراء
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">اختر الإطار الزمني</option>
                      <option value="immediate">فوري (خلال شهر)</option>
                      <option value="3months">خلال 3 أشهر</option>
                      <option value="6months">خلال 6 أشهر</option>
                      <option value="1year">خلال سنة</option>
                      <option value="exploring">أستكشف الخيارات</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="financingNeeded" className="block text-sm font-medium text-slate-700 mb-2">
                      هل تحتاج تمويل؟
                    </label>
                    <select
                      id="financingNeeded"
                      name="financing_needed"
                      value={formData.financing_needed}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">اختر الإجابة</option>
                      <option value="yes">نعم، أحتاج تمويل</option>
                      <option value="no">لا، دفع كاش</option>
                      <option value="maybe">ربما</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-slate-700 mb-2">
                  معلومات إضافية أو متطلبات خاصة
                </label>
                <textarea
                  id="additionalInfo"
                  name="additional_info"
                  value={formData.additional_info}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  placeholder="اكتب أي متطلبات خاصة أو معلومات إضافية تساعدنا في خدمتك بشكل أفضل..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-gradient-to-r from-slate-800 to-slate-700 text-white py-4 px-12 rounded-xl hover:from-slate-700 hover:to-slate-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'جاري التسجيل...' : 'سجل اهتمامك الآن'}</span>
                </button>
                <p className="text-sm text-slate-500 mt-4">
                  سيتم التواصل معك خلال 24 ساعة من تسجيل اهتمامك
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterInterestPage;