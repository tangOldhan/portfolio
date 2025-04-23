// app/projects/page.tsx
import ProjectCard from "../components/ProjectCard";
import { projects } from "@/lib/data/projects";
import { PageWrapper } from "../components/page-wrapper";
import { FadeIn } from "../components/fade-in";
export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">项目展示</h1>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={index}>
              <ProjectCard key={index} {...project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
