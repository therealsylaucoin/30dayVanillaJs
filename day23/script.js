const msg = new SpeechSynthesisUtterance(); //Instance of what the browser will say
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

//get voices for drop down
function populateVoices(){
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice =>
            `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}

//pick the voice and set it
function setVoice(){
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

//change between voices (start, stop)
function toggle(startOver = true) {
    speechSynthesis.cancel();
    if(startOver){
        speechSynthesis.speak(msg);
    }
}

//set the options when they change
function setOption(){
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));