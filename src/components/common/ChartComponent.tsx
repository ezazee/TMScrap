"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import useClientStore from "@/state/chartState";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartComponent: React.FC = () => {
  const { isClient, setIsClient } = useClientStore();

  useEffect(() => {
    setIsClient();
  }, [setIsClient]);

  if (!isClient) return null;

  const chartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  };

  const chartSeries = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60],
    },
  ];

  return (
    <Chart options={chartOptions} series={chartSeries} type="bar" width="500" />
  );
};

export default ChartComponent;
