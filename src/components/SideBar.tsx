"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import useStore from "../state/sidebarState";

const SideBar = () => {
  const { isSidebarOpen, toggleSidebar, setResponsiveSidebar } = useStore();
  const pageWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setResponsiveSidebar();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setResponsiveSidebar]);

  useEffect(() => {
    if (pageWrapperRef.current) {
      if (isSidebarOpen) {
        pageWrapperRef.current.classList.remove("sidebar-close");
      } else {
        pageWrapperRef.current.classList.add("sidebar-close");
      }
    }
  }, [isSidebarOpen]);

  return (
    <div ref={pageWrapperRef} className="page-wrapper">
      <aside
        className={`page-sidebar bg-gray-800 text-white w-64 transition-all duration-300 ${
          isSidebarOpen ? "" : "sidebar-close"
        }`}
      >
        <div className="logo-wrapper flex flex-col items-center relative p-4">
          <a href="#" className="flex flex-col items-center">
            <Image
              width={150}
              height={150}
              src="/images/logo_wide.png"
              alt="logo"
            />
            <Image
              width={40}
              height={40}
              className="logo-icon mt-4"
              src="/images/favicon.png"
              alt="logo"
            />
          </a>
          <button
            className="sidebar-close-icon absolute top-4 right-4 lg:hidden"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <NavLink />
      </aside>
    </div>
  );
};

export default SideBar;
