//store current song index
let currentMusic = 0;

//select audio source
const music = document.querySelector("#audio");

//select elements to implement behaviours on
const bar = document.querySelector(".bar");
const song = document.querySelector(".song");
const artist = document.querySelector(".artist");
const square = document.querySelector(".square");
const now = document.querySelector(".now");
const period = document.querySelector(".period");
const play = document.querySelector(".play");
const back = document.querySelector(".back");
const next = document.querySelector(".next");

//add events to the elements
play.addEventListener("click", () => {
  if (play.className.includes(`pause`)) {
    music.play();
  } else {
    music.pause();
  }
  play.classList.toggle("pause");
});

//setup the music
const setMusic = (i) => {
  bar.value = 0;
  let song = songs[i];
  currentMusic = i;
  music.src = song.path;
  song.innerHTML = song.name;
  artist.innerHTML = song.artist;
  square.style.backgroundImage = `url('${song.cover}')`;

  now.innerHTML = "00:00";
  setTimeout(() => {
    bar.max = period;
    period.innerHTML = formatTime(period);
  }, 300);
};
setMusic(0);

//format time
const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min} : ${sec}`;
};
