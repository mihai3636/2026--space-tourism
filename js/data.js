let data = {};

await loadData();

export async function loadData() {
  const response = await fetch("../data.json");
  const dataJson = await response.json();

  data = dataJson;
}

export function getPlanetInfoByName(name) {
  return data?.destinations.find((planet) => planet.name === name);
}
