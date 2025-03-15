'use client';

import CarouselPage from './carousel/page';

const Hero = () => {
  return (
    <div className="w-full min-h-[100vh] relative">
      <div className="w-full h-full absolute inset-0">
        <CarouselPage />
      </div>
    </div>
  );
};

export default Hero; 