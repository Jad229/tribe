"use client";

import Image from "next/image";
import Link from "next/link";
import { AuthLinks } from "./AuthLinks";

export const Navbar = () => {
  return (
    <nav className="sticky left-0 right-0 top-0 z-10 flex w-full items-center justify-between">
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="tribe podcast" width={100} height={100} />
        </Link>
      </div>
      <AuthLinks />
    </nav>
  );
};
