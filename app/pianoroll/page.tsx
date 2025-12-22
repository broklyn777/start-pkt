import Link from "next/link";
import PageShell from "../components/PageShell";
import Card from "../components/Card";

export default function PianoRollPage() {
  return (
    <PageShell
      title="Piano Roll"
      description="Piano Roll används för att rita noter och skapa melodier, ackord och basgångar i FL Studio."
      breadcrumb={[{ label: "Hem", href: "/" }, { label: "Piano Roll" }]}
    >
      <div className="space-y-6 mb-8">
        <Card title="Vad är Piano Roll?">
          <p>
            Piano Roll är ett visuellt sätt att arbeta med noter i FL Studio.
            Istället för att spela in musik live ritar du in exakt vilka toner
            som ska spelas, hur länge de ska hålla och när de ska spelas.
          </p>

          <p className="mt-3">
            Varje instrument i FL Studio har sin egen Piano Roll, vilket gör att
            du kan forma melodier och harmonier helt efter egen känsla.
          </p>
        </Card>

        <Card title="Så fungerar noter">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Tonhöjd:</strong> uppåt = ljusare ton, nedåt = mörkare ton
            </li>
            <li>
              <strong>Längd:</strong> längre not = längre ljud
            </li>
            <li>
              <strong>Timing:</strong> vänster → tidigare, höger → senare
            </li>
          </ul>
        </Card>

        <Card title="Bygg en melodi – steg för steg" variant="info">
          <ol className="list-decimal list-inside space-y-2">
            <li>Börja med några få noter.</li>
            <li>Fokusera på rytmen innan du justerar tonhöjd.</li>
            <li>Variera längd och placering för mer känsla.</li>
            <li>Lyssna ofta och justera efter behov.</li>
          </ol>
        </Card>

        <Card title="Ackord på ett enkelt sätt" variant="info">
          <p>
            Ett enkelt sätt att skapa ackord är att lägga tre noter ovanpå
            varandra. Flytta sedan hela formen upp eller ner för att testa nya
            ackord.
          </p>
        </Card>

        <Card title="Vanliga misstag" variant="warning">
          <ul className="list-disc list-inside space-y-2">
            <li>För många noter på en gång</li>
            <li>Alla noter har exakt samma längd</li>
            <li>Ingen variation i velocity</li>
            <li>Försöker göra allt perfekt direkt</li>
          </ul>

          <p className="mt-3">
            Tänk på Piano Roll som ett skissblock – finslipning kommer senare.
          </p>
        </Card>
      </div>

      {/* Föregående / Nästa */}
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
