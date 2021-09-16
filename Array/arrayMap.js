// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. los paramatros 2 y 3 son opcionales

// const cities = ['Madrid', 'Valencia', 'Lugo'];
// const newArray = cities.map(function (current, index, array) {
//   console.log('Current ', current);
//   console.log('Index ', index);
//   console.log('Array ', array);
// });

// const cities = ['Madrid', 'Valencia', 'Lugo'];
// const newArray = cities.map(function (current) {
//   console.log('Current ', current);
// });

const number = [3, 2, 1];
// const newArray = number.map(function (current) {
//   return current * 2;
// });
// console.log(newArray); // expected output:  [ 6, 4, 2 ]

const newArray = number.map((num) => num * 2);
console.log(newArray); // expected output:  [ 6, 4, 2 ]
