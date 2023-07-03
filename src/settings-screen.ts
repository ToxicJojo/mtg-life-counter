import { html } from "./html";

const template = html`
  <form class="absolute top-0 bottom-0 left-0 right-0 p-4 bg-sky-200 z-30">
    <div class="flex flex-col gap-4 container mx-auto h-full">
      <h1 class="text-3xl text-center">Settings</h1>
      <fieldset class="flex flex-wrap gap-4">
        <legend class="flex mb-2">Player Count</legend>
        <label class="flex cursor-pointer">
          <input type="radio" name="player-count" value="1" class="hidden peer" checked />
          <span class="text-lg bg-white rounded-full py-1 px-6 peer-checked:bg-black peer-checked:text-white">1</span>
        </label>
        <label class="flex cursor-pointer">
          <input type="radio" name="player-count" value="2" class="hidden peer" />
          <span class="text-lg bg-white rounded-full py-1 px-6 peer-checked:bg-black peer-checked:text-white">2</span>
        </label>
        <label class="flex cursor-pointer">
          <input type="radio" name="player-count" value="3" class="hidden peer" />
          <span class="text-lg bg-white rounded-full py-1 px-6 peer-checked:bg-black peer-checked:text-white">3</span>
        </label>
        <label class="flex cursor-pointer">
          <input type="radio" name="player-count" value="4" class="hidden peer" />
          <span class="text-lg bg-white rounded-full py-1 px-6 peer-checked:bg-black peer-checked:text-white">4</span>
        </label>
      </fieldset>
      <div class="flex-1"></div>
      <button type="submit" id="button-save" class="bg-black p-4 font-bold text-white rounded-full">
        Save Settings
      </button>
    </div>
  </form>
`;

const templateElement = document.createElement("template");
templateElement.innerHTML = template.trim();

export default class SettingsScreen extends HTMLElement {
  constructor() {
    super();

    this.appendChild(templateElement.content.cloneNode(true));

    const settingsForm = this.querySelector("form");
    settingsForm?.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(settingsForm);
      const playerCount = +(formData.get("player-count") as string);

      this.dispatchEvent(
        new CustomEvent("save", {
          detail: {
            playerCount,
          },
        })
      );
    });
  }
}

customElements.define("mtg-settings-screen", SettingsScreen);
