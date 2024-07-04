"use client";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const LogoutBtn = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Hapus token JWT dari cookie
    Cookies.remove("jwt_token");
    Cookies.remove("tm_token");

    // Redirect ke halaman login
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex w-full items-center px-4 py-2 text-sm text-red-700 hover:bg-gray-200 transition duration-300 ease-in-out">
      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
      Log out
    </button>
  );
};

export default LogoutBtn;
