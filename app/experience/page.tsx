"use client";

import { experience } from "@/lib/data/experience";
import { PageWrapper } from "../components/page-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-10 text-center">工作经历</h1>
        <div className="relative border-l border-muted ml-4 space-y-10">
          {experience.map((item, idx) => (
            <div key={idx} className="relative ml-6">
              {/* 时间线点 */}
              <span className="absolute -left-[30px] top-3 w-3 h-3 bg-primary rounded-full shadow-md border-2 border-background" />

              {/* 内容卡片 */}
              <Card className="bg-background shadow-md">
                <CardContent className="pt-4 pb-6">
                  <p className="text-muted-foreground text-sm mb-1">
                    {item.period}
                  </p>
                  <h2 className="text-lg font-semibold">{item.role}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.company}
                  </p>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                    {item.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* 技术栈 badge（可选） */}
                  {item.techs?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.techs.map((tech, i) => (
                        <Badge key={i} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
