import './menu.css'

export function createMenuModule () {
    const container = document.querySelector("#content")

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");


    const menuH3 = document.createElement("h3");
    menuH3.classList.add("menu-h3");
    menuH3.textContent = "Explore our array of delicacies."

    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.classList.add("menu-items-container");

    const caesarSalad = document.createElement("div");

    const tomatoPasta = document.createElement("div");

    const marinatedChicken = document.createElement("div");

    const bakedPotatoes = document.createElement("div");

    const saladeNicoise = document.createElement("div");

    const bouillabaisse = document.createElement("div");



    container.appendChild(menuContainer);

    menuContainer.append(menuH3, menuItemsContainer);

    menuItemsContainer.append(caesarSalad, tomatoPasta, marinatedChicken, 
        bakedPotatoes, saladeNicoise, bouillabaisse);
}

