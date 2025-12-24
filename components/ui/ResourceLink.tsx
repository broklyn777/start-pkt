import Link from "next/link";

type ResourceType = "manual" | "video" | "external";

type ResourceLinkProps = {
  title: string;
  description: string;
  href: string;
  type?: ResourceType;
};

export default function ResourceLink({
  title,
  description,
  href,
  type = "external",
}: ResourceLinkProps) {
  const iconMap: Record<ResourceType, string> = {
    manual: "📖",
    video: "🎥",
    external: "🔗",
  };

  const iconColorMap: Record<ResourceType, string> = {
    manual: "text-gray-200",
    video: "text-red-400", // 👈 bättre kontrast
    external: "text-indigo-400",
  };
  const iconBgMap: Record<ResourceType, string> = {
    manual: "bg-gray-600",
    video: "bg-gray-600", // 👈 tydligt video
    external: "bg-indigo-600",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <section className="bg-gray-700 rounded-xl p-6 border border-gray-600 hover:bg-gray-600 transition">
        <h3 className="text-lg font-semibold mb-1 flex items-center gap-3">
          <span
            aria-hidden="true"
            className={`flex h-8 w-8 items-center justify-center rounded-md text-base ${iconBgMap[type]}`}
          >
            {iconMap[type]}
          </span>
          {title}
        </h3>

        <p className="text-gray-300 text-sm">{description}</p>
      </section>
    </Link>
  );
}
