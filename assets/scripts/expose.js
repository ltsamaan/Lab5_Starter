// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // Selection of image and audio prep.
  const horn = document.getElementById("horn-select");
  const img = document.querySelector("img[alt='No image selected']");
  const audio = document.querySelector("audio");

  horn.addEventListener('change', function() {
    if (horn.value === "air-horn") {
      img.src = "assets/images/air-horn.svg";
      img.alt = "Air Horn Image";
      audio.src = "assets/audio/air-horn.mp3";
    } else if (horn.value === "car-horn") {
      img.src = "assets/images/car-horn.svg";
      img.alt = "Car Horn Image";
      audio.src = "assets/audio/car-horn.mp3";
    } else if (horn.value === "party-horn") {
      img.src = "assets/images/party-horn.svg";
      img.alt = "Party Horn Image";
      audio.src = "assets/audio/party-horn.mp3";
    } else {
      img.src = "assets/images/no-image.png";
      img.alt = "No Image";
      audio.src = "";
    }
  });

  // Volume changes.
  const volume = document.getElementById("volume");
  const volume_img = document.querySelector("img[alt='Volume level 2']");

  volume.addEventListener('change', function() {
    if (volume.value == 0) {
      volume_img.src = "assets/icons/volume-level-0.svg";
      volume_img.alt = "Mute Icon";
    } else if (volume.value >= 1 && volume.value < 33) {
      volume_img.src = "assets/icons/volume-level-1.svg";
      volume_img.alt = "Volume Level 1 Icon";
    } else if (volume.value >= 33 && volume.value < 67) {
      volume_img.src = "assets/icons/volume-level-2.svg";
      volume_img.alt = "Volume Level 2 Icon";
    } else if (volume.value >= 67) {
      volume_img.src = "assets/icons/volume-level-3.svg";
      volume_img.alt = "Volume Level 3 Icon";
    }
  });

  // Play sound at slider volume.
  const button = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  button.addEventListener('click', function() {
    // Confetti case.
    if (horn.value === "party-horn") {
      jsConfetti.addConfetti();
    }
    audio.volume = volume.value / 100;
    audio.play();
  });
}