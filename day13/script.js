const images = document.querySelectorAll('.slide-in');

//functions!!!
//function for sliding images

function checkSlide(e){
    images.forEach(image => {
        //Halfway through the image
        //window.scrollY = where you're scrolled at
        //window.innerHeight = viewport height
        //image.height / 2 = when we're halfway into the image
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
        //find the bottom of the image so that we can slide them back out. That way, if the user scolls down and back up, she will get the same effect
        const imageBottom = image.offsetTop + image.height;
        //store varibale to use them in if statement
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPassed = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPassed){
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    })
}

//debounce function - should always use a debounce on scroll animations
function debounce(func, wait = 20, immediate = true) { 
    var timeout;
    //this makes it so the function doesnt run constantly, in this case every 20 miliseconds
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//event listeners
window.addEventListener('scroll', debounce(checkSlide));