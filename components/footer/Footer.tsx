import Image from "next/image";
const year = new Date().getFullYear();

//TODO: Add socials and links
export const Footer = () => {
  return (
    <footer className="mt-10 flex h-52 items-center justify-around bg-black">
      <div className="">
        <Image src="/logo.jpg" alt="logo" width={100} height={100} />
        <div>
          <p>Tribe Podcast</p>
          <p>© {year}</p>
        </div>
      </div>
      <div className="">
        <h3>Socials</h3>
        <ul>
          <li>TikTok logo</li>
          <li>Youtube logo</li>
          <li>Instagram logo</li>
        </ul>
      </div>
      <div className="">
        <h3>Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};
