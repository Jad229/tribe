import Image from "next/image";

//TODO: replace with actual podcast data
const podcastCards = [
  {
    title: "The Joe Rogan Experience",
    description:
      "The Joe Rogan Experience podcast is a long form conversation hosted by comedian Joe Rogan with friends and guests that have included comedians, actors, musicians, MMA fighters, authors, artists, and beyond.",
    image: "/images/microphone2.jpg",
  },
  {
    title: "The Joe Rogan Experience",
    description:
      "The Joe Rogan Experience podcast is a long form conversation hosted by comedian Joe Rogan with friends and guests that have included comedians, actors, musicians, MMA fighters, authors, artists, and beyond.",
    image: "/images/microphone4.jpg",
  },
  {
    title: "The Joe Rogan Experience",
    description:
      "The Joe Rogan Experience podcast is a long form conversation hosted by comedian Joe Rogan with friends and guests that have included comedians, actors, musicians, MMA fighters, authors, artists, and beyond.",
    image: "/images/microphone5.jpg",
  },
];
export const Feed = () => {
  return (
    <section>
      <h1 className="mb-10 text-7xl font-bold tracking-tighter sm:text-center md:text-left lg:basis-1/2 lg:text-8xl">
        TUNE IN
      </h1>
      <div className="flex flex-wrap gap-10">
        {/* //TODO: replace with podcast component */}
        {podcastCards.map((podcast, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center justify-center gap-5 border-t-2 pt-10"
          >
            <div className="relative h-52 w-52 ">
              <Image
                src={podcast.image}
                alt="podcast cover"
                fill
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 text-center md:w-1/2 md:justify-start md:text-left">
              <h2>{podcast.title}</h2>
              <p>{podcast.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
