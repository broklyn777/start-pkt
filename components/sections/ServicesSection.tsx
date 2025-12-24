export default function ServicesSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        Våra tjänster
      </h2>
      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
        Vi erbjuder moderna och flexibla lösningar anpassade efter dina behov.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kort 1 */}
        <div className="p-8 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-900">
            Webbutveckling
          </h3>
          <p className="mt-3 text-gray-600">
            Moderna och snabba webbapplikationer byggda med den senaste
            tekniken.
          </p>
        </div>

        {/* Kort 2 */}
        <div className="p-8 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-900">Design & UX</h3>
          <p className="mt-3 text-gray-600">
            Genomtänkt design som skapar bättre användarupplevelser.
          </p>
        </div>

        {/* Kort 3 */}
        <div className="p-8 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-900">
            Strategi & Rådgivning
          </h3>
          <p className="mt-3 text-gray-600">
            Vi guidar dig i rätt riktning för att nå dina digitala mål.
          </p>
        </div>
      </div>
    </section>
  );
}
