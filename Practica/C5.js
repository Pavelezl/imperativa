function dameCinco1() {
    return [1,2,3,4,5];
}

console.log(dameCinco1());

function multiplicarPorDos1() {
  return 123 * 2 ;
}

console.log(multiplicarPorDos1());

function mostrarNombre1() {
  return "Mi nombre es Hernán";
}

console.log(mostrarNombre1());

//ejercicio arrow

let dameCinco = () => [1,2,3,4,5]
console.log(dameCinco());

let multiplicarPorDos = (a = 123, b = 2) => a * b
console.log(multiplicarPorDos());

let mostrarNombre = () => "Mi nombre es Hernán"
console.log(mostrarNombre());

//ejercicio 2 arrow

let saludar = nombre2 => "Hola, " + nombre2 + "!";
console.log(saludar("Ezequiel"));

let saludar2 = nombre => "Hola, " + "Ezequiel" + "!";
console.log(saludar2());

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
}

let saludar = (nombre, apellido) => "hola, " + nombre + " " + apellido + "!";
