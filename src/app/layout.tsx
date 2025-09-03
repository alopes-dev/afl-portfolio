import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import { NavMenu } from "@/components/nav-menu";

const inter = Inter({ subsets: ["latin"] });

const DESCRIPTION =
  "Full Stack Software Engineer with 6+ years of experience building scalable and high-performance web and mobile applications. Proven track record working on international projects such as OMS, iFood, sheerMe Apps, Abastece-Aí (Ipiranga) and KMV, leveraging technologies like React.js, NextJS, Node.js, React Native, iOS SwiftUI, Flutter and container-based DevOps. Passionate about solving real-world problems through clean, maintainable code and cross-functional collaboration.";
export const metadata: Metadata = {
  title: {
    template: "%s | Antonio Ferraz Lopes",
    default: "Antonio Ferraz Lopes",
  },
  description: DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.antonioferrazlopes.com",
    siteName: "Antonio Ferraz Lopes",
    title: "Antonio Ferraz Lopes",
    description: DESCRIPTION,
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/49714406?v=4",
        width: 1200,
        height: 630,
        alt: "Antonio Ferraz Lopes - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Ferraz Lopes",
    description: DESCRIPTION,
    images: ["https://avatars.githubusercontent.com/u/49714406?v=4"],
    creator: "@antonioferrazlopes", // Add your Twitter handle here if you have one
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavMenu />
          <div className="pt-14">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
