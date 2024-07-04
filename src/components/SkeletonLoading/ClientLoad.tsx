// components/LoadingClient.tsx
"use client";

import React, { useEffect } from "react";
import useLoadingStore from "@/state/useLoading";
import SkeletonCard from "./LoadSkeleton";

const LoadingClient: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { loading, setLoading } = useLoadingStore();

  useEffect(() => {
    // Simulasi memuat data dari API dengan setTimeout
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Ubah 2000ms sesuai dengan waktu loading yang diinginkan
  }, [setLoading]);

  return <>{loading ? <SkeletonCard /> : children}</>;
};

export default LoadingClient;
