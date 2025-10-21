export default function ContactMap() {
  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Our Location
          </h2>
          <div className="h-96 bg-gray-200 overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=0" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" title="Office Location Map"></iframe>
          </div>
        </div>
    </section>
  );
}