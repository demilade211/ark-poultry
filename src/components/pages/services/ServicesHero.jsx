export default function ServicesHero() {
  return (
    <section className="relative h-[400px] md:h-[500px] bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/img2.jpg)'
    }}>
        <div className="absolute p-12 inset-0 flex items-center">
          <div className="text-left text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
            <span className="flex items-center gap-2 text-xl md:text-2xl max-w-2xl mx-auto">
              <Link href="/" className="text-[#d57315] hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <p className="text-grreen-700">
                Services
              </p>
            </span>
          </div>
        </div>
    </section>
  );
}