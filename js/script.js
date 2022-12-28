let numero
let suma
let parrafo = document.getElementById("parrafo")

function sumarVariables() 
{
    let operacion
    numero = 2
    suma = 5

    operacion = numero + suma

    return operacion
}

parrafo.innerHTML = "Hello DOM " + sumarVariables ()