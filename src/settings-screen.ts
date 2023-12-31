import { html } from "./html";

const template = html`
  <form class="absolute top-0 bottom-0 left-0 right-0 p-4 bg-sky-200 z-30">
    <div class="flex flex-col gap-4 container mx-auto h-full">
      <h1 class="text-3xl text-center">Settings</h1>
      <fieldset class="flex flex-wrap gap-4">
        <legend class="flex mb-2">Player Count</legend>
        <settings-option name="player-count" value="1" label="1" checked></settings-option>
        <settings-option name="player-count" value="2" label="2"></settings-option>
        <settings-option name="player-count" value="3" label="3"></settings-option>
        <settings-option name="player-count" value="4" label="4"></settings-option>
      </fieldset>
      <fieldset class="flex flex-wrap gap-4">
        <legend class="flex mb-2">Starting Life</legend>
        <settings-option name="starting-life" value="20" label="20" checked></settings-option>
        <settings-option name="starting-life" value="30" label="30"></settings-option>
        <settings-option name="starting-life" value="40" label="40"></settings-option>
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
      const startingLife = +(formData.get("starting-life") as string);

      this.dispatchEvent(
        new CustomEvent("save", {
          detail: {
            playerCount,
            startingLife,
          },
        })
      );
    });
  }
}

customElements.define("mtg-settings-screen", SettingsScreen);
