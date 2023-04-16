import { ButtonsMac } from "@/components/ButtonsMac";
import { Footer } from "@/components/Footer";
import { MusicCard } from "@/components/MusicCard";
import { PlaylistCard } from "@/components/PlaylistCard";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <ButtonsMac />
          <h1 className="font-bold text-3xl mt-10">Good Afternoon</h1>
          <MusicCard />
          <h2 className="font-bold text-2xl mt-10">Made for Matheus Reis</h2>
          <PlaylistCard />
        </main>
      </div>
      <Footer />
    </div>
  );
}
