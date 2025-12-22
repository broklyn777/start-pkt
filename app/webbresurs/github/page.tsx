// app/webbresurs/github/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import Card from "../../components/Card";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

function normalize(s: string): string {
  return s.toLowerCase().trim();
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

type LessonCard = {
  id: string;
  title: string;
  variant?: "default" | "info" | "warning";
  search: string;
  content: React.ReactNode;
};

export default function WebbresursGithubPage() {
  const [query, setQuery] = useState("");
  const q = normalize(query);

  const cards: LessonCard[] = useMemo(
    () => [
      {
        id: "core",
        title: "Core workflow (det du använder varje dag)",
        variant: "default",
        search: "core workflow status add commit push stage staged",
        content: (
          <>
            <p>
              Kör detta i terminalen i din projektmapp. Om du lär dig en sak i
              Git: lär dig detta flöde.
            </p>

            <div className="mt-4 space-y-4">
              <CommandRow label="1) Se vad som är ändrat" cmd="git status" />
              <CommandRow label="2) Lägg till ändringar" cmd="git add ." />
              <CommandRow
                label="3) Skapa commit"
                cmd='git commit -m "Beskriv vad du gjorde"'
              />
              <CommandRow label="4) Pusha (main)" cmd="git push origin main" />
            </div>
          </>
        ),
      },
      {
        id: "history",
        title: "Kolla historik",
        variant: "info",
        search: "historik log diff oneline history",
        content: (
          <>
            <p>
              Två kommandon du kommer älska när du vill förstå vad som hänt:
            </p>
            <div className="mt-4 space-y-4">
              <CommandRow
                label="Se senaste commits"
                cmd="git log --oneline -n 10"
              />
              <CommandRow
                label="Se status + vad som ändrats"
                cmd="git status && git diff"
              />
            </div>
          </>
        ),
      },
      {
        id: "branches",
        title: "Branches (proffsigare workflow)",
        variant: "info",
        search: "branch branches checkout pr pull request merge feature",
        content: (
          <>
            <p>
              När du gör en ny feature: skapa en branch. Då håller du main ren
              och kan jobba säkert.
            </p>

            <div className="mt-4 space-y-4">
              <CommandRow
                label="Skapa och hoppa till branch"
                cmd="git checkout -b feature/github-guide"
              />
              <CommandRow
                label="Pusha branchen första gången"
                cmd="git push -u origin feature/github-guide"
              />
              <CommandRow label="Se vilka branches du har" cmd="git branch" />
            </div>

            <p className="mt-3">
              Sedan gör du en Pull Request på GitHub och merge:ar när det känns
              bra.
            </p>
          </>
        ),
      },
      {
        id: "rescue",
        title: "Rädda dig när det blir fel",
        variant: "warning",
        search: "rädda restore staged unstage amend reset revert conflict",
        content: (
          <>
            <p>
              Det viktigaste: panika inte. Kolla alltid{" "}
              <strong>git status</strong> först.
            </p>

            <div className="mt-4 space-y-4">
              <CommandRow
                label="Ångra ändringar i en fil (innan commit)"
                cmd="git restore path/to/file"
              />
              <CommandRow
                label="Ta bort från staged (om du råkade git add)"
                cmd="git restore --staged path/to/file"
              />
              <CommandRow
                label="Ändra senaste commit-meddelande"
                cmd='git commit --amend -m "Nytt meddelande"'
              />
            </div>

            <p className="mt-3">
              (Vi kan lägga till “reset/revert” och merge conflicts när du är
              bekväm med grunderna.)
            </p>
          </>
        ),
      },
      {
        id: "exercise",
        title: "Övning (10 minuter)",
        variant: "info",
        search: "övning exercise träna test",
        content: (
          <ol className="list-decimal list-inside space-y-2">
            <li>Gör en liten ändring i en text på sidan.</li>
            <li>
              Kör <code className="font-mono">git status</code>.
            </li>
            <li>
              Kör <code className="font-mono">git add .</code>.
            </li>
            <li>
              Kör{" "}
              <code className="font-mono">
                git commit -m &quot;Test commit&quot;
              </code>
              .
            </li>
            <li>
              Kör <code className="font-mono">git push</code>.
            </li>
          </ol>
        ),
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    if (!q) return cards;
    return cards.filter(
      (c) => normalize(c.search).includes(q) || normalize(c.title).includes(q)
    );
  }, [cards, q]);

  return (
    <PageShell
      title="GitHub"
      description="En praktisk guide: commit, push, branches och hur du räddar dig när något blir fel."
      breadcrumb={[
        { label: "Hem", href: "/" },
        { label: "Webbresurser", href: "/webbresurs" },
        { label: "GitHub" },
      ]}
    >
      <div className="space-y-6 mb-8">
        <Card title="Sök i guiden">
          <label className="block text-sm font-semibold text-gray-200">
            Sök
          </label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Ex: "commit", "push", "branch", "restore"...'
            className={cn(
              "mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none",
              "border-gray-600 bg-gray-700 text-gray-100 placeholder:text-gray-400",
              "focus:ring-2 focus:ring-gray-500/40"
            )}
          />
          {q ? (
            <p className="mt-2 text-sm text-gray-400">
              Visar resultat för:{" "}
              <span className="font-semibold text-gray-300">{query}</span>
            </p>
          ) : (
            <p className="mt-2 text-sm text-gray-400">
              Tips: prova ord som <span className="text-gray-300">commit</span>,{" "}
              <span className="text-gray-300">push</span>,{" "}
              <span className="text-gray-300">branch</span>,{" "}
              <span className="text-gray-300">restore</span>.
            </p>
          )}
        </Card>

        {filtered.length === 0 ? (
          <Card title="Inga träffar" variant="warning">
            <p>
              Hittade inget på <strong>{query}</strong>. Prova ord som{" "}
              <span className="text-gray-200">commit</span>,{" "}
              <span className="text-gray-200">push</span>,{" "}
              <span className="text-gray-200">branch</span> eller{" "}
              <span className="text-gray-200">restore</span>.
            </p>
          </Card>
        ) : null}

        {filtered.map((c) => (
          <Card key={c.id} title={c.title} variant={c.variant ?? "default"}>
            {c.content}
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <Link
          href="/webbresurs/vscode-guide"
          className="text-indigo-400 hover:underline"
        >
          ← Föregående: VS Code
        </Link>
        <Link href="/webbresurs" className="text-indigo-400 hover:underline">
          Till Webbresurser →
        </Link>
      </div>
    </PageShell>
  );
}
