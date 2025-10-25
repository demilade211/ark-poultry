"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/img3.jpg",
    title: "Sustainable Agriculture for a Better Tomorrow",
    description:
      "Innovative farming solutions that respect the environment while maximizing productivity.",
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    id: 2,
    image: "/images/img1.jpg",
    title: "Expert Agricultural Consulting",
    description:
      "Our team of experts provides tailored solutions for all your farming needs.",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
  {
    id: 3,
    image: "/images/img4.jpg",
    title: "Modern Farming Technology",
    description:
      "Leveraging cutting-edge technology to improve yield and sustainability.",
    buttonText: "Get a Quote",
    buttonLink: "/contact",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[67vh] sm:h-[100vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-60" />
          </div>

          <div className="relative z-20 flex items-center h-full px-4 md:px-23">
            <div className="text-center sm:text-left max-w-5xl">
              <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-white mb-6">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-white mb-8">{slide.description}</p>
              <div className="flex items-center mx-auto sm:mx-0 flex-col sm:flex-row gap-3">
                <Link
                  href={slide.buttonLink}
                  className="inline-block px-8 py-3 bg-[#d57315] text-white font-medium hover:bg-transparent border-2 border-[#d57315] hover:border-white transition-colors"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-all"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-all"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white bg-opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
