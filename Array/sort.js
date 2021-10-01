// El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

let arr = [40, 1, 5, 200];
let res = arr.sort((a, b) => a - b); // [ 1, 5, 40, 200 ]
console.log(res); // expected output: [ 1, 5, 40, 200 ]

let items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
];

let res2 = items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

console.log(res2); // expected output:
/*
[
  { name: 'And', value: 45 },
  { name: 'Edward', value: 21 },
  { name: 'Magnetic', value: 13 },
  { name: 'Sharpe', value: 37 },
  { name: 'The', value: -12 },
  { name: 'Zeros', value: 37 }
]
*/
