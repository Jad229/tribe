import Link from "next/link";
import { Button } from "../ui/button";
import { buttonVariants } from "@/components/ui/button";
import { format } from "date-fns";

type FeaturedProps = {
  featuredPodcast: {
    name: string;
    release_date: string;
  };
};

//TODO: fix link to episodes
export const Featured = async ({ featuredPodcast }: FeaturedProps) => {
  return (
    <section className="my-10 flex flex-col gap-5 ">
      <div className="flex flex-wrap items-center justify-center gap-2 p-4">
        <h1 className="text-center text-7xl font-bold tracking-tighter drop-shadow-xl lg:basis-1/2 lg:text-8xl">
          LATEST PODCAST
        </h1>
      </div>
      <div className="relative h-80 rounded-t-3xl bg-black bg-opacity-30 bg-microphone6 bg-cover bg-center shadow-xl  md:mx-auto md:w-5/6 xl:w-full">
        <div className="absolute bottom-0 left-0 right-0 flex h-1/3 flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm">
          <h2 className=" text-center text-xl font-bold tracking-wide text-white">
            {featuredPodcast.name}
          </h2>
          <p>{format(featuredPodcast.release_date, "eeee MMM do, yyyy")}</p>
        </div>
      </div>
    </section>
  );
};
