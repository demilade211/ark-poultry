import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

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
  return (
    <section className="relative py-20 bg-[#232323]" id="why-choose-us">

      <div className="absolute top-0 left-0 h-full w-full lg:w-[70%] bg-[#d57315] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="text-white">
            <h2 className="text-md font-bold mb-2">WHY CHOOSE US</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              The Trusted Partner for Modern Agriculture
            </h3>
            <p className="mb-8">
              We combine innovative technology with sustainable practices to
              deliver superior agricultural solutions. Our commitment to
              excellence and customer satisfaction sets us apart in the
              industry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center p-6 gap-3 ${index % 2 === 0 ? 'border-r border-white/30' : ''
                    } ${index < 2 ? 'border-b border-white/30' : ''
                    }`}
                >
                  <div className='border-1 border-white p-4'>{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-white/90">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <video
                className="w-full h-full object-cover"
                controls
              />
            </div>
          </div>
        </div>

        {/* <div className="absolute shadow-2xl left-8 top-full translate-y-1/2 z-20 p-4">
          <div className="bg-white px-8 py-6 border border-green-200 flex items-center">
            <p className="text-5xl font-bold text-green-700">5</p>
            <p className="text-gray-700 font-semibold">Years Of Experience</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;