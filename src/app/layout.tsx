"use client";

import { Toaster } from "sonner";
import Modal from "~/components/Modal";
import Navbar from "~/components/Navbar";
import "~/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="mx-auto max-w-7xl px-[2rem] selection:bg-purple-600 selection:bg-opacity-30">
      <head>
        <title>Saige</title>
        <meta name="color-scheme" content="#9333ea" />
        <meta property="og:url" content="https://saige.zip" />
        <meta property="og:description" content="A designer and developer based out of the uk, creating interfaces and innovative softwares." />
        <meta property="og:site_name" content="Saige" />
        <meta property="og:image" content="http://saige.zip/favicon.png" />
      </head>
      <Toaster
        duration={3000}
        visibleToasts={1}
        position="bottom-center"
        expand={false}
      />
      <Modal />
      <Navbar />
      <div className="mt-10">{children}</div>
    </body>
  );
}
