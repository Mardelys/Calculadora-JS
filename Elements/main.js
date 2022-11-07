//Este script es para hacer que funcione el boton de cambio de tema de día a noche, se declara la constante botonswitch y se indica que se le asigna que seleccione del documento html el elemento con el id #switch#
const btnSwitch = document.querySelector('#switch');
//Se le indica el evento de que al darle click al switch al elemento body se le añada una clase llamada dark cuando el boton llegue a su pseudoclase active por lo tanto al darle click este boton añade una clase. Sobre esta clase se le agregan los estilos para que funcione el cambio de tema//
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});