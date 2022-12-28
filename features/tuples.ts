const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 30,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 10];

const carSpecs: [number, number] = [400, 2133];

const carStats = {
  horsepower: 400,
  weight: 2133,
};
