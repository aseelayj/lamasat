import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import logoImage from '../logo.png';
import { submitContact } from '../lib/supabase';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContact(formData);
      alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
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
            تواصل معنا
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا وسنكون سعداء للإجابة على جميع استفساراتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-8">معلومات التواصل</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">الهاتف</h3>
                    <p className="text-slate-600">+968 95225952</p>
                    <p className="text-slate-500 text-sm">متاح من 8 صباحاً إلى 8 مساءً</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">البريد الإلكتروني</h3>
                    <p className="text-slate-600">lamasat@gmail.com</p>
                    <p className="text-slate-500 text-sm">نرد خلال 24 ساعة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">العنوان</h3>
                    <p className="text-slate-600">مسقط، سلطنة عمان</p>
                    <p className="text-slate-500 text-sm">المكتب الرئيسي</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">ساعات العمل</h3>
                    <p className="text-slate-600">الأحد - الخميس: 8:00 ص - 8:00 م</p>
                    <p className="text-slate-600">الجمعة - السبت: 2:00 م - 8:00 م</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="tel:+96895225952"
                className="bg-gradient-to-br from-slate-800 to-slate-700 text-white p-6 rounded-xl hover:from-slate-700 hover:to-slate-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Phone size={24} className="mx-auto mb-3 text-amber-400" />
                <p className="font-medium">اتصل الآن</p>
              </a>
              <a 
                href="mailto:lamasat@gmail.com"
                className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Mail size={24} className="mx-auto mb-3" />
                <p className="font-medium">راسلنا</p>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">أرسل لنا رسالة</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
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
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  البريد الإلكتروني *
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute right-3 top-3 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-3 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  موضوع الرسالة
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">اختر موضوع الرسالة</option>
                  <option value="استفسار عام">استفسار عام</option>
                  <option value="استفسار عن مشروع">استفسار عن مشروع</option>
                  <option value="طلب استشارة">طلب استشارة</option>
                  <option value="خدمة ما بعد البيع">خدمة ما بعد البيع</option>
                  <option value="شراكات">شراكات</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  الرسالة *
                </label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute right-3 top-3 text-slate-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-3 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white py-4 px-6 rounded-lg hover:from-slate-700 hover:to-slate-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">موقعنا</h2>
          <div className="h-80 bg-slate-100 rounded-xl flex items-center justify-center">
            <div className="text-center text-slate-500">
              <MapPin size={48} className="mx-auto mb-4 text-slate-400" />
              <p className="text-lg">خريطة الموقع</p>
              <p className="text-sm">مسقط، سلطنة عمان</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;