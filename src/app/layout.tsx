import "@/styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/providers";
import { AppDrawer } from "@/components/_shared/AppDrawer/AppDrawer";
import { AppMenu } from "@/components/_shared/AppMenu/AppMenu";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            const savedTheme = localStorage.getItem('theme');
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
            document.documentElement.classList.add(theme);
          })();
        `,
          }}
        />
      </head>
      <body
        className={`h-full antialiased bg-light-background dark:bg-dark-background text-black dark:text-white text-foreground ${roboto.className}`}
      >
        <ThemeProvider>
          <AppDrawer />
          <AppMenu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
