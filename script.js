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
  play.classList.toggle("pause");
});

//setup the music
