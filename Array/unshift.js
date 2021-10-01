// El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

const cities = ['Madrid', 'Valencia', 'Lugo'];
const len = cities.unshift('Sevilla', 'Barcelona');
console.log(cities); // expected output: [ 'Sevilla', 'Barcelona', 'Madrid', 'Valencia', 'Lugo' ]
console.log(len); // expected output: 5
