import React from 'react';
import Pricing from '../../components/Pricing';

const Plans = () => {
  return (
    <div className="w-full">
      {/* We reuse the beautiful Pricing component, but we strip the excessive padding since it's inside the dashboard frame */}
      <div className="-mt-20">
        <Pricing />
      </div>
    </div>
  );
};

export default Plans;
