window.addEventListener('keydown', (e) => key(e));
//array for keys
const pressedSyl = [];
const pressedKonami = [];
const secretCode = 'sylcodes';
const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

function key(e){
    pressedSyl.push(e.key);
    pressedSyl.splice(-secretCode.length -1, pressedSyl.length - secretCode.length);
    pressedKonami.push(e.key);
    console.log(pressedKonami);
    pressedKonami.splice(-konami.length -1, pressedKonami.length - konami.length);
    if (pressedSyl.join('').includes(secretCode) || pressedKonami === konami) {
        cornify_add();
    }
}