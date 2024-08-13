import "./index.css";

const container = document.querySelector("#content");

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");


function createHomeModule() {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
    homeContainer.textContent = "Je suis chez moi.";

    container.appendChild(homeContainer);
}

createHomeModule()


