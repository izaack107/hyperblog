let numero
let suma
let parrafo = document.getElementById("parrafo")
let prueba = document.getElementById("hola")

function sumarVariables() 
{
    let operacion
    numero = 2
    suma = 5

    operacion = numero + suma

    return operacion
}

parrafo.innerHTML = "Hello DOM " + sumarVariables ()
prueba.innerHTML = "Esto va para git desde js. Esto es una prueba desde js para hacer commits desde github"
