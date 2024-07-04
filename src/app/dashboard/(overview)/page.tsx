import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Dashboard",
};
const LoadingClient = dynamic(
  () => import("@/components/SkeletonLoading/ClientLoad"),
  {
    ssr: false,
  }
);

const Dashboard: React.FC = () => {
  return (
    <>
      <LoadingClient>
        <div className="grid-cols-4">
          <div className="page-title">
            <div className="grid grid-cols-2 md:gap-3 sm:gap-1 items-center">
              <div className="flex flex-col items-start gap-y-[4px] md:col-span-2">
                <h2 className="text-3xl capitalize font-medium text-dark 3xl:text-2xl md:mt-[-2px]">
                  <span className="text-primary font-bold text-3xl 3xl:text-2xl">
                    Default dashboard
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="">
            <h1>Content Here</h1>
          </div>
        </div>
      </LoadingClient>
    </>
  );
};

export default Dashboard;
