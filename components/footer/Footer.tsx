import Image from "next/image";
import Link from "next/link";
const year = new Date().getFullYear();
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

//TODO: Add socials and links
export const Footer = () => {
  return (
    <footer className="mt-10 flex flex-wrap items-center justify-around gap-10 bg-black py-12 text-center">
      <div className="flex w-full flex-none flex-col items-center gap-10 md:w-1/4">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <div className="text-lg">
          <h3 className="text-3xl">Tribe Podcast</h3>
          <p>© {year}</p>
        </div>
      </div>
      <div className="flex w-full flex-none  flex-col items-center gap-10 md:w-1/4">
        <h3 className="text-3xl">Socials</h3>
        <ul className="flex gap-5 text-lg">
          <li>
            <a href="https://open.spotify.com/show/3FVxSoGAovaqVF2ZwTKZyE?si=547d3dde95de4b41">
              <FaSpotify size={30} />
            </a>
          </li>
          <li>
            <a href="https://youtube.com/@TRIBETHEPODCAST?si=ROpb1tzo392RV6qG">
              <FaYoutube size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tribethepodcast?igsh=a3V1cXdjc2RyajRj&utm_source=qr">
              <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex w-full flex-none flex-col items-center gap-10 md:w-1/4">
        <h3 className="text-3xl">Links</h3>
        <ul className="text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
