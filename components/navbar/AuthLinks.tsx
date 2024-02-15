import Link from "next/link";

export const AuthLinks = () => {
  const isLoggedIn = false;
  return (
    <div className="flex gap-5">
      <Link href="/about">About</Link>
      <Link href="/news">News</Link>
      <Link href="/contact">Contact</Link>
      {isLoggedIn ? <Link href="/profile">Write</Link> : ""}
    </div>
  );
};
