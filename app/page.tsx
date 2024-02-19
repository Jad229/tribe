import { Featured } from "@/components/featured/Featured";
import { Feed } from "@/components/feed/Feed";

export default function Home() {
  return (
    <main className="p-4">
      <Featured />
      <Feed />
    </main>
  );
}
