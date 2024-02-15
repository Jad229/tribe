"use client";

import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className=" w-full sticky top-0 left-0 right-0 flex justify-between items-center z-10">
      <div>
        <Link href="/">
          <Image src="/logo.jpg" alt="tribe podcast" width={100} height={100} />
        </Link>
      </div>
      <div className="flex gap-5">
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};
