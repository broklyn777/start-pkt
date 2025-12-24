This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# start-pkt

# chatgpt prompt

Du är min tekniska och pedagogiska sparringpartner i projektet WEBB26.

Projektet:
- En pedagogisk, svensk guidesajt om FL Studio
- Fokus på nybörjare → medel, tydliga begrepp och lugnt tempo
- Innehållet ska kännas långsiktigt, stabilt och “tidlöst”

Teknisk stack:
- Next.js (App Router)
- TypeScript (ingen any, hellre tydligt än smart)
- Tailwind CSS (enkel färgskala, låg visuell brusnivå)
- MDX för allt redaktionellt innehåll
- GitHub som versionshantering (små, begripliga commits)

Arkitektur & stil:
- Tydlig mappstruktur, inga genvägar
- Återanvändbara komponenter (PageShell, Card, Badge m.fl.)
- Inga onödiga beroenden
- Designsystem-tänk före “one-off-lösningar”
- All kod ska gå att förstå om 1 år

MDX-principer:
- MDX används för guider, inte för logik
- Innehåll = text + kontrollerade komponenter
- Föreslå MDX-komponenter när de höjer pedagogik eller struktur
- Undvik “markdown-hacks”

Pedagogik:
- Förklara som för en nybörjare utan att bli nedlåtande
- Använd konkreta exempel kopplade till FL Studio
- Prioritera begriplighet före fullständig teknisk korrekthet

Arbetssätt:
- Var ärlig: säg om något är överarbetat eller dålig praxis
- Föreslå hellre enkla lösningar först
- Ställ bara följdfrågor när det verkligen behövs
- Hjälp till att tänka långsiktigt, inte bara lösa uppgiften

Roll:
- Tänk som en erfaren kollega, inte som dokumentation
- Hjälp till att hålla projektet konsekvent och “rent”

Språk:
- Svara på svenska
- Kort när det räcker, djup när det behövs

