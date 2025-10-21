"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="bg-gray-50 p-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <MapPin className="text-[#d57315]" size={24} />
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
              <div className="bg-gray-50 p-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <Phone className="text-[#d57315]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">
                      Phone Number
                    </h4>
                    <p className="text-gray-600">Main: (234) 81688016104</p>
                    <p className="text-gray-600">Support: (234) 81688016104</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <Mail className="text-[#d57315]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">
                      Email Address
                    </h4>
                    <p className="text-gray-600">info@comany.com</p>
                    <p className="text-gray-600">support@comany.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <Clock className="text-[#d57315]" size={24} />
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
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              {isSubmitted ? <div className="bg-[#f5cda7] border border-[#fcbd82] p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-[#d57315] mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-600">
                    Your message has been submitted successfully. We'll get back
                    to you as soon as possible.
                  </p>
                </div> : <form onSubmit={handleSubmit} className="bg-gray-50 text-gray-700 p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d57315]" required placeholder="Your Name"/>
                    </div>
                    <div>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d57315]" required placeholder="Your Email"/>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d57315]" placeholder="Phone Number"/>
                    </div>
                    <div>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-3 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d57315]" required placeholder="Subject">
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="services">Services Information</option>
                        <option value="quote">Request a Quote</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className="w-full px-3 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d57315]" placeholder="Please describe how we can help you..." required placeholder="Send Message"></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className={`flex items-center justify-center px-6 py-3 bg-[#d57315] text-white font-semibold hover:bg-[#d57315] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                    {isSubmitting ? <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </> : <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>}
                  </button>
                </form>}
            </div>
          </div>
        </div>
    </section>
  );
}