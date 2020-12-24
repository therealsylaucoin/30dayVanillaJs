//get random art imagine from API
const request = new XMLHttpRequest();

request.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=qd0w13Wk');
request.onload = function(){
    const data = JSON.parse(request.responseText);
    const artArray = data.artObjects;
    const randomIndex = Math.floor(Math.random() * artArray.length);
    const randomArt = artArray[randomIndex];
    const url = randomArt.webImage.url;

    const image = document.getElementById('image');
    image.src = url;
    console.log(image);
    
    const artTitle = document.querySelector('.title');
    artTitle.innerHTML = randomArt.title;
}

const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || ''; //gettign the data attribute from the inputs, aka, the px suffix
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

document.addEventListener("DOMContentLoaded", function(){
    request.send();
});

