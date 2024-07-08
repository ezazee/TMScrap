// pages/dashboard.tsx
import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAsia,
  faServer,
  faTowerCell,
} from "@fortawesome/free-solid-svg-icons";

const DynamicChart = dynamic(() => import("@/components/common/ChartDynamic"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="grid-cols-4">
        <div className="page-title">
          <div className="grid grid-cols-2 md:gap-3 sm:gap-1 items-center">
            <div className="flex flex-col items-start gap-y-[4px] md:col-span-2">
              <h2 className="text-3xl capitalize font-medium text-dark 3xl:text-2xl md:mt-[-2px]">
                <span className="text-primary font-bold text-3xl 3xl:text-2xl">
                  Overview Dashboard
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="none">
          <div className="col-span-12 2xl:col-span-8">
            <div className="grid grid-col-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
              <div className="card dark:bg-zink-700">
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-13 mb-3 font-medium text-gray-600 dark:text-zink-200">
                        Server
                      </p>
                      <h4 className="text-[19px] leading-6 font-medium">
                        1,235
                      </h4>
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-full flex justify-center items-center relative before:absolute before:content-[''] before:w-2 before:h-12 before:bg-white before:bg-opacity-10 before:transform before:rotate-[32deg] before:-top-1">
                      <FontAwesomeIcon className="text-white" icon={faServer} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card dark:bg-zink-700">
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-13 mb-3 font-medium text-gray-600 dark:text-zink-200">
                        Endpoint
                      </p>
                      <h4 className="text-[19px] leading-6 font-medium">
                        $35,235
                      </h4>
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-full flex justify-center items-center relative before:absolute before:content-[''] before:w-2 before:h-12 before:bg-white before:bg-opacity-10 before:transform before:rotate-[32deg] before:-top-1">
                      <FontAwesomeIcon
                        className="text-white"
                        icon={faTowerCell}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card dark:bg-zink-700">
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-13 mb-3 font-medium text-gray-600 dark:text-zink-200">
                        Website
                      </p>
                      <h4 className="text-[19px] leading-6 font-medium">
                        $16.2
                      </h4>
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-full flex justify-center items-center relative before:absolute before:content-[''] before:w-2 before:h-12 before:bg-white before:bg-opacity-10 before:transform before:rotate-[32deg] before:-top-1">
                      <FontAwesomeIcon
                        className="text-white"
                        icon={faEarthAsia}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-card">
          <div className="card col-span-6 4xl:col-span-8 lg:col-span-7 md:col-span-12">
            <div className="card-header border-bottom-none">
              <div className="flex items-center justify-between w-full">
                <h3 className="font-medium text-dark 3xl:text-lg sm:text-base truncate w-[85%]">
                  Monthly Revenue Growth
                </h3>
              </div>
            </div>
            <div className="card-body">
              <DynamicChart />
            </div>
          </div>
          <div className="card col-span-6 4xl:col-span-8 lg:col-span-7 md:col-span-12">
            <div className="card-header border-bottom-none">
              <div className="flex items-center justify-between w-full">
                <h3 className="font-medium text-dark 3xl:text-lg sm:text-base truncate w-[85%]">
                  Monthly Revenue Growth
                </h3>
              </div>
            </div>
            <div className="card-body">
              <DynamicChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
