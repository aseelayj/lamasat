import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Home, Ruler, Car, Bed, Bath, Phone, Mail, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import logoImage from '../logo.png';
import { submitContact, getPropertyBySlug, type Property } from '../lib/supabase';

interface PropertyImage {
  id: number;
  url: string;
  caption: string;
}

interface PropertyFeature {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
}

interface PropertyDetailsPageProps {
  onBack: () => void;
}

const PropertyDetailsPage: React.FC<PropertyDetailsPageProps> = ({ onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Load property by slug
  React.useEffect(() => {
    const loadProperty = async () => {
      if (!slug) {
        navigate('/');
        return;
      }

      try {
        const propertyData = await getPropertyBySlug(slug);
        if (propertyData) {
          setProperty(propertyData);
        } else {
          // Property not found, redirect to home
          navigate('/');
        }
      } catch (error) {
        console.error('Error loading property:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    loadProperty();
  }, [slug, navigate]);

  // Demo property data - will be replaced with Supabase data
  const demoProperty = {
    id: 1,
    title: 'دافوديل بلس',
    subtitle: 'مشروع سكني فاخر',
    location: 'حي النرجس، الرياض',
    price: '1,250,000',
    pricePerMeter: '4,500',
    status: 'available',
    acceptsFinancing: true,
    completionDate: 'Q2 2025',
    developer: 'لمسات للتطوير العقاري',
    description: 'منزل يفيض رحابة وأنساً لعائلتك في أرقى أحياء الرياض. يتميز المشروع بتصميم عصري يجمع بين الأصالة والحداثة، مع مساحات خضراء واسعة ومرافق متكاملة تلبي احتياجات العائلة العصرية.',
    features: [
      { icon: Ruler, label: 'المساحة الإجمالية', value: '350 متر مربع' },
      { icon: Home, label: 'المساحة المبنية', value: '280 متر مربع' },
      { icon: Bed, label: 'غرف النوم', value: '4 غرف' },
      { icon: Bath, label: 'دورات المياه', value: '3 دورات' },
      { icon: Car, label: 'مواقف السيارات', value: 'موقفين' },
      { icon: Calendar, label: 'سنة الإنشاء', value: '2024' }
    ],
    amenities: [
      'حديقة خاصة',
      'مسبح مشترك',
      'صالة رياضية',
      'ملعب أطفال',
      'أمن على مدار الساعة',
      'مصعد',
      'تكييف مركزي',
      'إطلالة بانورامية'
    ],
    images: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
        caption: 'الواجهة الخارجية'
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        caption: 'غرفة المعيشة'
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
        caption: 'المطبخ'
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
        caption: 'غرفة النوم الرئيسية'
      },
      {
        id: 5,
        url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200',
        caption: 'الحديقة الخاصة'
      }
    ]
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-slate-800 mb-4"></div>
          <p className="text-slate-600">جاري تحميل العقار...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return null;
  }

  // Use actual property data or fallback to demo data
  const propertyData = property ? {
    ...demoProperty,
    title: property.title,
    subtitle: property.subtitle || demoProperty.subtitle,
    location: property.location || demoProperty.location,
    price: property.price?.toString() || demoProperty.price,
    pricePerMeter: property.price_per_meter?.toString() || demoProperty.pricePerMeter,
    status: property.status,
    acceptsFinancing: property.accepts_financing,
    description: property.description || demoProperty.description,
    features: [
      { icon: Ruler, label: 'المساحة الإجمالية', value: property.total_area ? `${property.total_area} متر مربع` : demoProperty.features[0].value },
      { icon: Home, label: 'المساحة المبنية', value: property.built_area ? `${property.built_area} متر مربع` : demoProperty.features[1].value },
      { icon: Bed, label: 'غرف النوم', value: property.bedrooms ? `${property.bedrooms} غرف` : demoProperty.features[2].value },
      { icon: Bath, label: 'دورات المياه', value: property.bathrooms ? `${property.bathrooms} دورات` : demoProperty.features[3].value },
      { icon: Car, label: 'مواقف السيارات', value: property.parking_spaces ? `${property.parking_spaces} مواقف` : demoProperty.features[4].value },
      { icon: Calendar, label: 'سنة الإنشاء', value: property.construction_year?.toString() || demoProperty.features[5].value }
    ],
    amenities: property.amenities || demoProperty.amenities,
    images: property.main_image ? [
      { id: 1, url: property.main_image, caption: 'صورة العقار' },
      ...demoProperty.images.slice(1)
    ] : demoProperty.images
  } : demoProperty;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyData.images.length) % propertyData.images.length);
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'متاح للبيع';
      case 'sold': return 'مباع';
      case 'coming-soon': return 'قريبا';
      default: return '';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-600';
      case 'sold': return 'bg-red-600';
      case 'coming-soon': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContact({
        name: contactFormData.name,
        phone: contactFormData.phone,
        email: '',
        subject: `استفسار عن عقار: ${propertyData.title}`,
        message: contactFormData.message
      });
      alert('تم إرسال استفسارك بنجاح! سنتواصل معك قريباً.');
      setContactFormData({ name: '', phone: '', message: '' });
      setShowContactForm(false);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('حدث خطأ أثناء إرسال الاستفسار. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
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
                <span className="font-medium">العودة للمشاريع</span>
              </button>
            </div>
            
            <img 
              src={logoImage}
              alt="لمسات" 
              className="h-16 w-auto filter invert"
            />
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-600 hover:text-red-600 transition-colors duration-300">
                <Heart size={20} />
              </button>
              <button className="p-2 text-slate-600 hover:text-amber-600 transition-colors duration-300">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Image Gallery */}
      <section className="relative bg-black">
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src={propertyData.images[currentImageIndex].url}
            alt={propertyData.images[currentImageIndex].caption}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={24} className="text-slate-800" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={24} className="text-slate-800" />
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {propertyData.images.length}
          </div>
          
          {/* Image Caption */}
          <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-xl">
            {propertyData.images[currentImageIndex].caption}
          </div>
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="bg-black/10 p-4">
          <div className="flex gap-3 justify-center overflow-x-auto">
            {propertyData.images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'border-amber-500 scale-110' 
                    : 'border-white/50 hover:border-white'
                }`}
              >
                <img 
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Property Header */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-slate-800 mb-3">{propertyData.title}</h1>
                  <p className="text-xl text-slate-600 mb-4">{propertyData.subtitle}</p>
                  <div className="flex items-center gap-2 text-slate-600 mb-4">
                    <MapPin size={18} />
                    <span>{propertyData.location}</span>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className={`${getStatusColor(propertyData.status)} text-white px-4 py-2 rounded-xl text-sm font-medium mb-3`}>
                    {getStatusText(propertyData.status)}
                  </div>
                  {propertyData.acceptsFinancing && (
                    <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-xl text-sm font-medium">
                      يقبل التمويل
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-end gap-6 mb-6">
                <div>
                  <p className="text-3xl font-bold text-slate-800">{propertyData.price} ريال</p>
                  <p className="text-slate-600">{propertyData.pricePerMeter} ريال/متر مربع</p>
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed text-lg">
                {propertyData.description}
              </p>
            </div>

            {/* Property Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">مواصفات العقار</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {propertyData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center">
                      <feature.icon size={20} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{feature.label}</p>
                      <p className="text-slate-600">{feature.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">المرافق والخدمات</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {propertyData.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors duration-300">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-slate-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">الموقع</h2>
              <div className="h-80 bg-slate-100 rounded-xl flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <MapPin size={48} className="mx-auto mb-4 text-slate-400" />
                  <p className="text-lg">خريطة الموقع</p>
                  <p className="text-sm">{propertyData.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Developer Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4">المطور</h3>
              <div className="text-center mb-6">
                <img 
                  src={logoImage}
                  alt="لمسات" 
                  className="h-16 w-auto mx-auto mb-4 filter invert"
                />
                <p className="font-medium text-slate-800">{demoProperty.developer}</p>
                <p className="text-slate-600 text-sm">15+ سنة خبرة في التطوير العقاري</p>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>تاريخ الإنجاز المتوقع:</span>
                  <span className="font-medium">{demoProperty.completionDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>نوع العقار:</span>
                  <span className="font-medium">فلل سكنية</span>
                </div>
                <div className="flex justify-between">
                  <span>رخصة البناء:</span>
                  <span className="font-medium text-green-600">معتمدة</span>
                </div>
              </div>
            </div>

            {/* Similar Properties */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">مشاريع مشابهة</h3>
              <div className="space-y-4">
                {[
                  { name: 'نارسس بلس', price: '1,150,000', location: 'حي الورود' },
                  { name: 'توليب بلس', price: '1,350,000', location: 'حي النزهة' },
                  { name: 'اوبال', price: '1,450,000', location: 'حي النرجس' }
                ].map((similar, index) => (
                  <div key={index} className="p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors duration-300 cursor-pointer">
                    <p className="font-medium text-slate-800 mb-1">{similar.name}</p>
                    <p className="text-sm text-slate-600 mb-2">{similar.location}</p>
                    <p className="text-amber-600 font-bold">{similar.price} ريال</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-2xl">
        <div className="container mx-auto px-4">
          {showContactForm ? (
            <form onSubmit={handleContactSubmit} className="py-6">
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input 
                    type="text" 
                    placeholder="الاسم الكامل"
                    value={contactFormData.name}
                    onChange={(e) => setContactFormData({...contactFormData, name: e.target.value})}
                    required
                    className="p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/70 focus:outline-none focus:border-amber-400"
                  />
                  <input 
                    type="tel" 
                    placeholder="رقم الهاتف"
                    value={contactFormData.phone}
                    onChange={(e) => setContactFormData({...contactFormData, phone: e.target.value})}
                    required
                    className="p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/70 focus:outline-none focus:border-amber-400"
                  />
                  <textarea 
                    placeholder="رسالتك"
                    rows={1}
                    value={contactFormData.message}
                    onChange={(e) => setContactFormData({...contactFormData, message: e.target.value})}
                    required
                    className="p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/70 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>
                <div className="flex gap-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg transition-colors duration-300 font-medium"
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="py-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
                <h3 className="text-lg font-bold">تواصل معنا</h3>
                <div className="flex flex-col md:flex-row gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-amber-400" />
                    <span>+966 95225952</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-amber-400" />
                    <span>lamasat@gmail.com</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-6 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                أطلب معلومات إضافية
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;