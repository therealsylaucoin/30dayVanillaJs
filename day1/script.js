function playSound(e){
    //find the audio element that has the same data attribute as the key we are pressing.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //find the key to trigger the animation
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //if not key bind, stop the function from running
    //go back to the start of the audio file before it plays, that way it can play over and over again.
    audio.currentTime = 0;
    //play audio
    audio.play();
    //add the class playing
    key.classList.add('playing');//same as key.addClass('playing')
}

//same but on click
function handleClick(){
    const keyCode = this.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    if (!audio) return; //if not key bind, stop the function from running
    //go back to the start of the audio file before it plays, that way it can play over and over again.
    audio.currentTime = 0;
    audio.play();
    this.classList.add('playing');
}

function removeTransition(e){
    //propertyName is where "transform" lives (console.log the event to se it!)
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing'); 
}

//grab all the keys and listen to each one of them for the transitionend
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//listen for the keydown event, and then run this function
window.addEventListener('keydown', playSound);

//listen for the click
keys.forEach(key => key.addEventListener('click', handleClick));