import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import StorySection from '../components/StorySection';
import StatisticsSection from '../components/StatisticsSection';
import ProjectsSection from '../components/ProjectsSection';
import DiscoverSection from '../components/DiscoverSection';
import InteractiveMap from '../components/InteractiveMap';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import RegisterInterestFloatingButton from '../components/RegisterInterestFloatingButton';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <HeroCarousel />
        <StorySection />
        <ProjectsSection />
        <StatisticsSection />
        <DiscoverSection />
        <InteractiveMap />
        <CTASection onRegisterClick={() => navigate('/register-interest')} />
      </main>
      <Footer />
      <ScrollToTop />
      
      {/* Floating Interest Button */}
      <RegisterInterestFloatingButton onClick={() => window.dispatchEvent(new CustomEvent('openQuickInterest'))} />
    </>
  );
};

export default HomePage;