import React from 'react';
import Pricing from '../../components/Pricing';

const Plans = () => {
  return (
    <div className="w-full pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8 px-4">Available Insurance Plans</h2>
        <Pricing />
      </div>
    </div>
  );
};

export default Plans;
