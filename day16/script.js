const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100; //the maximum that the shadow can be walked over

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y} = e;

    //this if statement is to make the values consistent with where we are on the page. If we removeit, we can see that when our mouse is on the h1, the coordinates go back to 0 (top left corner)
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    //if our walk is 100, aka the highest, we want to be at 50, and go as low as -50
    const xWalk = (x / width * walk) - (walk  /2);
    const yWalk = (y / height * walk) - (walk  /2);

    text.style.textShadow = 
    `${xWalk}px ${yWalk}px 0 grey,
    ${xWalk * -1}px ${yWalk}px 0 yellow,
    ${yWalk}px ${xWalk * -1}px 0 teal,
    ${yWalk * -1}px ${xWalk}px 0 hotpink`
    
}

hero.addEventListener('mousemove', shadow);
