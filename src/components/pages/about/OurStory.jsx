import SectionTitle from "@/components/ui/SectionTitle";

export default function OurStory() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Story" subtitle="From humble beginnings to industry leader" />
              <p className="text-gray-600 mb-6">
                FarmFresh Poultry began in 1995 when the Doe family purchased a
                small 50-acre property with the dream of creating a sustainable
                chicken farm. Starting with just 200 chickens, John and Mary Doe
                were committed to raising poultry in a humane, environmentally
                responsible way.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, our farm has grown to span over 200 acres, but
                our core values remain the same. We believe that happy, healthy
                chickens produce the best eggs and meat, and that sustainable
                farming practices are not just good for the environment, but
                good for business too.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be a leading supplier of premium poultry
                products to restaurants, grocery stores, and individual
                consumers throughout the region. Our commitment to quality,
                sustainability, and animal welfare continues to guide everything
                we do.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/images/img9.jpg" alt="Our farm history" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
    </section>
  );
}