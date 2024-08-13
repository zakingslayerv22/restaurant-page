import './menu.css'

export function createMenuModule () {
    const container = document.querySelector("#content")

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuContainer.textContent = "Puis-je voir votre menu ?";

    container.appendChild(menuContainer);
}

