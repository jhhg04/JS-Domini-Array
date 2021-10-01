// El método splice() cambia el contenido de un array, eliminando elementos existentes y/o agregando nuevos elementos.

const cities = ['Madrid', 'Valencia', 'Lugo'];
// cities.splice(splice, deleteCount, item1, item2);
// console.log(cities.splice(0, 1)); // expected output: [ 'Madrid' ]
// console.log(cities.splice(3, 0, 'Barcelona')); // expected output:[ 'Madrid', 'Valencia', 'Lugo', 'Barcelona' ]
console.log(cities.splice(1, 1, 'Bilbao')); // expected output:[ 'Madrid', 'Bilbao', 'Lugo' ]
console.log(cities);
