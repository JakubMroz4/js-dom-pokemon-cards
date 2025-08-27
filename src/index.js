
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


function AddCards(){
    let cardsDiv = document.getElementsByClassName('cards')[0]

    data.forEach(pokemon => {
        const card = CreateCard(pokemon);
        cardsDiv.appendChild(card);
    });
}

function CreateCard(pokemon){
    const card = document.createElement("li");
    card.className = "card";

    const title = document.createElement("h2");
    title.className = "card--title";
    title.textContent = pokemon.name;

    const img = document.createElement("img");
    img.className = "card--img";
    img.src = pokemon["sprites"]["other"]["official-artwork"]["front_default"];
    img.width = 256;
    img.height = 256;

    const statsList = document.createElement("ul");
    statsList.className = "card--text";

    pokemon.stats.forEach(element => {
        const statItem = document.createElement("li");
        statItem.textContent = `${element.stat.name.toUpperCase()}: ${element.base_stat}`;
        statsList.appendChild(statItem);
    });

    const gamesHeader = document.createElement("h4");
    gamesHeader.className = "card--text2";
    gamesHeader.textContent = "Present in: ";

    const gamesContent = document.createElement("p");
    gamesContent.className = "card--text2";
    let gamesString = "";

    pokemon.game_indices.forEach(element => {
        let name = element.version.name;
        gamesString += name + ", ";
    });
    gamesContent.textContent = gamesString;

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(statsList);
    card.appendChild(gamesHeader)
    card.appendChild(gamesContent)

    let imageUrls = [];
    imageUrls.push(pokemon["sprites"]["other"]["official-artwork"]["front_default"]);
    imageUrls.push(pokemon["sprites"]["other"]["dream_world"]["front_default"]);
    let currentIndex = 0;

    img.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        img.src = imageUrls[currentIndex];
    });

    return card;
}

AddCards();
