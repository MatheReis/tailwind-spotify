import { Play } from "lucide-react";

interface Playlist {
  name: string;
  imageUrl: string;
}

interface AlbumLinkProps {
  playlist: Playlist;
  background: string;
  hoverBackground: string;
}

function AlbumLink({ playlist, background, hoverBackground }: AlbumLinkProps) {
  return (
    <a
      href="#"
      className={`bg-${background} group rounded flex items-center gap-5 
        hover:bg-${hoverBackground} transition-colors`}
    >
      <img src={playlist.imageUrl} width={104} height={104} />
      <strong>{playlist.name}</strong>
      <button
        className="w-12 h-12 flex items-center justify-center 
        pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 
        invisible group-hover:visible"
      >
        <Play />
      </button>
    </a>
  );
}

export function MusicCard() {
  const playlists = [
    {
      name: "Guns N' Roses",
      imageUrl: "/album.jpeg",
    },
    {
      name: "Foo Fighters",
      imageUrl: "/album2.jpeg",
    },
    {
      name: "Billie Eilish",
      imageUrl: "/album3.png",
    },
    {
      name: "The Beatles",
      imageUrl: "/album4.jpg",
    },
    {
      name: "Pearl Jam",
      imageUrl: "/album5.jpg",
    },
    {
      name: "Alok",
      imageUrl: "/album6.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      {playlists.map((playlist, index) => (
        <AlbumLink
          key={index}
          playlist={playlist}
          background="white/5"
          hoverBackground="white/10"
        />
      ))}
    </div>
  );
}
