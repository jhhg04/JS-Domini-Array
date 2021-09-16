// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const cities = ['Madrid', 'Valencia', 'Lugo'];
const newArray = cities.filter((city) => {
  console.log(city); // expected output: Madrid Bilbao Lugo
  return city.length > 5;
});
console.log(newArray); // expected output: [ 'Madrid', 'Valencia' ]
