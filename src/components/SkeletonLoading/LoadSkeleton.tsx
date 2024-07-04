import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonDashboard: React.FC = () => {
  return (
    <div className="dashboard-skeleton">
      <header className="page-title">
        <div className="grid grid-cols-2 md:gap-3 sm:gap-1 items-center">
          <div className="flex flex-col items-start gap-y-[4px] md:col-span-2">
            <h2 className="text-3xl capitalize font-medium text-dark 3xl:text-2xl md:mt-[-2px]">
              <Skeleton duration={1} height={30} width={300} />
            </h2>
            <span className="text-sm font-normal 3xl:text-xs">
              <Skeleton duration={1} height={20} width={150} />
            </span>
          </div>
        </div>
      </header>
      <section className="content-area">
        <Skeleton duration={1} height={40} width={`100%`} />
        <ul className="list mt-4">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <li className="card mb-4" key={index}>
                <Skeleton height={180} />
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default SkeletonDashboard;
