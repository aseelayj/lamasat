import React from 'react';
import { Plus, X } from 'lucide-react';

interface RegisterInterestFloatingButtonProps {
  onClick: () => void;
}

const RegisterInterestFloatingButton: React.FC<RegisterInterestFloatingButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 md:bottom-24 left-4 md:left-8 z-40 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-3 md:p-4 rounded-full shadow-2xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm border border-amber-500/20 group"
      aria-label="سجل اهتمامك"
    >
      <div className="flex items-center gap-3">
        <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300 md:w-6 md:h-6" />
        <span className="hidden lg:block font-medium whitespace-nowrap text-sm md:text-base">سجل اهتمامك</span>
      </div>
      
    </button>
  );
};

export default RegisterInterestFloatingButton;