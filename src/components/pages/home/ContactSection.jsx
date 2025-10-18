import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
const ContactSection = () => {
  return <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-green-600 mb-2">CONTACT US</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch With Our Team
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions or ready to start working with us? Reach out to our
            team using any of the contact methods below.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    Our Location
                  </h4>
                  <p className="text-gray-600">123 Farm Road, Ife</p>
                  <p className="text-gray-600">Osun, Nigeria</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    Phone Number
                  </h4>
                  <p className="text-gray-600">Main: (234) 81688016104</p>
                  <p className="text-gray-600">Support: (234) 7045665406</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    Email Address
                  </h4>
                  <p className="text-gray-600">info@company.com</p>
                  <p className="text-gray-600">support@company.com</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Clock className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=0" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" title="Office Location Map"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;