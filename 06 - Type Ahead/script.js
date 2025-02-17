const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data)); //(...) spread the array into the cities array

const findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
        //here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi'); 
        return place.city.match(regex) || place.state.match(regex);
    })
};

const numberWithCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');

        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join('');
    document.querySelector('.suggestions').innerHTML = html;
};

const searchInput = document.querySelector('.search');

searchInput.addEventListener('change', displayMatches); //when the input changes, it will run the displayMatches function
searchInput.addEventListener('keyup', displayMatches);  //when the user types, it will run the displayMatches function