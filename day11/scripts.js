//get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenButton = player.querySelector('.fullscreen');

//build out functions!
//play and pause video
function togglePlay(){ //video.paused property lives on the video element (not play)
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

//update the button
function updateButton(){
    const icon = video.paused ? "►" : "⏸";
    toggle.innerHTML = icon;
}

//skip the video
function skip(){
    video.currentTime += parseFloat(this.dataset.skip); //parseFlaot to turn into number
}

//control volume
function handleRangeUpdate(){
    const range = this.name;
    video[range] = this.value;
}

//progress bar
function handleProgess(){
    const percent = video.currentTime / video.duration * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

//change video on scrub
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function fullscreen(){
    video.requestFullscreen();
}

//hook up event listeners!
//play and pause video
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
//update button (play/pause)
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
//skip the video
skipButtons.forEach(button => button.addEventListener('click', skip));
//adjust volume + speed
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
//progressbar
video.addEventListener('timeupdate', handleProgess);
//scrub
progress.addEventListener('click', scrub);
let mousedown = false;
progress.addEventListener('mousedown', () => {mousedown = true});
progress.addEventListener('mouseup', () => {mousedown = false});
progress.addEventListener('mousemove', (e) => mousedown  && scrub(e));
//fullscreen
fullscreenButton.addEventListener('click', fullscreen);
