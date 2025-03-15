'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button1 from '../Buttons/button1';
import Button2 from '../Buttons/button2';

interface HotelData {
  id: number;
  name: string;
  description: string;
  content: string;
  image: string;
  star: number;
}

interface CarouselProps {
  items: HotelData[];
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
}

const SingleCarousel: React.FC<CarouselProps> = ({
  items,
  autoPlayInterval = 5000,
  pauseOnHover = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to handle slide changes
  const goToSlide = useCallback((index: number) => {
    if (!isAnimating && index !== activeIndex) {
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 800); // Match transition duration
    }
  }, [activeIndex, isAnimating]);

  // Function to go to next slide
  const goToNextSlide = useCallback(() => {
    const nextIndex = (activeIndex + 1) % items.length;
    goToSlide(nextIndex);
  }, [activeIndex, items.length, goToSlide]);

  // Function to go to previous slide
  const goToPrevSlide = useCallback(() => {
    const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    goToSlide(prevIndex);
  }, [activeIndex, items.length, goToSlide]);

  // Setup continuous autoplay
  useEffect(() => {
    const startAutoPlay = () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
      autoPlayTimerRef.current = setInterval(goToNextSlide, autoPlayInterval);
    };

    startAutoPlay();

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [goToNextSlide, autoPlayInterval]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (event.key === 'ArrowRight') {
        goToNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  const renderStars = (starCount: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < starCount ? 'text-yellow-400' : 'text-gray-300'}`}
        aria-hidden="true"
      >
        ★
      </span>
    ));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-hidden"
      onMouseEnter={() => {
        if (pauseOnHover && autoPlayTimerRef.current) {
          clearInterval(autoPlayTimerRef.current);
        }
      }}
      onMouseLeave={() => {
        if (pauseOnHover) {
          autoPlayTimerRef.current = setInterval(goToNextSlide, autoPlayInterval);
        }
      }}
      role="region"
      aria-label="Hotel Carousel"
    >
      <style jsx global>{`
        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
          pointer-events: none;
        }
        
        .carousel-slide.active {
          opacity: 1;
          pointer-events: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .carousel-slide {
            transition: none;
          }
        }

        @media (max-width: 640px) {
          .carousel-content {
            padding: 1rem;
          }
        }
      `}</style>

      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center w-full max-w-4xl px-4 carousel-content">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg transition-all duration-300">
          Welcome to Luxury Living
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed drop-shadow-md mb-6 sm:mb-8 px-4 sm:px-6">
          Experience the finest accommodations and world-class service at our premium hotels and resorts worldwide.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
          <Button1 /> 
          <Button2 /> 
        </div>
      </div>

      {/* Carousel Slides */}
      <div className="absolute inset-0">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-slide ${activeIndex === index ? 'active' : ''}`}
            role="group"
            aria-label={`Slide ${index + 1} of ${items.length}`}
            aria-hidden={activeIndex !== index ? 'true' : 'false'}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                priority={index === activeIndex}
                quality={90}
                className="object-cover"
                sizes="100vw"
                loading={index === activeIndex ? 'eager' : 'lazy'}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent" />
            </div>
            
            {/* Content Box */}
            <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-[calc(100%-2rem)] sm:w-full max-w-[calc(100%-2rem)] sm:max-w-md text-left p-3 sm:p-4 bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 shadow-xl transition-all duration-300">
              <div className="flex flex-col mb-2">
                <h2 className="text-white font-bold text-sm sm:text-base tracking-tight">
                  {item.name}
                </h2>
                <div className="flex items-center gap-1 mt-1" aria-label={`${item.star} out of 5 stars`}>
                  {renderStars(item.star)}
                </div>
              </div>
              
              <p className="text-white/90 text-xs sm:text-sm mb-2 font-light leading-relaxed line-clamp-2">
                {item.description}
              </p>
              
              <p className="text-gray-200/80 text-xs leading-relaxed mb-3 sm:mb-4 line-clamp-2 hidden sm:block">
                {item.content}
              </p>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3 flex-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrevSlide();
                    }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Previous slide"
                  >
                    <span className="text-white text-base sm:text-lg select-none" aria-hidden="true">&lt;</span>
                  </button>

                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {items.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          goToSlide(idx);
                        }}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                          activeIndex === idx 
                            ? 'bg-white scale-110' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNextSlide();
                    }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Next slide"
                  >
                    <span className="text-white text-base sm:text-lg select-none" aria-hidden="true">&gt;</span>
                  </button>
                </div>

                <button 
                  type="button"
                  className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95 whitespace-nowrap"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCarousel;


