import type { Metadata } from "next";
import NavBar from "../Components/Navigation/NavBar";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";

export const metadata: Metadata = {
  title: "IRSA",
  description:
    "Institute of Risk and Safety Analysis. Expert Witness. Expert Witnesses. Forensics. Forensic Science. Accident Reconstruction.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/utils/favicon-light.ico",
        href: "/utils/favicon-light.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/utils/favicon-dark.ico",
        href: "/utils/favicon-dark.ico",
      },
    ],
  },
};

export default async function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-none">
      <body className="carbon min-h-screen flex flex-col">
        <header className="fixed top-0 left-0 z-[1000] w-full h-[100px]">
          <NavBar />
        </header>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
