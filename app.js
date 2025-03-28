console.log("My Spotify Persponal Audio Player");
let songIndex = 0;
let audioElement = new Audio("Shri Hanuman Chalisa.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songs = [
  {
    songName: "Hanuman Chalisa",
    filePath: "C:spotifyShri Hanuman Chalisa.mp3",
    coverPath: "hanuman-ji_1625557653.avif",
  },
  {
    songName: "Hanuman Chalisa",
    filePath: "C:spotifyShri Hanuman Chalisa.mp3",
    coverPath: "C:spotify",
  },
  {
    songName: "Hanuman Chalisa",
    filePath: "C:spotifyShri Hanuman Chalisa.mp3",
    coverPath: "C:spotify",
  },
  {
    songName: "Hanuman Chalisa",
    filePath: "C:spotifyShri Hanuman Chalisa.mp3",
    coverPath: "C:spotify",
  },
  {
    songName: "Hanuman Chalisa",
    filePath: "C:spotifyShri Hanuman Chalisa.mp3",
    coverPath: "C:spotify",
  },
];
// handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime == 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
// listen to events
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //   update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
