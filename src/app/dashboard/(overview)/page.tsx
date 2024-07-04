import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAsia,
  faServer,
  faTowerCell,
} from "@fortawesome/free-solid-svg-icons";
import ChartComponent from "@/components/common/ChartComponent";

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
                        <FontAwesomeIcon
                          className="text-white"
                          icon={faServer}
                        />
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
          <div className="none">
            <ChartComponent />
          </div>
        </div>
      </LoadingClient>
    </>
  );
};

export default Dashboard;
