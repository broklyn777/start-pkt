import type { ReactNode } from "react";
import Link from "next/link";

type PageShellProps = {
  title: string;
  description?: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  children: ReactNode;
};

export default function PageShell({
  title,
  description,
  breadcrumb,
  children,
}: PageShellProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-800 text-gray-100">
      <div className="max-w-2xl w-full px-6 py-12">
        {breadcrumb && (
          <nav className="text-sm text-gray-400 mb-4">
            {breadcrumb.map((item, index) => (
              <span key={index}>
                {item.href ? (
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {index < breadcrumb.length - 1 && " / "}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {description ? (
          <div className="text-gray-300 mb-6">{description}</div>
        ) : null}

        {children}
      </div>
    </main>
  );
}
