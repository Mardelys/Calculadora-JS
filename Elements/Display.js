class Display{
    constructor(displayBValue, displayAValue){
        this.displayAValue = displayAValue;
        this.displayBValue = displayBValue;
        this.calculadora = new Calculator();
        this.AValue ='';
        this.BValue = '';
    }
    agregarNumero(numero) {
        this.AValue = numero;
        this.imprimirValores(); 
    }

    imprimirValores(){
        this.displayAValue.textContent = this.AValue;
        this.displayBValue.textContent = this.BValue;
    }
}