'use client';

import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { Carousel } from 'react-bootstrap';

interface HotelData {
  id: number;
  name: string;
  discription: string;
  content: string;
  image: string;
  star: number;
}

interface CarouselProps {
  items: HotelData[];
}

const SingleCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderStars = (starCount: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < starCount ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  const handleSelect = useCallback((selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  }, []);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    const newIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  }, [activeIndex, items.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    const newIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  }, [activeIndex, items.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <style jsx global>{`
        .carousel-fade .carousel-item {
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }
        .carousel-fade .carousel-item.active {
          opacity: 1;
        }
        .carousel-indicators,
        .carousel-control-prev,
        .carousel-control-next {
          display: none;
        }
      `}</style>

      {/* Fixed Center Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Welcome to Luxury Living
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-md">
          Experience the finest accommodations and world-class service at our premium hotels and resorts worldwide.
        </p>
      </div>

      <Carousel 
        activeIndex={activeIndex}
        onSelect={handleSelect}
        fade 
        interval={5000} 
        pause={false}
        wrap={true}
        touch={true}
        keyboard={true}
        className="h-full"
      >
        {items.map((item) => (
          <Carousel.Item key={item.id} className="h-screen">
            {/* Image Container */}
            <div className="relative h-screen w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                priority
                quality={100}
                className="object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent" />
              
              {/* Content Box - Bottom Right Corner */}
              <div className="absolute bottom-8 right-8 w-full max-w-lg text-left p-5 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl">
                <div className="flex justify-between items-start mb-2">
                  {/* Hotel Name */}
                  <h2 className="text-white font-bold text-lg md:text-2xl tracking-tight flex-1">
                    {item.name}
                  </h2>
                  {/* Star Rating */}
                  <div className="flex items-center gap-0.5 ml-2">
                    {renderStars(item.star)}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-white/90 text-sm md:text-base mb-2 font-light leading-relaxed line-clamp-2">
                  {item.discription}
                </p>
                
                {/* Content */}
                <p className="text-gray-200/80 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.content}
                </p>

                {/* Navigation and CTA Container */}
                <div className="flex items-center gap-4">
                  {/* Navigation Controls */}
                  <div className="flex items-center gap-3 flex-1">
                    {/* Previous Button */}
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 active:scale-95 focus:outline-none"
                      aria-label="Previous slide"
                    >
                      <span className="text-white text-lg select-none">&lt;</span>
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                      {items.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleSelect(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                            activeIndex === index 
                              ? 'bg-white scale-110' 
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 active:scale-95 focus:outline-none"
                      aria-label="Next slide"
                    >
                      <span className="text-white text-lg select-none">&gt;</span>
                    </button>
                  </div>

                  {/* CTA Button */}
                  <button 
                    type="button"
                    className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-sm focus:outline-none"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SingleCarousel;
