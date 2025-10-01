import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PropertyDetailsPage from './components/PropertyDetailsPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import ConsultancyPage from './components/ConsultancyPage';
import RegisterInterestPage from './components/RegisterInterestPage';
import QuickInterestModal from './components/QuickInterestModal';

function App() {
  const [showQuickModal, setShowQuickModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen for quick interest modal events
  React.useEffect(() => {
    const handleOpenQuickInterest = () => setShowQuickModal(true);
    window.addEventListener('openQuickInterest', handleOpenQuickInterest);
    return () => window.removeEventListener('openQuickInterest', handleOpenQuickInterest);
  }
  )
  return (
    <div className="min-h-screen">
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header 
                onAboutClick={() => navigate('/about')}
                onServicesClick={() => navigate('/services')}
                onContactClick={() => navigate('/contact')}
                onConsultancyClick={() => navigate('/consultancy')}
                onRegisterInterestClick={() => navigate('/register-interest')}
              />
              <HomePage />
            </>
          } 
        />
        <Route 
          path="/property/:slug" 
          element={<PropertyDetailsPage onBack={() => navigate('/')} />} 
        />
        <Route 
          path="/about" 
          element={<AboutPage onBack={() => navigate('/')} />} 
        />
        <Route 
          path="/services" 
          element={<ServicesPage onBack={() => navigate('/')} />} 
        />
        <Route 
          path="/contact" 
          element={<ContactPage onBack={() => navigate('/')} />} 
        />
        <Route 
          path="/consultancy" 
          element={<ConsultancyPage onBack={() => navigate('/')} />} 
        />
        <Route 
          path="/register-interest" 
          element={<RegisterInterestPage onBack={() => navigate('/')} />} 
        />
      </Routes>
      
      {/* Quick Interest Modal */}
      <QuickInterestModal
        isOpen={showQuickModal}
        onClose={() => setShowQuickModal(false)}
        onFullForm={() => {
          setShowQuickModal(false);
          navigate('/register-interest');
        }}
      />
    </div>
  );
}

export default App;