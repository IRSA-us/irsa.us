import type { Metadata } from "next";
import NavBar from "../Components/Navigation/NavBar";
import "../globals.css";
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "IRSA",
  description:
    "Institute of Risk and Safety Analysis. Expert Witness. Expert Witnesses. Forensics. Forensic Science. Accident Reconstruction.",
};

export default async function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="carbon">
        <header className="fixed z-[1000] w-full h-[100px]">
          <NavBar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
