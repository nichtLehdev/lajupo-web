import "~/styles/globals.css";

import { type Viewport, type Metadata } from "next";
import { ThemeProvider } from "~/components/theme-provider";
import { SiteHeader } from "~/components/site-header";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { fontSans } from "~/lib/fonts";
import { Toaster } from "~/components/ui/toaster";
import { Toaster as Sonner } from "~/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s - ${siteConfig.name}` },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["lehdev", "software", "engineer", "developer"],
  authors: [
    {
      name: "lehdev",
      url: "https://www.lehdev.de",
    },
  ],
  creator: "lehdev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@lehdev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background min-h-screen font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ClerkProvider publishableKey="pk_live_Y2xlcmsubGFqdXBvLmRlJA">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div vaul-drawer-wrapper="">
                <div className="bg-background relative flex min-h-screen flex-col">
                  <SiteHeader />
                  <main className="flex-1">{children}</main>
                </div>
              </div>
              <Toaster />
              <Sonner />
            </ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
    </>
  );
}
