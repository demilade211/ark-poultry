import React from 'react';
const partners = [{
  name: 'EcoFarm Solutions',
  logo: 'https://via.placeholder.com/200x80?text=EcoFarm'
}, {
  name: 'GreenTech Agriculture',
  logo: 'https://via.placeholder.com/200x80?text=GreenTech'
}, {
  name: 'Harvest Innovations',
  logo: 'https://via.placeholder.com/200x80?text=Harvest'
}, {
  name: 'SoilPro Analytics',
  logo: 'https://via.placeholder.com/200x80?text=SoilPro'
}, {
  name: 'CropGuard Systems',
  logo: 'https://via.placeholder.com/200x80?text=CropGuard'
}, {
  name: 'AquaFlow Irrigation',
  logo: 'https://via.placeholder.com/200x80?text=AquaFlow'
}];
const PartnersSection = () => {
  return <section className="py-16 bg-gray-50" id="partners">
      <div className="mx-auto px-4 w-full relative">
        <div className="text-center mb-12">
          <h2 className="text-lg font-bold text-green-600 mb-2">
            OUR PARTNERS
          </h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            We collaborate with leading companies in the Poultry industry
            to bring you the most innovative and effective solutions for your
            needs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center w-full md:w-[85%] relative md:absolute md:right-0 bg-green-700 p-4 z-50">
          {partners.map((partner, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32">
              <img src={partner.logo} alt={partner.name} className="max-h-16 max-w-full" />
            </div>)}
        </div>
      </div>
    </section>;
};
export default PartnersSection;