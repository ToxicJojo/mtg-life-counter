import { html } from "./html";

const template = html`
  <label class="flex cursor-pointer">
    <input type="radio" name="player-count" value="2" class="hidden peer" />
    <span class="text-lg bg-white rounded-full py-1 px-6 peer-checked:bg-black peer-checked:text-white">2</span>
  </label>
`;

const templateElement = document.createElement("template");
templateElement.innerHTML = template.trim();

export default class SettingsOption extends HTMLElement {
  #inputElement: HTMLInputElement;
  #spanElement: HTMLSpanElement;

  static get observedAttributes() {
    return ["label", "value", "name", "checked"];
  }

  constructor() {
    super();

    this.appendChild(templateElement.content.cloneNode(true));

    this.#inputElement = this.querySelector("input") as HTMLInputElement;
    this.#spanElement = this.querySelector("span") as HTMLSpanElement;
  }

  get label() {
    return this.getAttribute("label") || "";
  }

  get value() {
    return this.getAttribute("value") || "";
  }

  get name() {
    return this.getAttribute("name") || "";
  }

  get checked() {
    return this.hasAttribute("checked");
  }

  attributeChangedCallback() {
    this.#inputElement.value = this.value;
    this.#inputElement.name = this.name;
    this.#inputElement.checked = this.checked;
    this.#spanElement.innerText = this.label;
  }
}

customElements.define("settings-option", SettingsOption);
