import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Card from "@/components/ui/Card";

export default function MixerPage() {
  return (
    <PageShell
      title="Mixer"
      description="Mixern är där du justerar volym, effekter och balans mellan alla ljud i projektet."
      breadcrumb={[{ label: "Hem", href: "/" }, { label: "Mixer" }]}
    >
      <div className="space-y-6 mb-8">
        <Card title="Vad är Mixern?">
          <p>
            Varje ljud kan skickas till en mixer-kanal. Där kan du justera
            volym, panorering och lägga på effekter som EQ och reverb.
          </p>
        </Card>

        <Card title="3 saker att testa direkt " variant="info">
          <ol className="list-decimal list-inside space-y-2">
            <li>Sänk volymen så inget klipper.</li>
            <li>Lägg en EQ och testa små justeringar.</li>
            <li>Jämför torrt ljud med reverb.</li>
          </ol>
        </Card>

        <Card title="Tips för nybörjare " variant="warning">
          <p>Börja alltid med volymbalans innan du lägger många effekter.</p>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/fl-studio/pianoroll"
          className="text-indigo-400 hover:underline"
        >
          ← Föregående: Piano roll
        </Link>
        <Link href="/" className="text-indigo-400 hover:underline">
          Hem →
        </Link>
      </div>
    </PageShell>
  );
}
