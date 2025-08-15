import type { Metadata } from "next"
import "./globals.css"
import { monocraft } from "@/lib/fontLoader"


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
      <body className={monocraft.variable}>
        {children}
      </body>
    </html>
  )
}
