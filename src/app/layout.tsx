"use client";

import { Metadata } from "next";
import { Toaster } from "sonner";
import Modal from "~/components/Modal";
import Navbar from "~/components/Navbar";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Saige",
  themeColor: "#9333ea",
  openGraph: {
    url: "http://saige.zip",
    description:
      "A designer and developer based out of the uk, creating interfaces and innovative softwares.",
    title: "Saige",
    images: ["http://saige.zip/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="mx-auto max-w-7xl px-[2rem] selection:bg-purple-600 selection:bg-opacity-30">
      <Toaster
        duration={3000}
        visibleToasts={1}
        position="bottom-center"
        expand={false}
      />
      <Modal/>
      <Navbar />
      <div className="mt-10">{children}</div>
    </body>
  );
}
