export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
        Vi bygger moderna digitala lösningar
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Snabba, skalbara och professionellt utvecklade webbapplikationer med
        fokus på användarupplevelse och prestanda.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/tjanster"
          className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Våra tjänster
        </a>

        <a
          href="/omoss"
          className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
        >
          Om oss
        </a>
      </div>
    </section>
  );
}
