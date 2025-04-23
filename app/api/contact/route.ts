// app/api/contact/route.ts
import { sendContactEmail } from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await sendContactEmail(body);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("发送失败:", e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
