const planetsList = document.getElementById("planetsList");
const titleEl = document.getElementById("destinationTitle");
const textEl = document.getElementById("destinationText");
const distanceEl = document.getElementById("distance");
const timeEl = document.getElementById("time");

export function initPlanetsListener(onPlanetButtonClicked) {
  planetsList.addEventListener("click", (ev) => {
    const target = ev.target;
    const listItemEl = ev.target.closest(".planets__item");

    if (listItemEl == null) return;

    const planetName = listItemEl.querySelector("a").textContent;

    onPlanetButtonClicked && onPlanetButtonClicked(planetName);
  });
}

export function updateName(name) {
  titleEl.textContent = name;
}

export function updateText(text) {
  textEl.textContent = text;
}

export function updateDistance(distance) {
  distanceEl.textContent = distance;
}

export function updateTime(time) {
  timeEl.textContent = time;
}
