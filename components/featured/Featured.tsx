import Image from "next/image";
import Link from "next/link";

export const Featured = async () => {
  const req = await fetch(
    "https://api.spotify.com/v1/shows/3FVxSoGAovaqVF2ZwTKZyE/episodes?offset=0&limit=50",
    {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    },
  );

  const data = await req.json();
  const { name: title, description }: { name: string; description: string } =
    data.items[0];
  //   const images = data.items.map((item: any) => item.images[0].url);

  return (
    <section className="my-10 flex flex-col gap-5">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <h1 className="flex-1 text-7xl font-bold tracking-tighter">
          CHECK OUT WHAT&apos;S HOT
        </h1>
        <div>
          <p className="flex-2">
            Tune in to the latest and most popular podcast episodes
          </p>

          <Link href="/episodes">Episodes</Link>
        </div>
      </div>
      <div className="bg-microphone6 relative h-80 rounded-t-3xl bg-black bg-opacity-30 bg-cover bg-center">
        <div className="absolute bottom-0 left-0 right-0 flex h-1/3 items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm">
          <h2 className="text-center text-xl font-bold text-white">{title}</h2>
        </div>
      </div>
    </section>
  );
};
