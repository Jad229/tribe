import Image from "next/image";

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
    <section className="bg-microphone6 relative h-80 bg-black bg-opacity-30 bg-cover bg-center bg-blend-darken ">
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white opacity-30 backdrop-blur-2xl">
        <h1 className="">{title}</h1>
      </div>
    </section>
  );
};
