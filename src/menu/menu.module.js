import './menu.css'
import CaesarSalad from './menu-assets/images/caesar-salad.webp';
import TomatoPasta from './menu-assets/images/spaghetti-al-pomodoro.webp';
import MarinatedChicken from './menu-assets/images/chicken-inasal.webp';
import BakedPotatoes from './menu-assets/images/kumpir.webp';
import SaladeNicoise from './menu-assets/images/salade-nicoise.webp';
import Bouillabaisse from './menu-assets/images/bouillabaisse.webp';

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
    const caesarSaladImage = new Image();
    caesarSaladImage.src = CaesarSalad;

    const tomatoPasta = document.createElement("div");
    const tomatoPastaImage = new Image();
    tomatoPastaImage.src = TomatoPasta;

    const marinatedChicken = document.createElement("div");
    const marinatedChickenImage = new Image();
    marinatedChickenImage.src = MarinatedChicken;

    const bakedPotatoes = document.createElement("div");
    const bakedPotatoesImage = new Image();
    bakedPotatoesImage.src = BakedPotatoes;

    const saladeNicoise = document.createElement("div");
    const saladeNicoiseImage = new Image();
    saladeNicoiseImage.src = SaladeNicoise;


    const bouillabaisse = document.createElement("div");
    const bouillabaisseImage = new Image();
    bouillabaisseImage.src = Bouillabaisse;



    container.appendChild(menuContainer);

    menuContainer.append(menuH3, menuItemsContainer);

    menuItemsContainer.append(caesarSalad, tomatoPasta, marinatedChicken, 
        bakedPotatoes, saladeNicoise, bouillabaisse);

    caesarSalad.appendChild(caesarSaladImage);
    tomatoPasta.appendChild(tomatoPastaImage);
    marinatedChicken.appendChild(marinatedChickenImage);
    bakedPotatoes.appendChild(bakedPotatoesImage);
    saladeNicoise.appendChild(saladeNicoiseImage);
    bouillabaisse.appendChild(bouillabaisseImage);
}

