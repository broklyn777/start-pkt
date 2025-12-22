"use client";

import React, { useState } from "react";
import PageShell from "../../components/PageShell";
import Card from "../../components/Card";

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

export default function WebbresursGithubPage() {
  return (
    <PageShell
      title="GitHub"
      description="En praktisk guide: commit, push, branches och hur du räddar dig när något blir fel , ok."
      breadcrumb={[
        { label: "Hem", href: "/" },
        { label: "Webbresurser", href: "/webbresurs" },
        { label: "GitHub" },
      ]}
    >
      <div className="space-y-6 mb-8">
        <Card title="Core workflow (det du använder varje dag)">
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
        </Card>

        <Card title="Kolla historik" variant="info">
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
        </Card>

        <Card title="Branches (proffsigare workflow)" variant="info">
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
        </Card>

        <Card title="Rädda dig när det blir fel" variant="warning">
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
            (Vi kan lägga till “reset/revert” när du är bekväm med grunderna.)
          </p>
        </Card>

        <Card title="Övning (10 minuter)" variant="info">
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
        </Card>
      </div>
    </PageShell>
  );
}
