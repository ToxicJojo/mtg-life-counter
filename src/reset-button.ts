import { html } from "./html";
import LifeCounter from "./life-counter";

const template = html`
  <button class="absolute bottom-4 right-4 bg-black w-12 h-12 rounded-full flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
      <path
        fill="white"
        d="M480-160q-133 0-226.5-93.5T160-480q0-133 93.5-226.5T480-800q85 0 149 34.5T740-671v-129h60v254H546v-60h168q-38-60-97-97t-137-37q-109 0-184.5 75.5T220-480q0 109 75.5 184.5T480-220q83 0 152-47.5T728-393h62q-29 105-115 169t-195 64Z"
      />
    </svg>
  </button>
`;

const templateElement = document.createElement("template");
templateElement.innerHTML = template.trim();

export default class ResetButton extends HTMLElement {
  constructor() {
    super();

    this.appendChild(templateElement.content.cloneNode(true));

    const buttonElement = this.querySelector("button");
    buttonElement?.addEventListener("click", () => {
      const lifeCounters = document.querySelectorAll<LifeCounter>("mtg-life-counter");
      lifeCounters.forEach((lifecounter) => {
        lifecounter.reset();
      });

      buttonElement.classList.add("animate-spin-once");
      setTimeout(() => {
        buttonElement.classList.remove("animate-spin-once");
      }, 300);
    });
  }
}

customElements.define("mtg-reset-button", ResetButton);
