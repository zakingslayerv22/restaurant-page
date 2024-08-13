import './about.css'

export function createAboutModule () {
    const container = document.querySelector("#content")

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    aboutContainer.textContent = "J'aimerais me présenter.";

    container.appendChild(aboutContainer);
}