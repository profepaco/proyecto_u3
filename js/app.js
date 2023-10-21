
const clienteApi = async () => {
    try{
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");
        //console.log(respuesta);
        //const datos = await respuesta.json();
        //console.log(datos);
        //se destructuran los datos.
        const {results} = await respuesta.json();        
        generaPersonajes(results);
    }catch(error){
        console.log(error);
    }
}

function generaPersonajes(results){
    const characters = document.getElementById('characters');
    for(let result of results){
        const {name,status,species,image, location} = result;
        //creando el contenedor del personaje
        const character = document.createElement('div');
        character.classList.add('character');
        //creando el detalle del personaje

        const characterImage = document.createElement('img');
        characterImage.src = image;
        characterImage.alt = "Imagen personaje"

        const characterDetail = document.createElement('div');
        characterDetail.classList.add('character-detail');
        
        const titulo = document.createElement('h3');
        titulo.textContent = name;
        const statusCharacter = document.createElement('p');
        statusCharacter.innerHTML = `${status} - ${species}`;
        
        const labelLocation = document.createElement('p');
        labelLocation.innerHTML = `Último lugar conocido`;
        labelLocation.classList.add('label');

        const locationName = document.createElement('p');
        locationName.innerHTML = `${location.name}`;
        
        characterDetail.appendChild(titulo);
        characterDetail.appendChild(statusCharacter);
        characterDetail.appendChild(labelLocation);
        characterDetail.appendChild(locationName);

        character.appendChild(characterImage);
        character.appendChild(characterDetail);

        characters.appendChild(character);
    }
}

clienteApi();



