let searchInputObject = document.getElementById('search');

document.getElementById('get-character').addEventListener('click', function() {

});

document.getElementById('get-all-characters').addEventListener('click', function() {

});

searchInputObject.addEventListener('keyup', function() {

});

function fetchRandomCharacter() {
    let randomID = Math.floor(Math.random() * 9) + 1;

    fetch(`hhtps://swapi.dev/api/people/${randomID}/`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('character').innerHTML = 
        `<h2>${data.name}</h2>
        <p>Height: ${data.height}cm</p>
        <p>Mass: ${data.mass}kg</p>
        <p>Hair Color: ${data.hair_color}</p>
        <p>Skin Color: ${data.skin_color}</p>
        <p>Eye Color: ${data.eye_color}</p>
        <p>Birth Year: ${data.Birth_year}</p>
        <p>Gender: ${data.gender}</p>`
    })
    .catch(error => console.log('Error: ', error));
}