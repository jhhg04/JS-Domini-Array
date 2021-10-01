// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. Al encontrar deja de buscar en el array solo enva un elemento , si no encuentra devuelve undifined, Puede recibir el index como parametro y mostrarl

const cities = ['Madrid', 'Valencia', 'Lugo'];
// const found = cities.find((city) => {
//   console.log(city); // expected output: Madrid Bilbao Lugo
//   // return city === 'Lugo'; // expected output: Lugo
//   return city === 'Bilbao'; // expected output: undefined
// });
// console.log(found); // expected output: Lugo

const found = cities.find((city, index) => {
  console.log(index); // expected output: 0 1 2
});
console.log(found); // expected output: 0 1 2
