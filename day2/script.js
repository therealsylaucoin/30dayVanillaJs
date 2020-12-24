    //analog clock
    const secondHand = document.querySelector('.secondHand');
    const minHand = document.querySelector('.minHand');
    const hourHand = document.querySelector('.hourHand');

    //digital clock
    const secondDisplay = document.querySelector('.secondDisplay');
    const minDisplay = document.querySelector('.minDisplay');
    const hourDisplay = document.querySelector('.hourDisplay');

    const button = document.querySelector('button');
    const digitalClock = document.querySelector('.digital');
    const analogClock = document.querySelector('.analog');

    function buttonToggle(){
        digitalClock.classList.toggle('visible');
        analogClock.classList.toggle('visible');
        if (button.innerHTML === 'Digital'){
        button.innerHTML = 'Analog';
        } else {
        button.innerHTML = 'Digital';
        }
    }

    function setDate(){
        //get now's date/time
        const now = new Date();
        //get the seconds, minutes and hours
        //translate those values into degrees
        //Apply styles to the hand in question!
        const seconds = now.getSeconds();
        //analog:
        const secondsDegrees = ((seconds / 60) * 360) + 90; //plus 90 to offset the 90 degrees we gave it in style to start from the top (aka 12hr)
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        //digital:
        secondDisplay.innerHTML = seconds < 10 ? "0" + seconds : seconds;

        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minutesDegrees}deg)`;
        minDisplay.innerHTML = minutes < 10 ? "0" + minutes : minutes;

        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
        hourDisplay.innerHTML = hours < 10 ? "0" + hours : hours;
    }

    setInterval(setDate, 1000); //call every second

    setDate();

    button.addEventListener('click', buttonToggle);