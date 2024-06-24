// initial array of songs
let songs = [
  {
    name: "song",
    path: "musics/song.mp3",
    artist: "artist",
    cover: "Images/cover.png",
  },
  {
    name: "song",
    path: "musics/song.mp3",
    artist: "artist",
    cover: "Images/cover.png",
  },
];

// get the number of songs
let songCount = songs.length;

// new song count
let newSong = 3;

// loop the new songs
while (true) {
  // increment
  let newSongNo = {
    name: "song ${newSongNo}",
    path: "musics/song ${newSongNo}.mp3",
    artist: "artist ${newSongNo}",
    cover: "Images/cover ${newSongNo}.png",
  };

  // new song added
  songs.push(newSongNo);

  // increment
  newSongNo++;
}
