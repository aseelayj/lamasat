import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-slate-800 to-slate-700 text-white p-4 rounded-xl shadow-xl hover:from-slate-700 hover:to-slate-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm border border-white/10"
      aria-label="العودة إلى الأعلى"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;