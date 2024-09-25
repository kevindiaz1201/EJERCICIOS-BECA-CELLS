var numbers=[5,32,43,4];

let newArray=numbers.filter(function(n) { return n % 2 !== 0; });

console.log(newArray);

//Devuelve un nuevo arreglo unicamente con los elementos que cumplen con el callback que se pine como argumento en filter