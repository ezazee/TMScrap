"use client";
import Footer from "@/components/common/Footer";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/common/TopBar";
import { Poppins } from "next/font/google";
import "../../styles/sidebar.css";
import useLoadingStore from "@/state/useLoading";
import { useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setLoading = useLoadingStore((state) => state.setLoading);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulasi waktu loading
  }, [setLoading]);
  return (
    <main
      className={`${poppins.className} text-base text-body-color font-poppins bg-body dark:text-white`}>
      <SideBar />
      <TopBar />
      <div className="page-body">{children}</div>
      <Footer />
    </main>
  );
}
