import Card from "../components/Card";

export default function PianoRollPage() {
  return (
    <main className="min-h-screen bg-gray-800 text-gray-100">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Piano Roll
        </h1>

        <p className="text-center text-gray-300 mb-10">
          Här ritar du noter och bygger melodier, ackord och basgångar – helt
          utan att behöva kunna spela piano.
        </p>

        {/* Innehåll / Ankare */}
        <Card title="Innehåll">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a href="#vad-ar" className="hover:underline">
                Vad är Piano Roll?
              </a>
            </li>
            <li>
              <a href="#noter" className="hover:underline">
                Så fungerar noter
              </a>
            </li>
            <li>
              <a href="#verktyg" className="hover:underline">
                Grundläggande verktyg
              </a>
            </li>
            <li>
              <a href="#melodi" className="hover:underline">
                Bygg en melodi steg för steg
              </a>
            </li>
            <li>
              <a href="#ackord" className="hover:underline">
                Ackord på ett enkelt sätt
              </a>
            </li>
            <li>
              <a href="#timing" className="hover:underline">
                Timing, groove &amp; velocity
              </a>
            </li>
            <li>
              <a href="#misstag" className="hover:underline">
                Vanliga misstag
              </a>
            </li>
            <li>
              <a href="#nasta" className="hover:underline">
                Nästa steg
              </a>
            </li>
          </ul>
        </Card>

        <div className="mt-8 space-y-8">
          <section id="vad-ar" className="scroll-mt-24">
            <Card title="Vad är Piano Roll?">
              <p>
                Piano Roll är ett visuellt sätt att arbeta med noter i FL
                Studio. Istället för att spela in musik live ritar du in exakt
                vilka toner som ska spelas, hur länge de ska hålla och när de
                ska spelas.
              </p>

              <p className="mt-3">
                Varje instrument i FL Studio har sin egen Piano Roll, vilket gör
                att du kan forma varje del av musiken exakt så som du vill ha
                den.
              </p>
            </Card>
          </section>

          <section id="noter" className="scroll-mt-24">
            <Card title="Så fungerar noter">
              <ul className="space-y-2">
                <li>
                  <strong>Tonhöjd:</strong> uppåt = ljusare ton, nedåt = mörkare
                  ton
                </li>
                <li>
                  <strong>Längd:</strong> längre not = längre ljud
                </li>
                <li>
                  <strong>Timing:</strong> vänster → tidigare, höger → senare
                </li>
              </ul>
            </Card>
          </section>

          <section id="verktyg" className="scroll-mt-24">
            <Card title="Grundläggande verktyg">
              <p>
                Du behöver inte kunna allt för att komma igång. Dessa verktyg
                räcker långt:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Draw / Paint – rita in noter</li>
                <li>Select – markera och flytta noter</li>
                <li>Delete – ta bort noter</li>
                <li>Zoom – se detaljer eller helhet</li>
                <li>Velocity – hur starkt noten spelas</li>
              </ul>
            </Card>
          </section>

          <section id="melodi" className="scroll-mt-24">
            <Card title="Bygg en melodi – steg för steg" variant="info">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Börja med få noter</li>
                <li>Fokusera på rytmen först</li>
                <li>Justera längd och placering</li>
                <li>Lyssna ofta och justera</li>
              </ol>
              <p className="mt-3">
                Piano Roll är perfekt för att testa idéer snabbt. Små ändringar
                kan göra stor skillnad.
              </p>
            </Card>
          </section>

          <section id="ackord" className="scroll-mt-24">
            <Card title="Ackord på ett enkelt sätt" variant="info">
              <p>
                Lägg tre noter ovanpå varandra och flytta hela “formen” upp
                eller ner för att skapa nya ackord. Enkelt men effektivt.
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Återanvänd samma form för flera ackord</li>
                <li>Testa att byta längd på vissa toner</li>
                <li>Håll det enkelt i början</li>
              </ul>
            </Card>
          </section>

          <section id="timing" className="scroll-mt-24">
            <Card title="Timing, groove & velocity">
              <p>
                Musik kan låta stelt om allt ligger perfekt på griden. Små
                variationer gör ofta melodin mer levande.
              </p>

              <p className="mt-3">
                <strong>Velocity</strong> styr hur starkt en not spelas. Testa
                att göra vissa noter lite svagare eller starkare.
              </p>

              <p className="mt-3">
                <strong>Timing</strong> kan också varieras. Att flytta en not
                lite före eller efter kan skapa mer “groove”. Överdriv inte –
                små justeringar räcker.
              </p>
            </Card>
          </section>

          <section id="misstag" className="scroll-mt-24">
            <Card title="Vanliga misstag" variant="warning">
              <ul className="list-disc pl-5 space-y-1">
                <li>För många noter på en gång</li>
                <li>Alla noter har exakt samma längd</li>
                <li>Ingen variation i velocity</li>
                <li>Försöker göra det perfekt direkt</li>
              </ul>
              <p className="mt-3">
                Tänk “skiss först” – du kan alltid finslipa senare.
              </p>
            </Card>
          </section>

          <section id="nasta" className="scroll-mt-24">
            <Card title="Nästa steg">
              <p>
                När du har skapat melodier och ackord i Piano Roll placerar du
                dem i <strong>Playlist</strong> för att bygga upp hela låten.
              </p>
            </Card>
          </section>
        </div>

        <p className="text-sm text-gray-400 mt-12 text-center">
          Denna sida är en förenklad och pedagogisk introduktion baserad på FL
          Studios officiella manual.
        </p>
      </div>
    </main>
  );
}
