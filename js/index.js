import { syncNavState, setupTabTrapping } from "./nav.js";
import { initCarouselBtns } from "./carousel.js";
import { loadData, getPlanetInfoByName, getCrewMemberByIndex } from "./data.js";
import {
  initPlanetsListener,
  updateDistance,
  updateName,
  updateText,
  updateTime,
} from "./destinations.js";

import { initDotsListener, render } from "./crew.js";

syncNavState();
setupTabTrapping();
initCarouselBtns();

initPlanetsListener(handlePlanetClicked);
initDotsListener(handleCrewDotClicked);

function handlePlanetClicked(planetName) {
  const planet = getPlanetInfoByName(planetName);

  updateName(planet.name);
  updateText(planet.description);

  updateDistance(planet.distance);
  updateTime(planet.travel);
}

function handleCrewDotClicked(crewMemberIndex) {
  const crewMember = getCrewMemberByIndex(crewMemberIndex);
  render(crewMember);
}
