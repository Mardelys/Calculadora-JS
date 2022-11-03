const displayBValue = document.getElementById('b-value');
const displayAValue = document.getElementById('a-value');
const buttonNumber = document.querySelectorAll ('.number');
const buttonOpera = document.querySelectorAll('.opera');

const display = new Display (displayBValue, displayAValue);
buttonNumber.forEach(button =>{
    button.addEventListener('click',() => {
        display.agregarNumero (button.innerHTML)
    });
});