
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

    const statsList = document.createElement("ul");
    statsList.className = "card--text";

    pokemon.stats.forEach(element => {
        const statItem = document.createElement("li");
        statItem.textContent = `${element.stat.name.toUpperCase()}: ${element.base_stat}`;
        statsList.appendChild(statItem);
    });

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(statsList);

    return card;
}

AddCards();
