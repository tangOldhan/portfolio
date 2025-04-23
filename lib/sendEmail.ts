// lib/sendEmail.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  await resend.emails.send({
    from: process.env.RESEND_FROM!,
    to: "tanglei1007@gmail.com", // 接收者邮箱，可与 from 一致
    subject: `💬 来自 ${data.name} 的网站留言`,
    text: `姓名：${data.name}\n邮箱：${data.email}\n留言：${data.message}`,
  });
}
