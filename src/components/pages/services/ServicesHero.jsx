export default function ServicesHero() {
  return (
    <section className="relative h-[400px] md:h-[500px] bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/img2.jpg)'
    }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Quality poultry products and services for businesses and
              individuals
            </p>
          </div>
        </div>
    </section>
  );
}