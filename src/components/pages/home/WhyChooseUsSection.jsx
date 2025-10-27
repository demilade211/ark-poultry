"use client"
import React, { useState } from 'react';
import HomeSectionTitle from "@/components/ui/HomeSectionTitle";
import { Award, Users, Clock, ThumbsUp, Play } from 'lucide-react';

const features = [
  {
    icon: <Award size={60} className="text-white" />,
    title: 'Industry Expertise',
    description: 'Great explorer of truth',
  },
  {
    icon: <Users size={60} className="text-white" />,
    title: 'Client-Focused Approach',
    description: 'Best shaving Equipment',
  },
  {
    icon: <Clock size={60} className="text-white" />,
    title: 'Timely Service',
    description: 'Work with great products',
  },
  {
    icon: <ThumbsUp size={60} className="text-white" />,
    title: 'Sustainable Practices',
    description: 'Store your season crop',
  },
];

const WhyChooseUsSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const videoRef = useRef(null);

  // const handlePlay = () => {
  //   setIsPlaying(true);
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // };

  // const cloudName = 'de6b5imnu';
  
  // const videoPublicId = 'YOUR_VIDEO_PUBLIC_ID'; // e.g., 'samples/sea-turtle' or 'my-videos/promo-video'
  
  // // Cloudinary video URL
  // const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${videoPublicId}.mp4`;
  
  // // Cloudinary thumbnail URL (auto-generated from video)
  // const thumbnailUrl = `https://res.cloudinary.com/${cloudName}/video/upload/so_0/${videoPublicId}.jpg`;


  return (
    <section className="relative py-20 bg-[#232323] overflow-visible" id="why-choose-us">
      <div className="absolute top-0 left-0 h-[90%] w-full lg:w-[55%] bg-[#d57315] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT CONTENT */}
          <div className="text-white flex flex-col justify-center py-8">
            <h2 className="text-md font-bold mb-2">WHY CHOOSE US?</h2>
            <HomeSectionTitle 
              title="Your Trusted Partner in Poultry and Agricultural Excellence"
              titleColor="white"
              bgColor="white"
              center={false}
            />
            <p className="mb-8 text-white/90">
              At ArkPoultry Farm, we don’t just raise birds — we build trust, deliver quality, and champion sustainable farming. Here’s why farmers, partners, and communities choose us:
            </p>

            {/* Grid with dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center py-4 md:p-6 gap-3 ${index % 2 === 0 ? 'md:border-r border-white/30' : ''
                    } ${index < 2 ? 'md:border-b border-white/30' : ''
                    }`}
                >
                  <div className="border-2 border-white/40 p-3 rounded">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VIDEO - Extends beyond container */}
          <div className="relative lg:top-[-130px] overflow-visible lg:-mr-4">
            <div className="relative h-full min-h-[400px] lg:min-h-[600px] overflow-hidden shadow-2xl">
              {!isPlaying ? (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=1000&fit=crop"
                    alt="Agriculture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 hover:bg-white/90 transition-all hover:scale-110"
                  >
                    <Play size={40} className="text-[#d57315] ml-1" fill="currentColor" />
                  </button>
                </>
              ) : (
                <iframe
                  src="https://drive.google.com/file/d/1gaB57VKFiD7xASAk1CteOXFBAiv4ffk-/preview?autoplay=1"
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  title="Why Choose Us Video"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;