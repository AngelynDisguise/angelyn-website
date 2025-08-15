import type { Metadata } from "next"
import "./globals.css"
import FontLoader from "@/lib/fontLoader"

export const metadata: Metadata = {
  title: "Angelyn Domingo",
  description: "Angelyn's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <FontLoader />
        {children}
      </body>
    </html>
  );
}
