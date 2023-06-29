import { html } from "./html";

const template = html`
  <section
    class="flex justify-center items-center relative bg-teal-400 h-full rounded-2xl"
  >
    <button id="button-plus" class="absolute top-0 w-full h-1/2"></button>
    <p id="value" class="text-9xl font-bold">20</p>
    <button id="button-minus" class="absolute bottom-0 w-full h-1/2"></button>
  </section>
`;

const templateElement = document.createElement("template");
templateElement.innerHTML = template.trim();

export default class LifeCounter extends HTMLElement {
  value: number;
  valueElement: HTMLParagraphElement;

  constructor() {
    super();

    this.appendChild(templateElement.content.cloneNode(true));
    this.value = 20;

    const plusButton = this.querySelector("#button-plus")!;
    const minusButton = this.querySelector("#button-minus")!;
    this.valueElement = this.querySelector<HTMLParagraphElement>("#value")!;

    plusButton.addEventListener("click", () => this.#plus());
    minusButton.addEventListener("click", () => this.#minus());
  }

  #updateValue() {
    this.valueElement.innerText = this.value.toString();
  }

  #plus() {
    this.value++;
    this.#updateValue();
  }

  #minus() {
    this.value--;
    this.#updateValue();
  }
}
customElements.define("mtg-life-counter", LifeCounter);
