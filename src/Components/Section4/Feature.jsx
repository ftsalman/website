import React from 'react';
import FeatureCard from './FeatureCard';
import { featureIcon1, featureIcon2, featureIcon3, featureIcon4, featureIcon5, featureIcon6 } from '../../assets/Icon';

const Feature = () => {
  return (
    <div className="w-full p-6 sm:p-8 bg-white mt-10 sm:mt-12">
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center mt-8 sm:mt-14 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Tailor-made features</h1>
        <p className="text-sm sm:text-base mt-2 text-center text-gray-600">
          Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a{' '}
          <span className="hidden sm:inline">document or visual presentation.</span>
          <br className="sm:hidden" />
          <span className="sm:hidden">document or visual presentation.</span>
        </p>
      </div>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 px-4 sm:px-6 lg:px-8">
        <FeatureCard img={featureIcon1} title="Robust workflow" />
        <FeatureCard img={featureIcon2} title="Flexibility" />
        <FeatureCard img={featureIcon3} title="User friendly" />
        <FeatureCard img={featureIcon4} title="Headline" />
        <FeatureCard img={featureIcon5} title="Better components" />
        <FeatureCard img={featureIcon6} title="Well organised" />
      </div>
    </div>
  );
};

export default Feature;
