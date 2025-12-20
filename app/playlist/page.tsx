import Link from "next/link";
import PageShell from "../components/PageShell";
import Card from "../components/Card";

export default function PlaylistPage() {
  return (
    <PageShell
      title="Playlist"
      description="Playlist är där du bygger hela låten i FL Studio genom att placera ut patterns, ljud och automation över tid."
      breadcrumb={[{ label: "Hem", href: "/" }, { label: "Playlist" }]}
    >
      <div className="space-y-6 mb-8">
        <Card title="Vad är Playlist?">
          <p>
            Tänk Playlist som en tidslinje. Du lägger ut patterns och ljud från
            vänster till höger för att bygga en hel låt.
          </p>
        </Card>

        <Card title="3 saker att testa direkt" variant="info">
          <ol className="list-decimal list-inside space-y-2">
            <li>Skapa ett enkelt beat i Channel Rack.</li>
            <li>Dra in patternet i Playlist och duplicera det.</li>
            <li>Bygg en enkel struktur: intro, drop och avslut.</li>
          </ol>
        </Card>

        <Card title="Tips för nybörjare" variant="warning">
          <p>
            Fastna inte för länge i detaljer. En tydlig struktur är viktigare än
            perfekta ljud i början.
          </p>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <Link href="/channelrack" className="text-indigo-400 hover:underline">
          ← Föregående: Channel Rack
        </Link>
        <Link href="/mixer" className="text-indigo-400 hover:underline">
          Nästa: Mixer →
        </Link>
      </div>
    </PageShell>
  );
}
