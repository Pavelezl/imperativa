//Sumar todas las notasy dividirlas entre la cantidad de notas a promediar, PROMEDIO = (NOTA1+NOTA2++NOTA3)/3

function promedio(nota1, nota2, nota3){
    let suma = nota1 + nota2 + nota3
    return(suma/3)
}
console.log(promedio(5,8,9))
