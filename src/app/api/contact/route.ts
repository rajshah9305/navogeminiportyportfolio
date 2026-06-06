import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Email and message are required" }, { status: 400 });
    }

    // In a real application, you would integrate with Resend, SendGrid, etc. here.
    // Example:
    // await sendEmail({ to: "raj@rajai.org", from: email, subject: "New Inquiry", text: message });

    // Mock delay to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Inquiry received successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Failed to process inquiry" }, { status: 500 });
  }
}
