// app/webbresurs/github/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import Card from "../../components/Card";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

function normalize(s: string): string {
  return (s ?? "").toLowerCase().trim();
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

type LessonCategory =
  | "Core"
  | "Workflow"
  | "Branches"
  | "Troubleshooting"
  | "Övning";

type LessonCard = {
  id: string;
  title: string;
  category: LessonCategory;
  variant?: "default" | "info" | "warning";
  search: string; // extra sökord
  content: React.ReactNode;
};

function CategoryBadge({ category }: { category: LessonCategory }) {
  const map: Record<LessonCategory, string> = {
    Core: "border-emerald-700 bg-emerald-900/30 text-emerald-200",
    Workflow: "border-sky-700 bg-sky-900/30 text-sky-200",
    Branches: "border-indigo-700 bg-indigo-900/30 text-indigo-200",
    Troubleshooting: "border-rose-700 bg-rose-900/30 text-rose-200",
    Övning: "border-amber-700 bg-amber-900/30 text-amber-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold",
        map[category]
      )}
    >
      {category}
    </span>
  );
}

export default function WebbresursGithubPage() {
  const [query, setQuery] = useState("");
  const q = normalize(query);

  // Stabil version: cards är en vanlig konstant (inte useMemo)
  const cards: LessonCard[] = [
    {
      id: "core",
      title: "Core workflow (det du använder varje dag)",
      category: "Core",
      variant: "default",
      search: "status add commit push stage staged",
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
      category: "Workflow",
      variant: "info",
      search: "log diff oneline history historik",
      content: (
        <>
          <p>Två kommandon du kommer älska när du vill förstå vad som hänt:</p>
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
      category: "Branches",
      variant: "info",
      search: "branch branches checkout -b pr pull request merge feature",
      content: (
        <>
          <p>
            När du gör en ny feature: skapa en branch. Då håller du main ren och
            kan jobba säkert.
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
      id: "uptodate",
      title: 'Varför händer inget? ("Everything up-to-date")',
      category: "Troubleshooting",
      variant: "warning",
      search:
        "everything up-to-date up to date push main branch merge feature vercel deploy",
      content: (
        <>
          <p>
            Om du kör <code className="font-mono">git push origin main</code>{" "}
            och får <strong>Everything up-to-date</strong> betyder det att{" "}
            <strong>main inte har några nya commits</strong> att pusha.
          </p>

          <p className="mt-3">
            Vanligaste orsaken: dina ändringar ligger på en feature-branch, men
            du försöker pusha main.
          </p>

          <div className="mt-4 space-y-4">
            <CommandRow label="Kolla vilken branch du är på" cmd="git branch" />
            <CommandRow
              label="Merga din feature till main"
              cmd="git checkout main && git merge feature/github-guide"
            />
            <CommandRow
              label="Pusha main (då uppdateras GitHub/Vercel)"
              cmd="git push origin main"
            />
          </div>
        </>
      ),
    },
    {
      id: "rescue",
      title: "Rädda dig när det blir fel",
      category: "Troubleshooting",
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
            (Vi kan lägga till reset/revert och merge conflicts när grunderna
            känns trygga.)
          </p>
        </>
      ),
    },
    {
      id: "exercise",
      title: "Övning (10 minuter)",
      category: "Övning",
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
  ];

  // Stabil filtrering (alltid en array)
  const filtered: LessonCard[] = !q
    ? cards
    : cards.filter((c) => {
        const hay = `${c.title} ${c.category} ${c.search}`.toLowerCase();
        return hay.includes(q);
      });

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
            placeholder='Ex: "commit", "push", "branches", "troubleshooting"...'
            className={cn(
              "mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none",
              "border-gray-600 bg-gray-700 text-gray-100 placeholder:text-gray-400",
              "focus:ring-2 focus:ring-gray-500/40"
            )}
          />

          {q ? (
            <p className="mt-2 text-sm text-gray-400">
              Visar resultat för:{" "}
              <span className="font-semibold text-gray-300">{query}</span>{" "}
              <span className="ml-2">({filtered.length} st)</span>
            </p>
          ) : (
            <p className="mt-2 text-sm text-gray-400">
              Tips: prova <span className="text-gray-300">commit</span>,{" "}
              <span className="text-gray-300">push</span>,{" "}
              <span className="text-gray-300">branches</span>,{" "}
              <span className="text-gray-300">troubleshooting</span>.
            </p>
          )}
        </Card>

        {filtered.length === 0 ? (
          <Card title="Inga träffar" variant="warning">
            <p>
              Hittade inget på <strong>{query}</strong>. Prova ord som{" "}
              <span className="text-gray-200">commit</span>,{" "}
              <span className="text-gray-200">push</span>,{" "}
              <span className="text-gray-200">branch</span>,{" "}
              <span className="text-gray-200">restore</span> eller{" "}
              <span className="text-gray-200">troubleshooting</span>.
            </p>
          </Card>
        ) : null}

        {filtered.map((c) => (
          <Card key={c.id} title={c.title} variant={c.variant ?? "default"}>
            <div className="mb-3">
              <CategoryBadge category={c.category} />
            </div>
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
