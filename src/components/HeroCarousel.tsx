import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { heroSlides } from '../data/heroSlides';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-slider-container">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
          }}
        >
          <div className="container mx-auto px-4">
            <div className="hero-content max-w-2xl px-4 md:px-0">
              <div className="subtitle text-sm md:text-lg">{slide.subtitle}</div>
              <h1 className="title text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">{slide.title}</h1>
              <p className="description text-base md:text-xl lg:text-2xl mb-6 md:mb-8">{slide.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="hero-btn text-center">
                <span>عرض التفاصيل</span>
                <ChevronLeft size={20} className="transform scale-x-[-1]" />
              </a>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('openQuickInterest'))}
                className="hero-btn-secondary text-center"
              >
                <span>سجل اهتمامك</span>
              </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Dots */}
      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;