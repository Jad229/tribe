"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { Play, Pause } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type PodcastCardProps = {
  podcast: Podcast;
  index: number;
};

export default function PodcastCard({ podcast, index }: PodcastCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset the clip
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-around gap-5 border-t-2 pt-10 drop-shadow-xl">
      <p className="text-4xl font-bold">{index}</p>
      <div className="relative h-52 w-52 ">
        <Link href={podcast.external_urls.spotify} target="_blank">
          <Image
            src={podcast.images[0].url}
            alt="podcast cover"
            fill
            className="rounded-lg transition duration-300 ease-in-out hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-5 text-center md:w-1/2 md:justify-start md:text-left">
        <Link
          href={podcast.external_urls.spotify}
          target="_blank"
          className=" transition duration-300 ease-in-out hover:scale-105 "
        >
          <h2>{podcast.name}</h2>
        </Link>
        <p>{format(podcast.release_date, "eeee MMM do, yyyy")}</p>
      </div>
      <div className="flex items-center">
        <audio
          ref={audioRef}
          src={podcast.audio_preview_url}
          onEnded={handleEnded}
        />
        <Button
          onClick={handlePlayPause}
          variant="outline"
          size="icon"
          className="rounded-full p-2"
        >
          {isPlaying ? (
            <Pause className="size-16" />
          ) : (
            <Play className="size-16" />
          )}
        </Button>
      </div>
    </div>
  );
}
