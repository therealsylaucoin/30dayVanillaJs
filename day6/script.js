const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

//get all the cities
fetch(endpoint) //fetch returns a promise
    .then(result => result.json()) //turn that promise into json
    .then(data => cities.push(...data)); //spread the data to properly push it

//function to find
function findMatches(word, cities) {
    return cities.filter(place => {
        //need to figure out if the city or state matches what was searched
        const regex = new RegExp(word, 'gi');//global and insensitive
        return place.city.match(regex) || place.state.match(regex);
    })
}

//from stackoverflow
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//function to display matches
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        //this is for the highlighting of the string that matches what's being searched
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `
    }).join(''); //to turn it into a string (if you remove join, youll get a comma between each result)
    suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatches); //for on change to fire, user needs to move cursor
searchInput.addEventListener('keyup', displayMatches); //so lets call it on keyup as well