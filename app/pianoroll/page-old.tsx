import Link from "next/link";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import ResourceLink from "../components/ResourceLink";

export default function PianoRollPage() {
  return (
    <PageShell
      title="Piano Roll"
      description="Piano Roll är där du ritar in noter och gör melodier, ackord och basgångar i FL Studio."
      breadcrumb={[{ label: "Hem", href: "/" }, { label: "Piano Roll" }]}
    >
      <div className="space-y-6 mb-8">
        <Card title="Vad är Piano Roll?">
          <p>
            Piano Roll är som ett rutnät där du placerar noter. Tänk att du
            bygger en melodi genom att lägga ut “block” på olika toner och olika
            längd.
          </p>
        </Card>

        <Card title="3 saker att testa direkt" variant="info">
          <ol className="list-decimal list-inside space-y-2">
            <li>Öppna Piano Roll för ett instrument (t.ex. ett piano).</li>
            <li>Rita in 4–8 noter som en enkel melodi.</li>
            <li>Flytta en not upp/ner och lyssna på skillnaden.</li>
          </ol>
        </Card>

        <Card title="Tips för nybörjare" variant="warning">
          <p>
            Håll det enkelt i början. Få en kort melodi att låta bra innan du
            gör den lång. Många noter betyder inte automatiskt en bättre idé.
          </p>
        </Card>
      </div>
      <Card title="Fördjupning & resurser">
        <div className="space-y-4">
          <ResourceLink
            type="manual"
            title="FL Studio – Piano Roll (officiell manual)"
            description="Image-Lines officiella genomgång av Piano Roll och dess funktioner."
            href="https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/pianoroll.htm"
          />

          <ResourceLink
            type="video"
            title="Varför finns det bara 12 toner i musik? – YT video"
            description="En lättförståelig förklaring till varför musik använder 12 toner och hur det påverkar hur vi skriver och hör musik."
            href="https://www.youtube.com/watch?v=lvmzgVtZtUQ"
          />
        </div>
      </Card>

      <div className="flex items-center justify-between">
        <Link href="/playlist" className="text-indigo-400 hover:underline">
          ← Föregående: Playlist
        </Link>
        <Link href="/mixer" className="text-indigo-400 hover:underline">
          Nästa: Mixer →
        </Link>
      </div>
    </PageShell>
  );
}
