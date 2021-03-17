function makeMenu() {
    const menu = document.createElement(`div`);
    menu.classList.add(`menu`);

    menu.appendChild(addItem("Weenie Weenie", `Two 6 oz. weenies with your choice of toppings`));
    menu.appendChild(addItem("Mega Weenie", `14 oz. weenie with your choice of toppings`));
    menu.appendChild(addItem("Monster Weenie", `36 oz weenie with your choice of toppings`));
    
    const options = document.createElement(`p`);
    options.textContent = `Weenie options too big? Come to Super Weenie Hut Jr's for smaller weenies!`
    options.classList.add(`options`);
    menu.appendChild(options);
    
    return menu;
}

function addItem(name, description) {
    const foodItem = document.createElement(`div`);

    const itemName = document.createElement(`h1`);
    itemName.textContent = name;

    const itemDescription = document.createElement(`h3`);
    itemDescription.textContent = description;
    itemDescription.style.color = "#ff7f7f";
    itemDescription.textContent = description;
    
    const itemImage = document.createElement(`img`);
    itemImage.src = `./images/${name}.png`;
    itemImage.style.height = `200px`;
    itemImage.style.width = `300px`;
    itemImage.classList.add(`food-item`);
    
    foodItem.appendChild(itemName);
    foodItem.appendChild(itemDescription);
    foodItem.appendChild(itemImage);

    return foodItem;
}

function menuModule() {
    const mainContent = document.getElementById(`main`);
    mainContent.textContent = "";
    mainContent.appendChild(makeMenu());
}

export {menuModule};