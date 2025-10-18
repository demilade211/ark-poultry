"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/img8.jpg"
                alt="Farmers in field"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold text-green-600 mb-2">ABOUT US</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Leading The Way In Agricultural Innovation
            </h3>
            <p className="text-gray-600 mb-6">
              At FarmFresh Poultry, we're dedicated to raising the healthiest chickens using sustainable and humane farming practices. Our family-owned farm spans over 200 acres of beautiful countryside where our chickens roam freely.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that happy chickens produce better eggs and meat. That's why we ensure our birds have access to natural light, fresh air, and organic feed grown right on our farm.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Sustainable farming practices</p>
              </div>
              <div className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Expert agricultural consulting</p>
              </div>
              <div className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Modern farming technology</p>
              </div>
              <div className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Comprehensive soil analysis</p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;