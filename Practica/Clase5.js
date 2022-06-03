//funciones

function elDoble (unNumero) {
    return unNumero*2;
}

console.log(elDoble(6)); //12;

//funciones expresada

let sumar = function (NumeroA,NumeroB){
    return NumeroA + NumeroB;
}

console.log(sumar (7, 9));

//Funcion declarada

function restar(numeroC, numeroD){
    return numeroC - numeroD;
}

console.log(restar(10, 3));

//Ejemplo de scope

let mensaje = "hola";

function saludar (){
    let mensaje = "chau"
    return mensaje
}

console.log(mensaje)
console.log(saludar())

//Ejemplo

function saludar2 (nombre = "Pablo", apellido = "Vélez"){
    return "hola" + " " + nombre + " " + apellido;
}

console.log(saludar2())

//Funcion arrow

let sumar2 =(a, b) => a + b;

console.log(sumar2(2, 4));

//otro ejemplo - Arrow unico parametro

let laMitad = numero1 => numero1 / 2;

console.log(laMitad(8));

//Arrow sin parametros

let saludo = () => "hola mundo"
console.log(saludo());

//Arrow 
