const planetsList = document.getElementById("planetsList");
const titleEl = document.getElementById("destinationTitle");
const textEl = document.getElementById("destinationText");
const distanceEl = document.getElementById("distance");
const timeEl = document.getElementById("time");

export function initPlanetsListener(onPlanetButtonClicked) {
  if (planetsList == null) return;
  planetsList.addEventListener("click", (ev) => {
    const target = ev.target;
    const listItemEl = ev.target.closest(".planets__item");

    if (listItemEl == null) return;

    const planetName = listItemEl.querySelector("button").textContent.trim();

    onPlanetButtonClicked && onPlanetButtonClicked(planetName);
  });
}

export function updateName(name) {
  if (titleEl == null) return;

  titleEl.textContent = name;
}

export function updateText(text) {
  if (textEl == null) return;

  textEl.textContent = text;
}

export function updateDistance(distance) {
  if (distanceEl == null) return;

  distanceEl.textContent = distance;
}

export function updateTime(time) {
  if (timeEl == null) return;

  timeEl.textContent = time;
}
