const URL_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const response = await fetch(URL_PLANETS);
  const json = await response.json();
  return json.results;
};

export default getPlanets;
