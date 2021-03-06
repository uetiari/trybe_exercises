const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C
// Mars is 227900000 kilometers apart from the Sun
// Venus is 108200000 kilometers apart from the Sun
// Jupiter is 778500000 kilometers apart from the Sun

// ----------------------------------
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
// Mars is 227900000 kilometers apart from the Sun
// Jupiter is 778500000 kilometers apart from the Sun
// Venus is 108200000 kilometers apart from the Sun

// ----------------------------------
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};
getPlanet();
// imprime Marte depois de 4 segundos

// --------------------------------------
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a fun????o sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  const atualtemp = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${atualtemp} degree Celsius`), messageDelay());
}; 
// imprime "Mars temperature is: 20 degree Celsius", por exemplo
// console.log(sendMarsTemperature());
sendMarsTemperature();

// ---------------------------------
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}??F at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}??C at Mars`);

// defini????o da fun????o sendMarsTemperature com sucesso...
const sendMarsTemperature = (onSuccess) => {
  const atualtemp = getMarsTemperature();
  setTimeout(() => onSuccess(atualtemp), messageDelay());
}
sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47??F at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53??C at Mars", por exemplo


// ------------------------------------
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}??F at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}??C at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// defini????o da fun????o sendMarsTemperature...
const sendMarsTemperature = (onSuccess, onError) => {
  const atualtemp = getMarsTemperature();
  const msgSent = Math.random() < 0.6; // usa 0.6 considerando 100% sendo 1, ent??o 0.6 significa 60%
  setTimeout(() => {
    if (msgSent) {
      onSuccess(atualtemp)
    } else {
      onError('Sem internet');
    }
  }, messageDelay());
}
// imprime "It is currently 47??F at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53??C at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);