const video = document.getElementById('bg-video');
const button = document.getElementById('playBtn');
const slider = document.getElementById('sound-slider');
const volumeText = document.getElementById('volume');
const icon = document.querySelector('.iconVolume');

// Set initial volume and mute video initially to allow autoplay policies
video.volume = slider.value / 100;
video.muted = true;  // mute initially to avoid autoplay block

button.addEventListener('click', async () => {
  try {
    video.muted = false; // unmute on user interaction
    video.volume = slider.value / 100;
    await video.play();
    button.style.display = 'none';
  } catch (e) {
    alert("Your browser blocked the video from playing. Try clicking again.");
    console.error(e);
  }
});

slider.addEventListener('input', () => {
  const volume = slider.value / 100;
  video.volume = volume;
  volumeText.textContent = slider.value;

  if (volume === 0) {
    icon.className = 'iconVolume bx bxs-volume-mute';
  } else if (volume <= 0.5) {
    icon.className = 'iconVolume bx bxs-volume-low';
  } else {
    icon.className = 'iconVolume bx bxs-volume-full';
  }
});