import React, { useState } from 'react';
import { X, Send, User, Phone, Home } from 'lucide-react';
import { submitQuickInterest } from '../lib/supabase';

interface QuickInterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFullForm: () => void;
}

const QuickInterestModal: React.FC<QuickInterestModalProps> = ({ isOpen, onClose, onFullForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitQuickInterest({
        name: formData.name,
        phone: formData.phone,
        property_type: formData.propertyType
      });
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({ name: '', phone: '', propertyType: '' });
      }, 2000);
    } catch (error) {
      console.error('Error submitting quick interest:', error);
      alert('حدث خطأ أثناء تسجيل الاهتمام. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">تم الإرسال بنجاح!</h3>
          <p className="text-slate-600">سنتواصل معك قريباً</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 hover:bg-slate-100 rounded-lg transition-colors duration-300"
        >
          <X size={20} className="text-slate-600" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">سجل اهتمامك السريع</h2>
          <p className="text-slate-600">أدخل بياناتك وسنتواصل معك</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <User size={18} className="absolute right-3 top-3 text-slate-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-3 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="الاسم الكامل"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Phone size={18} className="absolute right-3 top-3 text-slate-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-3 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="رقم الهاتف"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Home size={18} className="absolute right-3 top-3 text-slate-400" />
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
                className="w-full pl-3 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">نوع العقار المطلوب</option>
                <option value="villa">فيلا</option>
                <option value="apartment">شقة سكنية</option>
                <option value="duplex">دوبلكس</option>
                <option value="commercial">عقار تجاري</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-slate-800 to-slate-700 text-white py-3 rounded-lg hover:from-slate-700 hover:to-slate-600 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال سريع'}
            </button>
            <button
              type="button"
              onClick={onFullForm}
              disabled={isSubmitting}
              className="flex-1 bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 font-medium"
            >
              النموذج الكامل
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuickInterestModal;