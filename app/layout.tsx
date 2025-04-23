// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import { Toaster } from "@/components/ui/sonner";
import ParticlesBackground from "./components/ParticlesBackground";
export const metadata = {
  title: "我的个人网站",
  description: "前端开发者作品展示",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300">
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <ParticlesBackground />
        </div>
        <div className="min-h-screen flex flex-col font-sans">
          <Header />
          <main className="flex-1 px-6 py-10 pt-18">{children}</main>
          <Toaster />
          <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-200 dark:border-zinc-700">
            © {new Date().getFullYear()} Tanglei&apos;s Portfolio - All Rights
            Reserved
          </footer>
        </div>
      </body>
    </html>
  );
}
