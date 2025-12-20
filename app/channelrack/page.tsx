import Link from "next/link";
import PageShell from "../components/PageShell";
import Card from "../components/Card";

export default function ChannelRackPage() {
  return (
    <PageShell
      title="Channel Rack"
      description="Channel Rack är ofta det första du använder i FL Studio. Här skapar du beats och mönster som sedan används i Playlist."
      breadcrumb={[{ label: "Hem", href: "/" }, { label: "Channel Rack" }]}
    >
      <div className="space-y-6 mb-8">
        <Card title="Vad är Channel Rack?">
          <p>Channel Rack är där du skapar beats och mönster.</p>
        </Card>

        <Card title="3 saker att testa direkt" variant="info">
          <ol className="list-decimal list-inside space-y-2">
            <li>Lägg till en kick.</li>
            <li>Lägg till en snare.</li>
            <li>Spela upp och lyssna.</li>
          </ol>
        </Card>

        <Card title="Vanligt nybörjarmisstag" variant="warning">
          <p>
            Många fastnar för länge i Channel Rack istället för att gå vidare
            till Playlist.
          </p>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <Link href="/" className="text-indigo-400 hover:underline">
          ← Hem
        </Link>
        <Link href="/playlist" className="text-indigo-400 hover:underline">
          Nästa: Playlist →
        </Link>
      </div>
    </PageShell>
  );
}
