import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PodRate — Track Podcast Advertising CPM Rates by Niche",
  description:
    "Monitor podcast sponsor mentions, estimate CPM rates by show size and niche, and access a searchable database of advertising rates. Built for marketing managers buying podcast ads."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="c54f44b4-ca27-4762-8176-02788086f230"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
