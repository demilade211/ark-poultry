"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white h-auto relative" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/img8.jpg"
                alt="Farmers in field"
                className="w-full h-auto sm:h-[80vh] object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Years of Experience</p>
            </div> */}
          </div>
          <div>
            <h2 className="text-md font-bold text-green-600 mb-2">ABOUT US</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Leading The Way In Agricultural Innovation
            </h3>
            <p className="text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.
              it to make a type specimen book. It has survived nothas been the industrys type standard dummy text ever since the 1500s, when an unknown printer took loream of type and scrambled it to make a type specimenn book. It has survived no only five centuries loream of type and scrambled industry text.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that happy chickens produce better eggs and meat. That's why we ensure our birds have access to natural light, fresh air, and organic feed grown right on our farm.
            </p>
            <div className="flex md:items-center justify-left md:justify-between flex-col md:flex-row w-full md:w-[80%] md:p-10 relative md:absolute md:right-8 md:buttom-10 h-full md:h-auto bg-white md:shadow-md">
              <div className="flex items-center gap-2">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={50} />
                <span>
                  <h3 className="text-[32px] text-gray-700">+123 4567 894</h3>
                  <p className="text-gray-700">Sustainable farming practices</p>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={50} />
                <span>
                  <h3 className="text-[32px] text-gray-700">+123 4567 894</h3>
                  <p className="text-gray-700">Sustainable farming practices</p>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={50} />
                <span>
                  <h3 className="text-[32px] text-gray-700">+123 4567 894</h3>
                  <p className="text-gray-700">Sustainable farming practices</p>
                </span>
              </div>
            </div>
            {/* <Link
              href="/about"
              className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
            >
              Learn More About Us
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;