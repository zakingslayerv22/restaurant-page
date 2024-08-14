import "./index.css";
import { createMenuModule } from './menu/menu.module';
import { createAboutModule } from "./about/about.module";




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

homeButton.addEventListener ("click", () => {
    container.textContent = "";
    createHomeModule();
});

menuButton.addEventListener("click", () => {
    container.textContent = "";
    createMenuModule();
});

aboutButton.addEventListener("click", () => {
    container.textContent = "";
    createAboutModule();
});
