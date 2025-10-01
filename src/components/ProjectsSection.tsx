import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProperties, getPropertyBySlug, type Property } from '../lib/supabase';
import { getPropertySlugMapping } from '../utils/slug';

interface ProjectCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  location?: string;
  status: 'available' | 'sold' | 'coming-soon';
  acceptsFinancing: boolean;
  image: string;
}

const projectCards: ProjectCard[] = [
  {
    id: 1,
    title: 'دافوديل بلس',
    subtitle: 'مشروع',
    description: 'منزل يفيض رحابة وأنساً لعائلتك..',
    status: 'available',
    acceptsFinancing: true,
    image: 'https://azdan.sa/assets/images/property/placeholder-1.webp'
  },
  {
    id: 2,
    title: 'نارسس بلس',
    subtitle: 'مشروع',
    description: 'حي الورود',
    status: 'available',
    acceptsFinancing: true,
    image: 'https://azdan.sa/assets/images/property/placeholder-2.webp'
  },
  {
    id: 3,
    title: 'نارسس فلور',
    subtitle: 'مشروع',
    description: 'الرياض - النرجس',
    status: 'available',
    acceptsFinancing: false,
    image: 'https://azdan.sa/assets/images/property/placeholder-3.webp'
  },
  {
    id: 4,
    title: 'برج العليا',
    subtitle: 'برج تجاري',
    description: 'الياسمين',
    status: 'available',
    acceptsFinancing: false,
    image: 'https://azdan.sa/assets/images/property/placeholder-4.webp'
  },
  {
    id: 5,
    title: 'توليب بلس',
    subtitle: 'مشروع',
    description: 'الطبيعة في قلب منزلك.. - حي النزهة',
    status: 'available',
    acceptsFinancing: true,
    image: 'https://azdan.sa/assets/images/property/30-1-1753789779.webp'
  },
  {
    id: 6,
    title: 'اوبال',
    subtitle: 'مشروع',
    description: 'نمط حياة فائقة الفخامة.. - حي النرجس',
    status: 'available',
    acceptsFinancing: false,
    image: 'https://azdan.sa/assets/images/property/33-6-1753794427.webp'
  },
  {
    id: 7,
    title: 'ازدان تاور',
    subtitle: 'برج مكتبي',
    description: 'يمثل حضورك، ويليق بطموحك..',
    status: 'coming-soon',
    acceptsFinancing: false,
    image: 'https://azdan.sa/assets/images/property/placeholder-5.webp'
  },
  {
    id: 8,
    title: 'هافن',
    subtitle: 'مجمع سكني',
    description: 'مجتمع نابض بالحياة..',
    status: 'coming-soon',
    acceptsFinancing: false,
    image: 'https://azdan.sa/assets/images/property/37-1-1752612345.webp'
  },
  {
    id: 9,
    title: 'واحة الأعمال',
    subtitle: 'مجمع تجاري',
    description: 'ينمي أعمالك ،ويوسع فرصك.. -',
    status: 'coming-soon',
    acceptsFinancing: false,
    image: 'https://azdan.sa/assets/images/property/38-5-1752642987.webp'
  },
  {
    id: 10,
    title: 'دافوديل',
    subtitle: 'مشروع',
    description: 'منزل يفيض رحابة وأنساً لعائلتك..',
    status: 'sold',
    acceptsFinancing: true,
    image: 'https://azdan.sa/assets/images/property/placeholder-6.webp'
  },
  {
    id: 11,
    title: 'توليب',
    subtitle: 'مشروع',
    description: 'الرياض - حي النرجس',
    status: 'sold',
    acceptsFinancing: false,
    image: 'https://azdan.sa/assets/images/property/placeholder-7.webp'
  },
  {
    id: 12,
    title: 'ماي فير',
    subtitle: 'مشروع',
    description: 'النزهة',
    status: 'sold',
    acceptsFinancing: false,
    image: 'https://azdan.sa/assets/images/property/placeholder-8.webp'
  },
  {
    id: 13,
    title: 'بالاس فيلا',
    subtitle: 'فلل',
    description: 'النرجس',
    status: 'sold',
    acceptsFinancing: false,
    image: 'https://azdan.sa/assets/images/property/placeholder-9.webp'
  },
  {
    id: 14,
    title: 'A58',
    subtitle: 'فلل',
    description: 'النخيل',
    status: 'sold',
    acceptsFinancing: false,
    image: 'https://azdan.sa/assets/images/property/placeholder-10.webp'
  },
  {
    id: 15,
    title: 'A59 حطين',
    subtitle: 'فلل',
    description: 'النخيل',
    status: 'sold',
    acceptsFinancing: false,
    image: 'https://azdan.sa/assets/images/property/placeholder-11.webp'
  }
];

type FilterType = 'all' | 'available' | 'sold' | 'coming-soon' | 'financing';

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [showAll, setShowAll] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load properties from Supabase
  React.useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await getProperties();
        setProperties(data || []);
      } catch (error) {
        console.error('Error loading properties:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  const filterProjects = (projects: Property[], filter: FilterType) => {
    switch (filter) {
      case 'available':
        return projects.filter(p => p.status === 'available');
      case 'sold':
        return projects.filter(p => p.status === 'sold');
      case 'coming-soon':
        return projects.filter(p => p.status === 'coming-soon');
      case 'financing':
        return projects.filter(p => p.accepts_financing);
      default:
        return projects;
    }
  };

  const filteredProjects = filterProjects(properties, activeFilter);
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const handlePropertyClick = (property: Property) => {
    const slug = getPropertySlugMapping(property.title);
    navigate(`/property/${slug}`);
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'متاح';
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

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#80572b] mb-8">
        </h2>
        </div>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6 md:mb-8 tracking-wide">
            مشاريعنا العقارية
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 md:mb-12"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-16 px-2">
            {[
              { key: 'all', label: 'الكل' },
              { key: 'available', label: 'متاح' },
              { key: 'sold', label: 'مباع' },
              { key: 'coming-soon', label: 'قريبا' },
              { key: 'financing', label: 'يقبل التمويل' }
            ].map(filter => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as FilterType)}
                className={`px-3 md:px-8 py-2 md:py-4 rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-amber-50 hover:text-amber-700 shadow-sm border border-slate-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-slate-800"></div>
            <p className="mt-4 text-slate-600">جاري تحميل المشاريع...</p>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {displayedProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer group border border-slate-100"
              style={{ 
                boxShadow: 'var(--shadow-large)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Image Section with Overlay */}
              <div 
                className="relative h-48 md:h-56 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: `url(${project.main_image || 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'})`
                }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.backgroundImage = 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600)';
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Status Badge - Top Right */}
                <div className={`absolute top-3 md:top-5 right-3 md:right-5 ${getStatusColor(project.status)} text-white px-3 md:px-4 py-1 md:py-2 rounded-xl text-xs md:text-sm font-medium shadow-lg z-10 backdrop-blur-sm`}>
                  {getStatusText(project.status)}
                </div>
                
                {/* Financing Badge - Vertical Left Side */}
                {project.accepts_financing && (
                  <div className="absolute left-0 top-3 md:top-5 bg-gradient-to-b from-amber-600 to-amber-700 text-white px-2 md:px-3 py-4 md:py-6 text-xs font-medium shadow-lg z-10 rounded-r-lg backdrop-blur-sm" 
                       style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                    يقبل التمويل
                  </div>
                )}

                {/* Project Title Overlay - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-10">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 tracking-wide">{project.title}</h3>
                  <p className="text-xs md:text-sm text-gray-200">{project.subtitle || 'مشروع عقاري'}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 md:p-6 bg-slate-900 text-white">
                <p className="text-xs md:text-sm text-gray-300 mb-4 md:mb-6 leading-relaxed">
                  {project.description || project.location}
                </p>

                {/* Action Button */}
                <div className="flex justify-center">
                  {project.status === 'sold' ? (
                    <button className="inline-flex items-center gap-2 md:gap-3 bg-slate-700 text-gray-300 px-4 md:px-8 py-3 md:py-4 rounded-xl hover:bg-slate-600 transition-all duration-300 font-medium text-xs md:text-sm w-full justify-center shadow-lg hover:shadow-xl">
                      <span>على الخارطة</span>
                      <ArrowLeft size={14} className="transform scale-x-[-1] md:w-4 md:h-4" />
                    </button>
                  ) : (
                    <button 
                      onClick={() => handlePropertyClick(project)}
                      className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 md:px-8 py-3 md:py-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-medium text-xs md:text-sm w-full justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <span>عرض التفاصيل</span>
                      <ArrowLeft size={14} className="transform scale-x-[-1] md:w-4 md:h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
        
        {/* Load More Button */}
        {filteredProjects.length > 6 && !showAll && (
          <div className="text-center mt-8 md:mt-16">
            <div className="flex flex-col gap-4 justify-center px-4">
              <button
                onClick={() => setShowAll(true)}
                className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl hover:from-slate-700 hover:to-slate-600 transition-all duration-300 font-medium text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                عرض المزيد ({filteredProjects.length - 6} مشروع)
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openQuickInterest'))}
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-medium text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                لم تجد ما تبحث عنه؟ سجل اهتمامك
              </button>
            </div>
          </div>
        )}
        
        {/* Show Less Button */}
        {showAll && filteredProjects.length > 6 && (
          <div className="text-center mt-8 md:mt-16">
            <div className="flex flex-col gap-4 justify-center px-4">
              <button
                onClick={() => setShowAll(false)}
                className="bg-white text-slate-700 px-6 md:px-10 py-3 md:py-4 rounded-xl hover:bg-slate-50 transition-all duration-300 font-medium text-sm md:text-base shadow-lg border border-slate-200"
              >
                عرض أقل
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openQuickInterest'))}
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-medium text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                سجل اهتمامك في مشروع مخصص
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;