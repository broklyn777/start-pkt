import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-800 text-gray-100">
      <div className="max-w-2xl w-full px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Enkla tips för FL Studio
        </h1>

        <p className="text-center text-gray-300 mb-8">
          En enkel guide för dig som precis börjat med FL Studio.
        </p>

        <div className="space-y-6">
          <Link href="/fl-studio/channelrack" className="block">
            <section className="bg-gray-700 rounded-xl p-6 border border-gray-600 transition hover:bg-gray-600">
              <h2 className="text-xl font-semibold mb-2">1. Channel Rack</h2>
              <p className="text-gray-300">
                Channel Rack är där du lägger till trummor och instrument. Varje
                rad är ett ljud eller ett instrument.
              </p>
            </section>
          </Link>

          <Link href="/fl-studio/playlist" className="block">
            <section className="bg-gray-700 rounded-xl p-6 border border-gray-600 transition hover:bg-gray-600">
              <h2 className="text-xl font-semibold mb-2">2. Playlist</h2>
              <p className="text-gray-300">
                Playlist är där du bygger hela låten genom att placera ut
                mönster och ljud över tid.
              </p>
            </section>
          </Link>
          <Link href="/fl-studio/pianoroll" className="block">
            <section className="bg-gray-700 rounded-xl p-6 border border-gray-600 transition hover:bg-gray-600">
              <h2 className="text-xl font-semibold mb-2">3. Piano Roll</h2>
              <p className="text-gray-300">
                Här ritar du noter och bygger melodier, ackord och basgångar.
              </p>
            </section>
          </Link>
          <Link href="/fl-studio/mixer" className="block">
            <section className="bg-gray-700 rounded-xl p-6 border border-gray-600 transition hover:bg-gray-600">
              <h2 className="text-xl font-semibold mb-2">4. Mixer</h2>
              <p className="text-gray-300">
                I mixern justerar du volym, effekter och balans mellan alla ljud
                i projektet.
              </p>
            </section>
          </Link>
        </div>
        <section className="mt-12 pt-8 border-t border-gray-700">
          <h2 className="text-lg font-semibold mb-2 text-gray-200">
            🎧 Exempel
          </h2>

          <p className="text-sm text-gray-400 mb-4">
            Ett exempel på hur det kan låta när jag använder samma enkla
            workflow som beskrivs i guiden.
          </p>

          <div className="bg-gray-700 rounded-xl p-4 border border-gray-600">
            <iframe
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/track/3JhUkoqd7jLXxZEoIgaA49"
              width="100%"
              height="152"
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
