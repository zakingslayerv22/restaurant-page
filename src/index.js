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


    const heroLeft = document.createElement("div");
    heroLeft.classList.add("hero-left-container");

    const heroText = document.createElement("div");
    heroText.classList.add("hero-text-container");

    const heroH1 = document.createElement("h1");
    heroH1.classList.add("hero-h1");
    heroH1.textContent = "Feednotize Me";

    const heroParagraph = document.createElement("p");
    heroParagraph.classList.add("hero-paragraph");  
    heroParagraph.textContent = `Since 1970, Feednotize Me has
    been concerned with conjuring meals that has always left
    even the finest of connoisseurs salivating with wonder."`

    const heroButton = document.createElement("button");
    heroButton.classList.add("hero-button");
    heroButton.textContent = "Browse Menu >>"

    const heroRight = document.createElement("div");
    heroRight.classList.add("hero-image-container");
    heroRight.textContent = `I am waiting for my image`;



    container.appendChild(homeContainer);
    homeContainer.append(heroLeft, heroRight);
    heroLeft.append(heroText, heroButton);
    heroText.append(heroH1, heroParagraph);
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