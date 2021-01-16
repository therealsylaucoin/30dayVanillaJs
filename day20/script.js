window.SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true; //this allows the browser to input the text while you're speaking. If false, need to stop speaking for text to be printed.

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

//lets get what is being said!
recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

        p.textContent = transcript;
        //check if the result is final, if so, let's create a NEW paragraph (if not, it overwrites)
        if (e.results[0].isFinal) { //isFinal is a property inside the speach object being returned
            p = document.createElement('p');
            words.appendChild(p);
        }
});

//this is so that it starts up again, after the user is finished speaking. aka between sentences.
recognition.addEventListener('end', recognition.start);

recognition.start();

//use transcript.includes to build a fun app - get weather etc. 

