import { syncNavState, setupTabTrapping } from "./nav.js";
import { initCarouselBtns } from "./carousel.js";
import { loadData, getPlanetInfoByName } from "./data.js";
import {
  initPlanetsListener,
  updateDistance,
  updateName,
  updateText,
  updateTime,
} from "./destinations.js";

syncNavState();
setupTabTrapping();
initCarouselBtns();

initPlanetsListener(handlePlanetClicked);

function handlePlanetClicked(planetName) {
  const planet = getPlanetInfoByName(planetName);

  updateName(planet.name);
  updateText(planet.description);

  updateDistance(planet.distance);
  updateTime(planet.travel);
}
