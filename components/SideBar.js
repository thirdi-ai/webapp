"use client"
import Image from "next/image";
import Link from "next/link";
import thirdiLogo from "@/assets/Thirdi_logo/logo_without bg_1.png";
import React from "react";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const path = usePathname();

  return (
    <div className="sidebar max-h-screen overflow-hidden relative p-[30px] ">
      <div className="sidebar-top h-[60px] flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image src={thirdiLogo} alt="thirdi-logo" className="w-[80px]" />
          </Link>
        </div>
      </div>
      <div>
        <input type="text" name="search" id="search" placeholder="Search Name"/>
      </div>
      <div className="w-full py-4">
        <nav>
          <ul>
            <li>
              <Link href="/" className={`nav-links ${path === "/" ? "bg-gray-200": ""} `}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/recommendation" className={`nav-links ${path.startsWith("/recommendation") ? "bg-gray-200": ""} `}>
                Recommendations
              </Link>
            </li>
            <li>
              <Link href="/dataupload" className={`nav-links ${path.startsWith("/dataupload") ? "bg-gray-200": ""} `}>
                Data Upload
              </Link>
            </li>
            <li>
              <Link href="/settings" className={`nav-links ${path.startsWith("/settings") ? "bg-gray-200": ""} `}>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
