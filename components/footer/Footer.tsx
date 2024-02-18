import Image from "next/image";
const year = new Date().getFullYear();

//TODO: Add socials and links
export const Footer = () => {
  return (
    <footer className="mt-10 flex flex-wrap items-center justify-around gap-10 bg-black py-12 text-center">
      <div className="flex w-full flex-none flex-col items-center gap-10 md:w-1/4">
        <Image src="/logo.jpg" alt="logo" width={100} height={100} />
        <div className="text-lg">
          <h3 className="text-3xl">Tribe Podcast</h3>
          <p>© {year}</p>
        </div>
      </div>
      <div className="flex w-full flex-none  flex-col items-center gap-10 md:w-1/4">
        <h3 className="text-3xl">Socials</h3>
        <ul className="text-lg">
          <li>TikTok logo</li>
          <li>Youtube logo</li>
          <li>Instagram logo</li>
        </ul>
      </div>
      <div className="flex w-full flex-none  flex-col items-center gap-10 md:w-1/4">
        <h3 className="text-3xl">Links</h3>
        <ul className="text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};
