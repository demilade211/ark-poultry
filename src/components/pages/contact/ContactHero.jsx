export default function ContactHero() {
  return (
    <section className="relative h-[400px] md:h-[500px] bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
    }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Get in touch with our team for inquiries, orders, or farm visits
            </p>
          </div>
        </div>
    </section>
  );
}