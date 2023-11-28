//your JS code here. If required.
const btn = document.querySelectorAll(".btn");
const stop = document.querySelector(".stop");
const audio = document.querySelector("#audio");

btn.forEach((button) => {
	button.addEventListener('click', () => {
		const soundName = button.dataset.sound;
		const soundPath = `sounds/${soundName}.mp3`;
		audio.src = soundPath;
		audio.play();
	});
});

stop.addEventListener('click', () => {
	audio.pause();
	audio.src='';
});
