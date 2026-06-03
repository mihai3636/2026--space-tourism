import { syncNavState, setupTabTrapping } from "./nav.js";
import { initCarouselBtns } from "./carousel.js";
import {
  loadData,
  getPlanetInfoByName,
  getCrewMemberByIndex,
  getTechByIndex,
} from "./data.js";
import {
  initPlanetsListener,
  updateDistance,
  updateName,
  updateText,
  updateTime,
} from "./destinations.js";

import { initDotsListener, render } from "./crew.js";

import {
  initDotsListener as initTechDots,
  render as renderTech,
} from "./tech.js";

setupTabTrapping();

initCarouselBtns();
initPlanetsListener(handlePlanetClicked);
initDotsListener(handleCrewDotClicked);
initTechDots(handleTechDotClicked);

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

function handleTechDotClicked(techIndex) {
  const techData = getTechByIndex(techIndex);
  renderTech(techData);
}
