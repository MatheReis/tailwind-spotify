export function PlaylistCard() {
  const playlists = [
    {
      name: "Daily Mix 1",
      description: "Guns N' Roses, Metallica, Iron Maiden and more...",
      imageUrl: "/album.jpeg",
    },
    {
      name: "Daily Mix 2",
      description: "Foo Fighters, AC/DC, Led Zeppelin and more...",
      imageUrl: "/album2.jpeg",
    },
    {
      name: "Daily Mix 3",
      description: "Lorde, Billie Eilish, Lana Del Rey and more...",
      imageUrl: "/album3.png",
    },
    {
      name: "Daily Mix 4",
      description: "The Beatles, Queen, Rolling Stones and more...",
      imageUrl: "/album4.jpg",
    },
    {
      name: "Daily Mix 5",
      description: "Radiohead, Nirvana, Pearl Jam and more...",
      imageUrl: "/album5.jpg",
    },
    {
      name: "Daily Mix 6",
      description: "Alok, The Killers, The Black Keys and more...",
      imageUrl: "/album6.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-8 gap-4 mt-6">
      {playlists.map((playlist, index) => (
        <a
          key={index}
          href="#"
          className="bg-white/5 p-3 rounded-md flex-col gap-2 hover:bg-white/10"
        >
          <img
            src={playlist.imageUrl}
            className="w-full"
            width={120}
            height={120}
          />
          <strong className="font-semibold flex flex-col gap-2 mt-3">
            {playlist.name}
          </strong>
          <span className="text-sm text-zinc-400">{playlist.description}</span>
        </a>
      ))}
    </div>
  );
}
