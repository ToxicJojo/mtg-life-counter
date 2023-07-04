import LifeCounter from "./life-counter";

const settingsScreen = document.querySelector("mtg-settings-screen");
const settingsButton = document.querySelector("mtg-settings-button");
const resetButton = document.querySelector("mtg-reset-button");
const counterWrapper = document.querySelector("#counter-wrapper") as HTMLDivElement;

settingsButton?.addEventListener("click", showSettings);
settingsScreen?.addEventListener("save", updateSettings as EventListener);
resetButton?.addEventListener("click", resetCounters);

function updateSettings(e: CustomEvent<{ playerCount: number; startingLife: number }>) {
  counterWrapper.innerHTML = "";
  counterWrapper.className = "grid gap-2 h-full";

  if (e.detail.playerCount === 1) {
    const counter = new LifeCounter();
    counter.orientation = "north";
    counter.color = "sky";
    counter.startingLife = e.detail.startingLife;
    counterWrapper?.appendChild(counter);
    counterWrapper.classList.add("grid-cols-1", "grid-rows-1");
  }

  if (e.detail.playerCount === 2) {
    const counter1 = new LifeCounter();
    counter1.orientation = "south";
    counter1.color = "red";
    counter1.startingLife = e.detail.startingLife;
    counterWrapper?.appendChild(counter1);

    const counter2 = new LifeCounter();
    counter2.orientation = "north";
    counter2.color = "sky";
    counter2.startingLife = e.detail.startingLife;
    counterWrapper?.appendChild(counter2);

    counterWrapper.classList.add("grid-cols-1", "grid-rows-2");
  }

  if (e.detail.playerCount === 3) {
    const counter1 = new LifeCounter();
    counter1.orientation = "west";
    counter1.color = "red";
    counter1.classList.add("row-span-2");
    counter1.startingLife = e.detail.startingLife;
    counterWrapper?.appendChild(counter1);

    const counter2 = new LifeCounter();
    counter2.orientation = "south";
    counter2.color = "sky";
    counter2.startingLife = e.detail.startingLife;
    counterWrapper?.appendChild(counter2);

    const counter3 = new LifeCounter();
    counter3.orientation = "north";
    counter3.color = "purple";
    counter3.startingLife = e.detail.startingLife;
    counterWrapper?.appendChild(counter3);

    counterWrapper.classList.add("grid-cols-2", "grid-rows-2");
  }

  if (e.detail.playerCount === 4) {
    const counter1 = new LifeCounter();
    counter1.orientation = "south";
    counter1.color = "red";
    counter1.startingLife = e.detail.startingLife;
    counterWrapper?.appendChild(counter1);

    const counter2 = new LifeCounter();
    counter2.orientation = "south";
    counter2.color = "sky";
    counter2.startingLife = e.detail.startingLife;
    counterWrapper?.appendChild(counter2);

    const counter3 = new LifeCounter();
    counter3.orientation = "north";
    counter3.color = "purple";
    counter3.startingLife = e.detail.startingLife;
    counterWrapper?.appendChild(counter3);

    const counter4 = new LifeCounter();
    counter4.orientation = "north";
    counter4.color = "teal";
    counter4.startingLife = e.detail.startingLife;
    counterWrapper?.appendChild(counter4);

    counterWrapper.classList.add("grid-cols-2", "grid-rows-2");
  }

  hideSettings();
}

function showSettings() {
  settingsScreen?.classList.remove("hidden");
}

function hideSettings() {
  settingsScreen?.classList.add("hidden");
}

function resetCounters() {
  const lifeCounters = document.querySelectorAll<LifeCounter>("mtg-life-counter");
  lifeCounters.forEach((lifecounter) => {
    lifecounter.reset();
  });
}
