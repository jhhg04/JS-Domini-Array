// El método slice() devuelve una copia de una parte del array, empezando por inicio hasta fin (fin no incluido). El array original no se modificara.

const cities = ['Madrid', 'Valencia', 'Lugo'];
const newArray = cities.slice(1, 2);
console.log(cities); // expected output: [ 'Madrid', 'Valencia', 'Lugo' ]
console.log(newArray); // expected output: [ 'Valencia' ]
