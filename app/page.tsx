// export default function Home() {
//   return (
//     <main className="p-10 text-3xl font-bold">
//       Hello Next.js 16 + Tailwind 4! 🎉
//     </main>
//   );
// }
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <ServicesSection />
    </main>
  );
}
