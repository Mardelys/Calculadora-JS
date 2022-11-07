//Se declara una clase llamada Display a la cual se le integra una función constructora con los parámetros que se quiere que la conforme, en este caso se utilzan las variables displayValorAnterior y displayValorActual que fueron declaradas en el documento index.js se utiliza la palabra reservada this con referencia a la función constructora y la palabra palabra clave que queremos asignar con referencia al parámetro que en este caso son expresadas con el mismo nombre, displayValorActual, así mismo displaValorAnterior. Por otro lado el display también necesita tener una calculadora ,valorActual y valorAnterior a los cuales se les asigna  un string vacío para guardar los numeros , estos se reflejaran posteriormente en la pantalla, se crea una palabra clave que haga referencia al tipo de operación matemática a utilizar  y por ultimo se utiliza otra palabra para referirse a los signos que se proyectará en pantalla especificando cada tipode operación y el signo que debe expersarse. Todos estos elementos conforman las propiedades de la clase//
class Display{
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual ='';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+', 
            dividir: '/',
            multiplicar: '*',
            restar: '-',
        }
    }
    //Se crea el metodo para borrar, el valor actual va a ser igual al valor actual recortandolo solo en su ultima posición es decir el ultimo numero agregado a la calculadora, despues se pide que se impriman los valores actualizados//
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }
    //Se crea el método para borrar todo, esto hace borrar el valor actual, valor anterior y que no haya ningun tipo de operacion por eso se le agrega el valor undefined posteriormente se pide imprimir los valores en pantalla//
    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    // Este metodo computar Recibe el tipo de operación y preguntamos si tipo de operación es distinto a igual se va a calcular pero si es igual no se calcula, solo expresa el resultado o no se expresa si es el caso que no haya operación//
    computar(tipo){
        this.tipoOperacion !=='igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    //Se crea el método agregar número debe recibir la palabra número como parámetro, utilizamos la palabra reservada this para expresar que el valor a utilizar y a agregar sea el mismo al que se quiere hacer la operación, esto devolvería el número en cadena de texto representando el objeto seleccionado se añade el signo + para que cada número se situe al lado de el colocado anteriormente, utilizamos una condicional para que solo se pueda utilizar una vez el punto si no condicionamos esto se agregarian muchos puntos a nuestras operaciones, por lo que la calculadora presenta errores se pregunta si quiere agregar un punto y se pregunta si el valor actual incluye un punto si esto da verdadero retornamos sin hacer nada si no pues se agrega el punto, después de que se agrega un numero se pide imprimir el valor en la pantalla ṕara que se pueda observar.//
    agregarNumero(numero) {
        if(numero ==='.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores(); 
    }
    //Se declara la función imprimir valores, se utilizan las variables de valor actual y anterior para que el contenido de estas se refleje en display, se especifica que en el valor anterior sea donde se puedan observar los signos y el punto, siento el valor actual el resultado de las operaciones//
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion]|| ''}` ;
    }
    // se declaran las constantes valor anterior y valor actual y se les indica que  al calcular pueden devolver números de coma flotantes ya que estos se integran en string, creamos la condicional que se lee si tanto valor actual como valor anterior no son numeros o uno de ellos no es numero no se hace ninguna operación pero si tienen valores se utiliza el método correspondiente al tipo de operación que haya seleccionado el usuario//
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior) ) return
        this.valorActual =this.calculadora [this.tipoOperacion](valorAnterior, valorActual);
    }
}