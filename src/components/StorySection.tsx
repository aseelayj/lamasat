import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-800 leading-tight tracking-wide">
          لمسات .. نبني أحلامكم
        </h2>
        <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 md:mt-8"></div>
      </div>
    </section>
  );
};

export default StorySection;