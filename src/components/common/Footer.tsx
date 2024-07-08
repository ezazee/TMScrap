import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini

  return (
    <footer className="sticky bg-white page-footer bottom-0">
      <p>
        Copyright {currentYear} © TMSrap ||{" "}
        <Link href="#" target="_blank">
          We Bring Solution Without Permission
        </Link>{" "}
      </p>
    </footer>
  );
};

export default Footer;
