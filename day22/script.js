//grab all the links
const triggers = document.querySelectorAll('a');
//create the highlight
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

//listen for entering a link
function highlightLink() {
    //get the size of the element and where it is, so that we can highlight it
    const linkCoordinates = this.getBoundingClientRect();//this gives the height, width, y, x and position (super cool!)
    //create our own cooridnates to offset the scroll
    const coordinates = {
        width: linkCoordinates.width,
        height: linkCoordinates.height,
        top: linkCoordinates.top + window.scrollY,
        left: linkCoordinates.left + window.scrollX,
    }
    highlight.style.width = `${coordinates.width}px`;
    highlight.style.height = `${coordinates.height}px`;
    highlight.style.transform = `translate(${coordinates.left}px, ${coordinates.top}px)`
}

triggers.forEach(link => link.addEventListener('mouseenter', highlightLink));
