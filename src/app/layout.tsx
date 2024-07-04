import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: "%s | FS30 Dashboard",
    default: "FS30 Dashboard",
  },
  description: "Dashboard FS30",
  icons: "/images/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`} dir="ltr">
        <main className="page-wrapper">
          <div className="page-body-wrapper">
            <NextUIProvider>{children}</NextUIProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
