import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
const ContactSection = () => {
  return <section className="py-20 relative" style={{ backgroundImage: `url(/images/img3.jpg)` }} id="contact">
      <div className="absolute inset-0 bg-black opacity-80" />
      
      <div className="relative container mx-auto px-4 py-20 inset-1 z-20">
        <div className="text-center mb-16">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-green-600 mb-2">
              Company
            </h2>
            <h3 className="text-4xl font-bold text-white mb-4">
              Talk With Our Expert Gardener
            </h3>
            <p className="max-w-3xl mx-auto my-8 text-white">
              We collaborate with leading companies in the Poultry industry
              to bring you the most innovative and effective solutions for your
              needs.
            </p>
          </div>

          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='w-full'>
              <input type="text" placeholder='Your Name' className='px-6 py-7 w-full bg-white/20' required />
            </div>

            <div className='w-full'>
              <input type="text" placeholder='Your Name' className='px-6 py-7 w-full bg-white/20' required />
            </div>

            <div className='w-full'>
              <select id="service" name="service" className="px-6 py-7 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-green-500" required>
                <option value="" className='text-gray-700'>Select</option>
                <option value="crop-management" className='text-gray-700'>Crop Management</option>
                <option value="irrigation" className='text-gray-700'>Irrigation Solutions</option>
                <option value="analytics" className='text-gray-700'>Farm Analytics</option>
                <option value="soil-testing" className='text-gray-700'>Soil Testing</option>
                <option value="organic" className='text-gray-700'>Organic Farming</option>
                <option value="training" className='text-gray-700'>Agricultural Training</option>
                <option value="other" className='text-gray-700'>Other</option>
              </select>
            </div>

            <button className='w-full px-6 py-7 bg-green-600 text-white font-medium hover:bg-green-700'>Let's Talk</button>
          </div>
          

          <div className='flex flex-col md:flex-row gap-12 md:gap-25 items-center justify-center pt-20'>
            <div className="flex items-center gap-2">
              <Mail className="text-green-600 mr-2 mt-1 flex-shrink-0" size={60} />
              <span className='flex flex-col text-left'>
                <h3 className="text-[32px] text-white">What's App</h3>
                <p className="text-green-700">+2348168016104</p>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="text-green-600 mr-2 mt-1 flex-shrink-0" size={60} />
              <span className='flex flex-col text-left'>
                <h3 className="text-[32px] text-white">What's App</h3>
                <p className="text-green-700">+2348168016104</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;