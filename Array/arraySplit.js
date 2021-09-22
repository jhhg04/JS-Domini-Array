// El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas. cadena.split([separador][,limite])

// const cities = 'Madrid, Valencia, Lugo';
// const newArray = cities.split('');
// console.log(cities); // expected output: Madrid, Valencia Lugo
// console.log(newArray); // expected output: ['M', 'a', 'd', 'r', 'i','d', ',', ' ', 'V', 'a','l', 'e', 'n', 'c', 'i', 'a', ',', ' ', 'L', 'u', 'g', 'o']

const cities = 'Madrid-Valencia-Lugo';
const newArray = cities.split('-');
console.log(cities); // Madrid-Valencia-Lugo
console.log(newArray); // [ 'Madrid', 'Valencia', 'Lugo' ]
