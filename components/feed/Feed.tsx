import PodcastCard from "./PodcastCard";

type FeedProps = {
  podcasts: Podcast[];
};

export const Feed = ({ podcasts }: FeedProps) => {
  return (
    <section>
      <h1 className="mb-10 text-7xl font-bold tracking-tighter sm:text-center md:text-left lg:basis-1/2 lg:text-8xl">
        TUNE IN
      </h1>
      <div className="flex flex-col gap-10">
        {/* //TODO: replace with podcast component */}
        {podcasts.map((podcast, index) => (
          <PodcastCard
            key={podcast.name}
            index={podcasts.length - index}
            podcast={podcast}
          />
        ))}
      </div>
    </section>
  );
};
