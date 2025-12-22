"use client";

import React, { useState } from "react";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 900);
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className={cn(
        "rounded-xl border px-3 py-1 text-sm transition",
        "border-gray-600 bg-gray-700 text-gray-100 hover:bg-gray-600"
      )}
      aria-label={`Kopiera: ${value}`}
      title="Kopiera"
    >
      {copied ? "Kopierad" : "Kopiera"}
    </button>
  );
}

function CommandRow({ label, cmd }: { label: string; cmd: string }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-xl border border-gray-600 bg-gray-800 p-4">
      <div className="min-w-0">
        <div className="text-sm font-semibold text-gray-200">{label}</div>
        <code className="mt-2 block whitespace-pre-wrap break-words font-mono text-sm text-gray-100">
          {cmd}
        </code>
      </div>
      <CopyButton value={cmd} />
    </div>
  );
}

export default function WebbresursGithub() {
  return (
    <main className="min-h-screen bg-gray-800 text-gray-100">
      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <header className="mb-10 space-y-3 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            GitHub – snabb guide
          </h1>
          <p className="text-gray-300">
            En enkel workflow för att spara dina ändringar, skapa en commit och
            pusha upp till GitHub.
          </p>
        </header>

        <div className="space-y-6">
          <section className="rounded-xl border border-gray-600 bg-gray-700 p-6">
            <h2 className="text-xl font-semibold mb-2">Standard-workflow</h2>
            <p className="text-gray-300">
              Kör detta i terminalen i din projektmapp. Det här är den
              vanligaste rutinen.
            </p>

            <div className="mt-4 space-y-4">
              <CommandRow label="1) Se vad som är ändrat" cmd="git status" />
              <CommandRow label="2) Lägg till ändringar" cmd="git add ." />
              <CommandRow
                label="3) Skapa commit"
                cmd='git commit -m "Add Piano Roll page with breadcrumb and navigation"'
              />
              <CommandRow
                label="4) Pusha till GitHub (main)"
                cmd="git push origin main"
              />
            </div>
          </section>

          <section className="rounded-xl border border-blue-700 bg-blue-900/40 p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              💡 Tips
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Små commits är lättare att förstå och backa.</li>
              <li>Skriv commit-meddelanden som beskriver vad som ändrades.</li>
              <li>
                Om push klagar: kolla vilken branch du är på med{" "}
                <code className="font-mono">git branch</code>.
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-yellow-700 bg-yellow-900/40 p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              ⚠️ Vanliga fel
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>
                <strong>“nothing to commit”</strong> → du har inga ändringar
                (eller glömde spara filer).
              </li>
              <li>
                <strong>Fel branch</strong> → kör{" "}
                <code className="font-mono">git branch</code> och pusha den du
                står på.
              </li>
              <li>
                <strong>Push nekas</strong> → ibland behöver du först hämta:{" "}
                <code className="font-mono">git pull</code>.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
