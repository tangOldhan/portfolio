// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "../../../lib/data/projects";
import { PageWrapper } from "@/app/components/page-wrapper";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          {project.description}
        </p>

        <div className="mb-6 space-y-2">
          {project.highlights.map((h, i) => (
            <div key={i} className="text-sm">
              • {h}
            </div>
          ))}
        </div>

        <div className="mb-6 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
          {project.content}
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
