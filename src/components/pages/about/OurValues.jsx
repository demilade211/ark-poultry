import SectionTitle from "@/components/ui/SectionTitle";

export default function OurValues() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Values" subtitle="What we stand for" center={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f5cda7] rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We are committed to environmentally responsible farming
                practices that conserve resources and minimize waste. Our farm
                operates on renewable energy and uses organic farming methods.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f5cda7] rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🐔</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Animal Welfare
              </h3>
              <p className="text-gray-600">
                We believe in treating our chickens with care and respect. Our
                birds have access to outdoor areas, natural light, and plenty of
                space to move around freely.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f5cda7] rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. From our organic feed to our
                processing methods, every step is designed to ensure the highest
                quality poultry products.
              </p>
            </div>
            {/* Value 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f5cda7] rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                We're proud to support our local community through job creation,
                educational programs, and partnerships with local businesses and
                organizations.
              </p>
            </div>
            {/* Value 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f5cda7] rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                We believe in being open about our farming practices. That's why
                we offer farm tours and share detailed information about how we
                raise and care for our chickens.
              </p>
            </div>
            {/* Value 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f5cda7] rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously research and implement new technologies and
                methods to improve our farming practices, efficiency, and
                environmental impact.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}