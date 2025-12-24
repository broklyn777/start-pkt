import type { ReactNode } from "react";

type CardVariant = "default" | "info" | "warning";

type CardProps = {
  title?: string;
  variant?: CardVariant;
  children: ReactNode;
};

export default function Card({
  title,
  variant = "default",
  children,
}: CardProps) {
  const variantStyles: Record<CardVariant, string> = {
    default: "bg-gray-700 border-gray-600",
    info: "bg-blue-900/40 border-blue-700",
    warning: "bg-yellow-900/40 border-yellow-700",
  };

  const variantIcon: Record<CardVariant, string | null> = {
    default: "📘", // <-- ny ikon för default
    info: "💡",
    warning: "⚠️",
  };

  return (
    <section
      className={`card-in rounded-xl p-6 border ${variantStyles[variant]}`}
    >
      {title && (
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          {variantIcon[variant] ? (
            <span aria-hidden="true">{variantIcon[variant]}</span>
          ) : null}
          {title}
        </h2>
      )}

      <div className="text-gray-300">{children}</div>
    </section>
  );
}
