import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Award size={32} className="text-green-600" />,
    title: 'Industry Expertise',
    description:
      'Our team consists of agricultural experts with decades of combined experience in the field.',
  },
  {
    icon: <Users size={32} className="text-green-600" />,
    title: 'Client-Focused Approach',
    description:
      'We work closely with you to understand your unique needs and develop tailored solutions.',
  },
  {
    icon: <Clock size={32} className="text-green-600" />,
    title: 'Timely Service',
    description:
      'We understand the time-sensitive nature of agriculture and deliver our services promptly.',
  },
  {
    icon: <ThumbsUp size={32} className="text-green-600" />,
    title: 'Sustainable Practices',
    description:
      'Our methods prioritize environmental sustainability without compromising productivity.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold text-green-600 mb-2">
              WHY CHOOSE US
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Trusted Partner for Modern Agriculture
            </h3>
            <p className="text-gray-600 mb-8">
              We combine innovative technology with sustainable practices to
              deliver superior agricultural solutions. Our commitment to
              excellence and customer satisfaction sets us apart in the
              industry.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <video
                className="w-full h-full object-cover"
                src="/videos/vid.mp4"
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
