import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <Image
        src={"/logo.png"}
        width={1920}
        height={1080}
        alt="tribe logo"
        className="h-[400px] w-[400px] drop-shadow-xl"
      ></Image>
      <p className="text-center text-3xl">Ambition. Action. Association.</p>
    </section>
  );
}
