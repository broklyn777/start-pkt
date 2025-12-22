// app/webbresurs/vscode-guide/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import Card from "../../components/Card";

type Shortcut = {
  id: string;
  title: string;
  keys: string;
  description: string;
  examples?: string[];
  tags: string[];
};

type Section = {
  id: string;
  title: string;
  intro?: string;
  items: Shortcut[];
};

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

function normalize(s: string): string {
  return s.toLowerCase().trim();
}

function highlightText(text: string, query: string): React.ReactNode {
  const q = normalize(query);
  if (!q) return text;

  const hay = text.toLowerCase();
  const idx = hay.indexOf(q);
  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);

  return (
    <>
      {before}
      <mark className="rounded bg-amber-200/70 px-1 text-amber-950">
        {match}
      </mark>
      {after}
    </>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState<boolean>(false);

  async function onCopy(): Promise<void> {
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

function KeyPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-2 py-1 font-mono text-sm text-gray-100">
      {children}
    </span>
  );
}

function ShortcutCard({
  title,
  keys,
  description,
  examples,
  tags,
  query,
}: Shortcut & { query: string }) {
  return (
    <div className="rounded-xl border border-gray-600 bg-gray-700 p-6 transition hover:bg-gray-600">
      <h3 className="text-base font-semibold leading-snug text-gray-100">
        {highlightText(title, query)}
      </h3>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <KeyPill>{highlightText(keys, query)}</KeyPill>
        <CopyButton value={keys} />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-300">
        {highlightText(description, query)}
      </p>

      {examples?.length ? (
        <div className="mt-4 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-300">
            Exempel
          </div>
          <ul className="space-y-2">
            {examples.map((ex, i) => (
              <li key={i} className="flex items-center justify-between gap-2">
                <code className="min-w-0 flex-1 truncate rounded-lg border border-gray-600 bg-gray-800 px-2 py-1 text-xs text-gray-100">
                  {highlightText(ex, query)}
                </code>
                <CopyButton value={ex} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-gray-600 bg-gray-800 px-2 py-0.5 text-xs text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const SECTIONS: Section[] = [
  {
    id: "file-search",
    title: "Sök i aktuell fil",
    intro: "När du vet att texten finns i filen du har öppen.",
    items: [
      {
        id: "find-in-file",
        title: "Hitta i fil",
        keys: "⌘F",
        description: "Sök direkt i den fil du står i.",
        tags: ["sök", "fil"],
      },
      {
        id: "replace-in-file",
        title: "Ersätt i fil",
        keys: "⌥⌘F",
        description: "Ersätt text i nuvarande fil (bra för snabb refactor).",
        tags: ["ersätt", "fil"],
      },
      {
        id: "next-prev-match",
        title: "Nästa / föregående träff",
        keys: "Enter / Shift+Enter",
        description: "Hoppa mellan träffar i sökningen i filen.",
        tags: ["sök", "navigering"],
      },
    ],
  },
  {
    id: "workspace-search",
    title: "Sök i hela projektet",
    intro:
      "Huvudtricket för att hitta vilken fil/sida en mening eller kodsnutt finns i.",
    items: [
      {
        id: "find-in-workspace",
        title: "Sök i hela workspace",
        keys: "⇧⌘F",
        description:
          "Sök i hela projektet och få lista på filer + rader där texten matchar.",
        examples: [
          '"min exakta mening"',
          "piano roll",
          "export default function",
        ],
        tags: ["projekt", "sök"],
      },
      {
        id: "replace-in-workspace",
        title: "Ersätt i hela workspace",
        keys: "⇧⌘H",
        description:
          "Ersätt över flera filer. Använd med omtanke (kolla träfflistan först).",
        tags: ["projekt", "ersätt"],
      },
      {
        id: "search-filters",
        title: "Filter (include/exclude)",
        keys: "Sökpanelen: Files to include / exclude",
        description:
          "Begränsa söket till mappar eller filtyper för mindre brus.",
        examples: [
          "app/**",
          "src/**",
          "**/*.tsx",
          "app/**/page.tsx",
          "node_modules/**",
          ".next/**",
        ],
        tags: ["filter", "next.js"],
      },
    ],
  },
  {
    id: "symbols",
    title: "Symboler (funktioner/komponenter)",
    intro: "Hoppa mellan komponenter och funktioner utan att scrolla.",
    items: [
      {
        id: "symbols-in-file",
        title: "Symboler i fil",
        keys: "⇧⌘O",
        description: "Hoppa till funktion/komponent/klass i nuvarande fil.",
        tags: ["symboler", "navigering"],
      },
      {
        id: "symbols-in-project",
        title: "Symboler i projekt",
        keys: "⌘T",
        description:
          "Sök bland symboler i hela projektet (t.ex. komponentnamn).",
        tags: ["symboler", "projekt"],
      },
    ],
  },
  {
    id: "definition-references",
    title: "Definition & referenser",
    intro: "Svarar på: “Var används det här?” och “Var kommer det här ifrån?”",
    items: [
      {
        id: "go-to-definition",
        title: "Gå till definition",
        keys: "F12 (ibland fn+F12)",
        description: "Hoppa till där funktionen/komponenten är definierad.",
        tags: ["typescript", "navigering"],
      },
      {
        id: "peek-definition",
        title: "Peek definition",
        keys: "⌥F12",
        description: "Förhandsvisa definition i en panel utan att lämna filen.",
        tags: ["typescript", "workflow"],
      },
      {
        id: "find-references",
        title: "Hitta alla referenser",
        keys: "⇧F12",
        description: "Visa alla ställen där symbolen används.",
        tags: ["refactor", "spåra användning"],
      },
      {
        id: "go-to-implementation",
        title: "Gå till implementation",
        keys: "⌘F12",
        description:
          "Hoppa till implementationer (nyttigt med interfaces/typer).",
        tags: ["typescript", "navigering"],
      },
    ],
  },
  {
    id: "go-to-file",
    title: "Hitta filer snabbt",
    intro: "Bra för att hitta Next.js routes/pages blixtsnabbt.",
    items: [
      {
        id: "quick-open",
        title: "Öppna fil via namn",
        keys: "⌘P",
        description: "Skriv filnamn eller delar av path för att öppna direkt.",
        examples: ["pianoroll", "page.tsx", "app/webbresurs/page.tsx:40"],
        tags: ["next.js", "navigering"],
      },
      {
        id: "quick-open-tricks",
        title: "⌘P-tricks",
        keys: "I ⌘P: :rad, @symbol, #sök",
        description:
          "Hoppa till rad, symbol eller sök i fil utan extra menyer.",
        examples: ["page.tsx:123", "@WebbresursVscode", "#export default"],
        tags: ["workflow", "snabbt"],
      },
    ],
  },
  {
    id: "editing-power",
    title: "Redigering & multi-cursor",
    intro: "För snabba ändringar över flera ställen.",
    items: [
      {
        id: "multi-cursor-click",
        title: "Flera markörer (klick)",
        keys: "⌥ + klick",
        description:
          "Placera flera markörer och skriv på flera rader samtidigt.",
        tags: ["edit", "multi-cursor"],
      },
      {
        id: "select-next-occurrence",
        title: "Markera nästa förekomst",
        keys: "⌘D",
        description:
          "Markera nästa matchande ord/urval (bygg upp multi-cursor).",
        tags: ["edit", "refactor"],
      },
      {
        id: "select-all-occurrences",
        title: "Markera alla förekomster",
        keys: "⇧⌘L",
        description: "Markera alla matchningar och redigera samtidigt.",
        tags: ["edit", "refactor"],
      },
      {
        id: "toggle-word-wrap",
        title: "Toggle word wrap",
        keys: "⌥Z",
        description: "Slå på/av radbrytning (skönt i långa rader/loggar).",
        tags: ["läsbarhet"],
      },
    ],
  },
];

export default function WebbresursVscodePage() {
  const [query, setQuery] = useState<string>("");
  const [onlyNextJs, setOnlyNextJs] = useState<boolean>(false);

  const filteredSections = useMemo<Section[]>(() => {
    const q = normalize(query);

    const matchItem = (it: Shortcut): boolean => {
      const hay = [
        it.title,
        it.keys,
        it.description,
        ...(it.examples ?? []),
        ...(it.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();

      if (onlyNextJs) {
        const hasNext = it.tags.some((t) => normalize(t).includes("next"));
        if (!hasNext) return false;
      }

      return !q || hay.includes(q);
    };

    return SECTIONS.map((s) => ({
      ...s,
      items: s.items.filter(matchItem),
    })).filter((s) => s.items.length > 0);
  }, [query, onlyNextJs]);

  const totalMatches = useMemo<number>(() => {
    return filteredSections.reduce((acc, s) => acc + s.items.length, 0);
  }, [filteredSections]);

  const nextJsCount = useMemo<number>(() => {
    const all = SECTIONS.flatMap((s) => s.items);
    return all.filter((x) => x.tags.some((t) => normalize(t).includes("next")))
      .length;
  }, []);

  return (
    <PageShell
      title="VS Code – smart sök & navigation"
      description="Lathund för att hitta vilken fil/sida en mening eller kodsnutt finns i, hoppa till definitioner och se var kod används."
      breadcrumb={[
        { label: "Hem", href: "/" },
        { label: "Webbresurser", href: "/webbresurs" },
        { label: "VS Code" },
      ]}
    >
      <div className="mb-10 space-y-4">
        <p className="text-gray-300">
          Hitta snabbt var saker ligger i projektet, hoppa mellan symboler och
          förstå kodens kopplingar utan att scrolla ihjäl dig.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-200">
              Sök i lathunden
            </label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Ex: "page.tsx", ⇧⌘F, referenser, app/** ...'
              className={cn(
                "mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none",
                "border-gray-600 bg-gray-700 text-gray-100 placeholder:text-gray-400",
                "focus:ring-2 focus:ring-gray-500/40"
              )}
            />
          </div>

          <div className="flex flex-col justify-end gap-3">
            <div className="flex items-center justify-between rounded-xl border border-gray-600 bg-gray-700 px-4 py-3 text-sm">
              <span className="text-gray-200">Träffar</span>
              <span className="font-semibold">{totalMatches}</span>
            </div>

            <button
              type="button"
              onClick={() => setOnlyNextJs((v) => !v)}
              className={cn(
                "rounded-xl border px-4 py-3 text-sm transition",
                "border-gray-600 bg-gray-700 text-gray-100 hover:bg-gray-600"
              )}
              title="Visa bara Next.js-relaterade tips"
            >
              {onlyNextJs
                ? "Visar: Next.js"
                : `Filtrera: Next.js (${nextJsCount})`}
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {filteredSections.map((section) => (
          <section key={section.id} className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-100">
                {section.title}
              </h2>
              {section.intro ? (
                <p className="mt-1 text-sm text-gray-300">{section.intro}</p>
              ) : null}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {section.items.map((it) => (
                <ShortcutCard key={it.id} {...it} query={query} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 space-y-6">
        <Card title="Snabbkombo">
          <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
            <li>
              Hitta text i projektet: <KeyPill>⇧⌘F</KeyPill>
            </li>
            <li>
              Se var en komponent används: <KeyPill>⇧F12</KeyPill>
            </li>
            <li>
              Öppna filer snabbt: <KeyPill>⌘P</KeyPill>
            </li>
          </ul>
        </Card>

        <div className="flex items-center justify-between">
          <Link href="/webbresurs" className="text-indigo-400 hover:underline">
            ← Till Webbresurser
          </Link>
          <Link
            href="/webbresurs/github"
            className="text-indigo-400 hover:underline"
          >
            Nästa: GitHub →
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
