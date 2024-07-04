"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menuItems from "../constant/navlink";

const NavLink: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleToggle = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement;
    };

    const sidebarLinks = document.querySelectorAll(
      ".sidebar-link.sidebar-title"
    );
    sidebarLinks.forEach((link) =>
      link.addEventListener("click", handleToggle)
    );

    return () => {
      sidebarLinks.forEach((link) =>
        link.removeEventListener("click", handleToggle)
      );
    };
  }, []);

  return (
    <nav className="sidebar-main">
      <ul className="sidebar-links">
        {menuItems.map((item) => (
          <React.Fragment key={item.name}>
            {item.label && (
              <li className="px-3 mt-4">
                <span className="font-semibold text-indigo-200">
                  {item.label}
                </span>
              </li>
            )}
            <li
              className={`sidebar-list ${
                pathname === item.href ? "active" : ""
              }`}>
              <Link
                href={item.href}
                className="sidebar-link sidebar-title transition duration-300 ease-in-out hover:text-primary">
                <div className="icbu p-2">
                  <FontAwesomeIcon icon={item.icon} className="mr-2" />
                  <span className="sidebar-name">{item.name}</span>
                </div>
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default NavLink;
