const audio = document.getElementById("sound");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "❚❚"; // Ubah teks tombol menjadi Pause
    } else {
        audio.pause();
        playButton.textContent = "▶️"; // Ubah teks tombol menjadi Play
    }
});