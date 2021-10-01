// El método slice() devuelve una copia de una parte del array, empezando por inicio hasta fin (fin no incluido). El array original no se modificara.

const cities = ['Madrid', 'Valencia', 'Lugo'];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newCities = cities.slice(1, 2);
const newNums = nums.slice(0, 4);

console.log(cities); // expected output: [ 'Madrid', 'Valencia', 'Lugo' ]
console.log(newCities); // expected output: [ 'Valencia' ]

console.log(nums); // expected output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(newNums); // expected output: [ 1, 2, 3, 4 ]
