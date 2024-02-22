import Image from "next/image";
import Link from "next/link";
import thirdiLogo from "@/assets/Thirdi_logo/logo_without bg_1.png";
import React from 'react';
// import { MyBellIcon, MyHomeIcon, MyListIcon, MyProductIcon, MySettingsIcon } from '@/Icons';

export default function SideBar(){
    return <div className="sidebar relative bg-daisy border-r border-grey gradient-01">
    <div className="sidebar-top h-[60px] flex justify-between items-center px-6 border-b border-grey">
      <div className="logo">
        <Link href="/">
          <Image src={thirdiLogo} alt="thirdi-logo" className="w-[80px]" />
        </Link>
      </div>
      {/* <div className="notification p-2 rounded-lg border border-grey">
        <MyBellIcon className="h-4 w-4" />
      </div> */}
    </div>
    <div className="w-full py-4">
      <nav className="px-4">
        <ul>
          <li>
            <Link href="/" className="nav-links bg-gray-100">
              {/* <MyHomeIcon className="h-4 w-4" /> */}
              Home
            </Link>
          </li>
          <li>
            <Link href="/recommendation" className="nav-links">
              {/* <MyListIcon className="h-4 w-4" /> */}
              Recommendations
            </Link>
          </li>
          <li>
            <Link href="/dataupload" className="nav-links">
              {/* <MyProductIcon className="h-4 w-4" /> */}
              Data Upload
            </Link>
          </li>
          <li>
            <Link href="/settings" className="nav-links">
              {/* <MySettingsIcon className="h-4 w-4" /> */}
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
}