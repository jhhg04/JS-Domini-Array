// El método indexOf() devuelve el indice del elemento que se quiere buscar, si no esta devuelve  -1 . El método includes() devuelve true si el elemento se ecuentra o false si no esta

const cities = ['Madrid', 'Valencia', 'Lugo'];
console.log(cities.indexOf('Madrid')); // expected output: 0
console.log(cities.indexOf('Bilbao')); // expected output: -1
console.log(cities.includes('Madrid')); // expected output: true
console.log(cities.includes('Bilbao')); // expected output: false
