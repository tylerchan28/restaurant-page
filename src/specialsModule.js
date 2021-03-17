function addSpecials() {
    const specialDiv = document.createElement(`div`);
    specialDiv.classList.add(`special-div`);
    
    specialDiv.appendChild(addText(`Monster Weenie Monday`, `Free upgrade to a Monster Weenie!`));
    specialDiv.appendChild(addText(`Double Weenie Wednesday`, `Buy one weenie, get a second free!`));
    specialDiv.appendChild(addText(`Mega Weenie Sunday`, `Mega Weenies half off!`));

    return specialDiv;
}

function addText(words, description) {
    const newSpecial = document.createElement(`p`);
    newSpecial.textContent = words;

    const itemDescription = document.createElement(`h1`);
    itemDescription.textContent = description;
    itemDescription.style.fontSize = "18px";
    itemDescription.style.textAlign = "center";
    itemDescription.style.color = "#ff7f7f";

    newSpecial.appendChild(itemDescription);
    
    return newSpecial;
}

function specialsModule() {
    const mainContent = document.getElementById(`main`);
    mainContent.textContent = ``;
    mainContent.appendChild(addSpecials());
}

export {specialsModule};