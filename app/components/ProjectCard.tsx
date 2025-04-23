// components/ProjectCard.tsx
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  slug: string;
};

export default function ProjectCard({
  title,
  description,
  highlights,
  tech,
  slug,
}: Props) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="rounded-2xl border border-gray-200 dark:border-zinc-700 p-6 shadow-sm hover:shadow-md transition hover:border-blue-500">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <ul className="list-disc list-inside text-sm mb-4 space-y-1">
          {highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 text-xs">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-md text-gray-700 dark:text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
