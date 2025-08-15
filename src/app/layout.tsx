import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Angelyn Domingo",
  description: "Angelyn's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
