import { Featured } from "@/components/featured/Featured";
import { Feed } from "@/components/feed/Feed";

async function getAllEpisodes() {
  const accessTokenRequest = await fetch(
    `https://accounts.spotify.com/api/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,
    },
  );
  const accessToken = await accessTokenRequest.json();
  const req = await fetch(
    "https://api.spotify.com/v1/shows/3FVxSoGAovaqVF2ZwTKZyE/episodes?offset=0&limit=50",
    {
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
      },
    },
  );

  const data = await req.json();
  return data;
}

export default async function Home() {
  const data = await getAllEpisodes();
  return (
    <main className="mx-auto max-w-7xl p-4">
      <Featured featuredPodcast={data.items[0]} />
      <Feed podcasts={data.items} />
    </main>
  );
}
