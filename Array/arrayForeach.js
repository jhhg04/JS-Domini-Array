// El método forEach() ejecuta la función indicada una vez por cada elemento del array. Puede recibir el index como parametro y mostrarlo

const cities = ['Madrid', 'Valencia', 'Lugo'];
// const found = cities.forEach((city) => {
//   console.log(city);
// });
// console.log(found); // expected output: Madrid Bilbao Lugo

const found = cities.forEach((city, index) => {
  console.log(`${city} -${index}`);
});
console.log(found); // expected output: Madrid Bilbao Lugo
