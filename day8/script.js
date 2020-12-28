const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //the context is essentially the copy of the canvas you're interacting with. Could be 3d.

//set the canvas sizxe to the full window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//base settings
// ctx.strokeStyle = "#BADA55"; //base colour
ctx.lineJoin = 'round'; //whne lines meet
ctx.lineCap = 'round'; //when lines end
ctx.lineWidth = 10;

//set a variable to let the app knwo when to draw
let isDrawing = false;
//set variables to let the app knwo where we are drawing
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
    if (!isDrawing) return ; //stop the function from running when they are not mousedown
    //set hue (using hsl - see https://mothereffinghsl.com/)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    //start a path
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // lastX = e.offsetX;
    // lastY = e.offsetY;
    [ lastX, lastY ] = [ e.offsetX, e.offsetY ];
    hue++;
}

//mousedown happens before mousemove! So lets do some shit here
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [ lastX, lastY ] = [ e.offsetX, e.offsetY ];
    });

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
