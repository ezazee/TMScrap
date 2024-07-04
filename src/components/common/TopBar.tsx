// components/Topbar.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useStore from "../../state/sidebarState";
import React, { useState, useEffect } from "react";
import LogoutBtn from "../loginPage/LogoutBtn";
import Cookies from "js-cookie";
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";

const TopBar = () => {
  const { toggleSidebar } = useStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const apiUser = `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/users/me`;
  interface User {
    username: string;
    role: string;
  }
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const jwtToken = Cookies.get("jwt_token");

        if (!jwtToken) {
          throw new Error("JWT token not found");
        }

        const response = await fetch(`${apiUser}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData: User = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUser();
  }, [apiUser]);
  return (
    <>
      <header className="sticky top-0 z-[4]">
        <div className="page-header">
          <ul className="header-nav justify-between flex items-center gap-4 w-full lg:gap-3 md:gap-2 sm:gap-1">
            <li>
              <div className="box-wrapper">
                <span
                  className="icbu mr-[-1px] mb-[-2px] md:mr-0 toggle-sidebar"
                  onClick={toggleSidebar}>
                  <FontAwesomeIcon className="w-5 h-5" icon={faBars} />
                </span>
              </div>
            </li>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center focus:outline-none">
                {user ? (
                  <>
                    <Image
                      width={100}
                      height={100}
                      alt="avatar"
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109"
                    />
                    <div className="ml-3 text-left">
                      <h6 className="text-sm font-medium">{user.username}</h6>
                      <span className="text-xs text-gray-500">{user.role}</span>
                    </div>
                  </>
                ) : (
                  <CircularProgress aria-label="Loading..." />
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-xl">
                  <LogoutBtn />
                </div>
              )}
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default TopBar;
