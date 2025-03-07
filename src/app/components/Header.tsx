import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
import {
  Menu,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  AlignRight,
} from "lucide-react";

const Header = () => {
  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-30 flex justify-between items-center p-4 sm:p-6 md:p-8 ">
        <div className="logo">
          <Link href="/">
            <Image
              src={logo}
              alt="tjs logo"
              width={120}
              height={80}
              className="w-24 md:w-32"
              priority
            />
          </Link>
        </div>

        <button className="flex items-center gap-2 text-gray-200">
          <AlignRight className="w-6 h-6" />
          <span className="hidden md:inline">Menu</span>
        </button>
      </header>
    </div>
  );
};

export default Header;
