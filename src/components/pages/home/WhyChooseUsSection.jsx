import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Award size={60} className="text-white" />,
    title: 'Industry Expertise',
    description:
      'Our team consists of agricultural experts with decades of combined experience in the field.',
  },
  {
    icon: <Users size={60} className="text-white" />,
    title: 'Client-Focused Approach',
    description:
      'We work closely with you to understand your unique needs and develop tailored solutions.',
  },
  {
    icon: <Clock size={60} className="text-white" />,
    title: 'Timely Service',
    description:
      'We understand the time-sensitive nature of agriculture and deliver our services promptly.',
  },
  {
    icon: <ThumbsUp size={60} className="text-white" />,
    title: 'Sustainable Practices',
    description:
      'Our methods prioritize environmental sustainability without compromising productivity.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-green-700" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-md font-bold text-white mb-2">
              WHY CHOOSE US
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The Trusted Partner for Modern Agriculture
            </h3>
            <p className="text-white mb-8">
              We combine innovative technology with sustainable practices to
              deliver superior agricultural solutions. Our commitment to
              excellence and customer satisfaction sets us apart in the
              industry.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center border-2 p-4 gap-2">
                  <div className="">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-white">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <video
                className="w-full h-full object-cover"
                // src="/videos/vid.mp4"
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
