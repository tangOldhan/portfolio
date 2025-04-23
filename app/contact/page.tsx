// app/contact/page.tsx
import MailMe from "./components/MailMe";
import { PageWrapper } from "../components/page-wrapper";
export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="max-w-2xl mx-auto py-10 px-4 space-y-6">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          联系方式
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          欢迎通过以下方式联系我，获取简历、讨论项目或进行合作交流：
        </p>

        <ul className="space-y-4">
          <li>
            <strong className="text-zinc-800 dark:text-zinc-100">邮箱：</strong>
            <a
              href="mailto:tanglei1007@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              tanglei1007@gmail.com
            </a>
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-100">
              GitHub：
            </strong>
            <a
              href="https://github.com/tangOldhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/tangOldhan
            </a>
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-100">
              微信/电话：
            </strong>
            <span className="text-zinc-700 dark:text-zinc-300">可私信索取</span>
          </li>
        </ul>
        <MailMe />
      </section>
    </PageWrapper>
  );
}
