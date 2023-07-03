import { html } from "./html";

const template = html`
  <section id="container" class="flex flex-col justify-center items-center relative h-full rounded-2xl">
    <button id="button-plus" class="w-full h-full flex-1 z-10"></button>
    <p id="value" class="absolute text-9xl font-bold ">20</p>
    <button id="button-minus" class="w-full h-full flex-1 z-10"></button>
  </section>
`;

const templateElement = document.createElement("template");
templateElement.innerHTML = template.trim();

export default class LifeCounter extends HTMLElement {
  #value: number;
  #valueElement: HTMLParagraphElement;
  #containerElement: HTMLElement;

  static get observedAttributes() {
    return ["orientation", "color"];
  }

  constructor() {
    super();

    this.appendChild(templateElement.content.cloneNode(true));

    this.#value = 20;
    this.#containerElement = this.querySelector("#container") as HTMLElement;
    this.#valueElement = this.querySelector<HTMLParagraphElement>("#value") as HTMLParagraphElement;
  }

  connectedCallback() {
    const plusButton = this.querySelector("#button-plus") as HTMLButtonElement;
    const minusButton = this.querySelector("#button-minus") as HTMLButtonElement;

    plusButton.addEventListener("click", () => this.#plus());
    minusButton.addEventListener("click", () => this.#minus());
  }

  #updateValue() {
    this.#valueElement.innerText = this.#value.toString();
  }

  #plus() {
    this.#value++;
    this.#updateValue();
  }

  #minus() {
    this.#value--;
    this.#updateValue();
  }

  get orientation() {
    return this.getAttribute("orientation");
  }

  set orientation(newOrientation) {
    if (newOrientation) {
      this.setAttribute("orientation", newOrientation);
    } else {
      this.removeAttribute("orientation");
    }

    this.updateRender();
  }

  get color() {
    return this.getAttribute("color") || "teal";
  }

  set color(newColor) {
    this.setAttribute("color", newColor || "");
    this.updateRender();
  }

  updateRender() {
    this.#containerElement.className = "flex relative justify-center items-center h-full rounded-2xl animate-grow-once";
    if (this.orientation === "north") {
      this.#containerElement.classList.add("flex-col");
      this.#valueElement.classList.remove("rotate-180");
    } else if (this.orientation === "south") {
      this.#containerElement.classList.add("flex-col", "flex-col-reverse");
      this.#valueElement.classList.add("rotate-180");
    } else if (this.orientation === "east") {
      this.#containerElement.classList.add("flex-row");
      this.#valueElement.classList.add("-rotate-90");
    } else if (this.orientation === "west") {
      this.#containerElement.classList.add("flex-row", "flex-row-reverse");
      this.#valueElement.classList.add("rotate-90");
    }

    if (this.color === "teal") {
      this.#containerElement.classList.add("bg-teal-500");
    } else if (this.color === "red") {
      this.#containerElement.classList.add("bg-red-400");
    } else if (this.color === "purple") {
      this.#containerElement.classList.add("bg-purple-400");
    } else if (this.color === "sky") {
      this.#containerElement.classList.add("bg-sky-500");
    }
  }

  attributeChangedCallback() {
    this.updateRender();
  }

  reset() {
    this.#value = 20;
    this.#updateValue();
  }
}

customElements.define("mtg-life-counter", LifeCounter);
