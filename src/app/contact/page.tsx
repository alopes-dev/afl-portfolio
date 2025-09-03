import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Your Portfolio",
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Contact Me</h1>
    </main>
  );
}
