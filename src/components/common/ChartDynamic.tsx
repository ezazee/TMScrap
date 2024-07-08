"use client";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartDataProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
  }[];
}

const DynamicChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartDataProps>({
    labels: [],
    datasets: [],
  });

  const fetchData = async () => {
    const response = await fetch("api/v1/get_data/malware");
    const data = await response.json();

    console.log(data);

    const labels = data.endpointHostName;
    const fileNameValues = labels.map((_: any, index: string) => index + 1);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "File Name",
          data: fileNameValues,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF69B4",
            "#800080",
          ],
          borderColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF69B4", "#800080"],
        },
      ],
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "left",
            },
            title: {
              display: true,
              text: "Dynamic Chart Pie Example",
            },
          },
        }}
      />
    </div>
  );
};

export default DynamicChart;
