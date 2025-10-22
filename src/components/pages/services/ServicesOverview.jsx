import Link from "next/link";
import {
  Egg,
  Drumstick,
  LineChart,
  Tractor,
  Activity,
  Binoculars,
  Check,
} from "lucide-react";

const services = [{
  id: 'egg-production',
  icon: <Egg size={48} className="text-[#d57315]" />,
  title: 'Egg Production',
  description: 'We produce premium quality eggs from free-range chickens. Our eggs are available in various sizes and quantities for both retail and wholesale customers.',
  features: ['Free-range organic eggs', 'Various size options', 'Wholesale pricing available', 'Regular delivery schedules'],
  image: '/images/img1.jpg'
}, {
  id: 'meat-distribution',
  icon: <Drumstick size={48} className="text-[#d57315]" />,
  title: 'Meat Distribution',
  description: 'We provide efficient meat distribution services to ensure that our high-quality poultry products reach our customers in a timely manner.',
  features: ['Whole chickens and parts', 'Nationwide delivery network', 'Customizable delivery schedules', 'Real-time tracking and updates'],
  image: '/images/img6.jpg'
}, {
  id: 'poultry-supply',
  icon: <LineChart size={48} className="text-[#d57315]" />,
  title: 'Poultry Supply',
  description: 'We provide high-quality chicks, feed, and equipment for farmers looking to start or expand their poultry operations.',
  features: ['Various chicken breeds', 'Organic feed options', 'Equipment and supplies', 'Bulk discounts available'],
  image: '/images/img8.jpg'
}, {
  id: 'farm-consulting',
  icon: <Tractor size={48} className="text-[#d57315]" />,
  title: 'Farm Consulting',
  description: 'Our farm consulting services provide expert advice on best practices for poultry farming, including nutrition, housing, and biosecurity measures. We work closely with farmers to develop customized solutions that meet their specific needs.',
  features: ['Nutrient management planning', 'Biosecurity assessments', 'Housing and equipment recommendations', 'Custom feeding programs'],
  image: '/images/img13.jpg'
}, {
  id: 'organic-feed',
  icon: <Activity size={48} className="text-[#d57315]" />,
  title: 'Organic Feed',
  description: 'We specialize in helping farmers transition to and succeed with organic farming practices. Our team provides guidance on certification, natural pest control, and sustainable growing methods.',
  features: ['Organic certification assistance', 'Natural pest and disease management', 'Organic fertilization techniques', 'Sustainable crop rotation planning', 'Organic market development'],
  image: '/images/img7.jpg'
}, {
  id: 'farm-tours',
  icon: <Binoculars size={48} className="text-[#d57315]" />,
  title: 'Farm Tours',
  description: 'We offer comprehensive farm tours for individuals and groups interested in learning more about poultry farming practices. Our tours provide an in-depth look at our operations and sustainable farming techniques.',
  features: ['Guided tours of our facilities', 'Educational resources on poultry farming', 'Q&A sessions with our experts', 'Opportunities to observe best practices in action'],
  image: '/images/img4.jpg'
}];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Agricultural Solutions
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We offer a wide range of services designed to help farmers improve
              productivity, sustainability, and profitability through innovative
              agricultural practices.
            </p>
          </div>
          {services.map((service, index) => <div key={service.id} id={service.id} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => <div key={idx} className="flex items-start">
                          <Check className="text-[#d57315] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>)}
                    </div>
                    <Link href="/contact" className="inline-block px-6 py-3 bg-[#d57315] text-white text-sm font-semibold hover:bg-[#d57315] transition-colors">
                      Inquire About This Service
                    </Link>
                  </div>
                  <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <img src={service.image} alt={service.title} className="shadow-lg w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>)}
        </div>
    </section>
  );
}