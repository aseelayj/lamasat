import React, { useState } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { ChevronDown } from 'lucide-react';
import logoImage from '../logo.png';

interface HeaderProps {
  onAboutClick?: () => void;
  onServicesClick?: () => void;
  onContactClick?: () => void;
  onConsultancyClick?: () => void;
  onRegisterInterestClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onAboutClick,
  onServicesClick,
  onContactClick,
  onConsultancyClick,
  onRegisterInterestClick
}) => {
  const { scrollDirection, scrollY } = useScrollDirection();
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  
  const isScrolled = scrollY > 50;
  const isVisible = scrollDirection !== 'down' || scrollY < 100;

  const headerClasses = `
    fixed top-0 right-0 left-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-white/95 backdrop-blur-sm header-shadow' : 'bg-transparent'}
    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
  `;

  const textColor = isScrolled ? 'text-slate-800' : 'text-white';
  
  const menuIcon = isScrolled
    ? 'https://azdan.sa/assets/images/mobile-dark-nav-icon.svg'
    : 'https://azdan.sa/assets/images/mobile-white-nav-icon.svg';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Right Group - Logo and Navigation */}
          <div className="flex items-center space-x-8 space-x-reverse">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img 
                src={logoImage}
                alt="لمسات" 
               className={`h-12 md:h-16 w-auto transition-all duration-300 ${isScrolled ? 'filter invert' : ''}`}
              />
            </a>
            
            {/* Navigation Menu - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
              {/* Projects Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowProjectsDropdown(true)}
                onMouseLeave={() => setShowProjectsDropdown(false)}
              >
                <button className={`flex items-center space-x-1 space-x-reverse font-semibold hover:text-amber-600 transition-colors duration-300 ${textColor}`}>
                  <span>المشاريع</span>
                  <ChevronDown size={16} className="transform rotate-0" />
                </button>
                <div 
                  className={`absolute top-full right-0 mt-3 rounded-xl py-3 min-w-[200px] transition-all duration-300 ${
                    showProjectsDropdown ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                  } ${isScrolled ? 'bg-white shadow-xl border border-slate-100' : 'bg-slate-800/95 backdrop-blur-sm shadow-xl'} transform -translate-x-0 md:translate-x-0 left-0 md:left-auto md:right-0`}
                >
                  <a 
                    href="/projects/residential" 
                    className={`block px-5 py-3 transition-colors duration-300 font-medium ${
                      isScrolled ? 'text-slate-700 hover:text-amber-600 hover:bg-amber-50' : 'text-white hover:text-amber-300 hover:bg-white/10'
                    }`}
                  >
                    سكني
                  </a>
                  <a 
                    href="/projects/commercial" 
                    className={`block px-5 py-3 transition-colors duration-300 font-medium ${
                      isScrolled ? 'text-slate-700 hover:text-amber-600 hover:bg-amber-50' : 'text-white hover:text-amber-300 hover:bg-white/10'
                    }`}
                  >
                    تجاري
                  </a>
                </div>
              </div>
              
              <button 
                onClick={onRegisterInterestClick}
                className={`font-semibold hover:text-amber-600 transition-colors duration-300 ${textColor}`}
              >
                سجل اهتمامك
              </button>
            </nav>
          </div>
          
          {/* Left Group - More Menu */}
          <div className="relative">
            <button 
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="p-2"
            >
              <img src={menuIcon} alt="القائمة" className="w-6 h-6" />
            </button>
            
            {showMoreMenu && (
             <div className="fixed inset-x-4 top-20 md:absolute md:top-full md:right-0 mt-3 bg-white rounded-xl py-3 min-w-[220px] w-auto md:w-[280px] z-50 border border-slate-100 shadow-xl">
                {/* Mobile Navigation Items */}
                <div className="block lg:hidden">
                  <div className="px-5 py-2 text-sm font-bold text-slate-500 border-b border-slate-100">المشاريع</div>
                  <a href="/projects/residential" className="block w-full text-right px-5 py-3 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium">
                    سكني
                  </a>
                  <a href="/projects/commercial" className="block w-full text-right px-5 py-3 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium">
                    تجاري
                  </a>
                  <button 
                    onClick={onRegisterInterestClick}
                    className="block w-full text-right px-5 py-3 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
                  >
                    سجل اهتمامك
                  </button>
                  <div className="border-t border-slate-100 my-2"></div>
                </div>
                
                <button 
                  onClick={onAboutClick}
                  className="block w-full text-right px-5 py-3 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
                >
                  من نحن؟
                </button>
                <button 
                  onClick={onServicesClick}
                  className="block w-full text-right px-5 py-3 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
                >
                  خدماتنا
                </button>
                <button 
                  onClick={onContactClick}
                  className="block w-full text-right px-5 py-3 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
                >
                  تواصل معنا
                </button>
                <button 
                  onClick={onConsultancyClick}
                  className="block w-full text-right px-5 py-3 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
                >
                  الاستشارات العقارية
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;