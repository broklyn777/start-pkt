import Link from "next/link";
import PageShell from "../components/PageShell";
import Card from "../components/Card";

export default function WebbresursIndexPage() {
  return (
    <PageShell
      title="Webbresurser"
      description="Små guider som hjälper dig bygga och publicera projektet: VS Code, GitHub och mer."
      breadcrumb={[{ label: "Hem", href: "/" }, { label: "Webbresurser" }]}
    >
      <div className="space-y-6 mb-8">
        <Link href="/webbresurs/vscode-guide" className="block">
          <Card title="VS Code – smart sök & navigation" variant="info">
            <p>
              Lathund för att hitta filer, hoppa till definitioner och se var
              kod används. Med sök och filter.
            </p>
          </Card>
        </Link>

        <Link href="/webbresurs/github" className="block">
          <Card title="GitHub – commit, push & workflow" variant="info">
            <p>
              Praktisk guide för daglig git-rutin, branches och hur du räddar
              dig när något blir fel.
            </p>
          </Card>
        </Link>

        {/* Placeholder för framtida guider */}
        <Card title="Fler resurser kommer" variant="default">
          <p>
            Vi fyller på med fler guider (t.ex. deploy/Vercel, Next.js routing,
            TypeScript-tips) när projektet växer.
          </p>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <Link href="/" className="text-indigo-400 hover:underline">
          ← Tillbaka: Hem
        </Link>
      </div>
    </PageShell>
  );
}
