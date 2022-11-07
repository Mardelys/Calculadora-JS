
//Declaramos constantes tomando como referencia su id en html, estas son destinadas a utilizarse en la pantalla de nuestra calculadora//
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
//Estas constantes son definidas para poder utilizarlas posteriormente en las operaciones que realizará la calculadora, se lee, definimos la constante botonesNumeros y se dice que se seleccionan todos los elementos del documento que contengan la clase numero//
const botonesNumeros = document.querySelectorAll('.numero');
//Se define la constante botones operadores de igual forma que botonesNumeros se dice que seleccione todos los elementos del documento que contenga la clase operador//
const botonesOperadores = document.querySelectorAll('.operador');
// se declara la constante display diciendo display se le asigna el valor renueva el display dependiendo de los valores de las variables display anterior y display actual, el resultado de esta constante será el resultado de lo que estas 2 variables reflejen//
const display = new Display(displayValorAnterior, displayValorActual);
//utilizamos la constante botones numero y le indicamos que por cada uno de los botones se cumpla la función de que ocurra el evento de que al hacer click el display agregue un número pero no cualquier número si no que el que el boton represente(Esta destro el boton en el html)//
botonesNumeros.forEach(boton =>{
    boton.addEventListener('click',() => display.agregarNumero(boton.innerHTML));
});
//Igualmente que con el metodo anterior, este metodo es utilizado tiene la finalidad de añadirle el evento de que "al click haga determinada acción", sin embargo podemos observar que tiene un método que se llama computar, además de querer reflejar el simbolo de la operación, la función computar permite ejecutar la operación definida en el apartado de calculadora.js añadiendole el valor correspondiente a la operación a realizar (estos valores fueron asignados a cada boton del html que contiene el signo de la operación) e imprimir el resultado en pantalla, ésta ha sido declarada en el script display.//
botonesOperadores.forEach(boton => {
    boton.addEventListener('click',() => display.computar(boton.value))
});