"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function MailMe() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lastSubmit = localStorage.getItem("lastContactSubmit");
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit) < 30_000) {
      toast.error("请勿频繁提交，请稍等几秒后再试。");
      return;
    }
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    setIsLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    setIsLoading(false);
    localStorage.setItem("lastContactSubmit", Date.now().toString());
    setStatus(res.ok ? "success" : "error");
    if (res.ok) {
      toast.success("邮件发送成功！");
    } else {
      toast.error("邮件发送失败，请稍后再试。");
    }
  }

  return (
    <div className="max-w-lg">
      <h1 className="text-xl font-bold mb-6">联系我</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" placeholder="姓名" required />
        <Input name="email" type="email" placeholder="邮箱" required />
        <Textarea
          name="message"
          className="resize-none"
          placeholder="留言内容"
          rows={5}
          required
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              发送中...
            </>
          ) : (
            "发送"
          )}
        </Button>
      </form>
      {status === "success" && (
        <p className="text-green-600 mt-4">发送成功！</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4">发送失败，请稍后再试。</p>
      )}
    </div>
  );
}
