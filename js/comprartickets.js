// Valor del Ticket //
const valorTicket = 200;

// Porcentajes de descuento //
let descuentoEstudiante  = 80;
let descuentoTrainee     = 50;
let descuentoJunior      = 15;

// Elementos en variables //
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");   
let mail            = document.getElementById("mail"); 
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");

// Funcion para quitar el estilo de error a los elementos del formulario //
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

// Funcion para el boton Borrar para que borre el valor //
function ResetTotalAPagar() {
    quitarClaseError();
    totalPago.innerHTML = '';
}

// Calculo total a pagar //
function TotalAPagar() {
    
    // Ejecuta funcion para quitar todos los estilos de error en los campos que lo tuvieran //
    quitarClaseError();

    if (nombre.value === "") {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }
    if (apellido.value === "") {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribí tu mail.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Para determinar si el correo electronico es valido o no //
    const mailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    // Verifico si esta ingresado el correo, sino que aplique un estilo de error haciendo foco en Email //
    if (!mailValido(mail.value)) {
        alert("Por favor, escribí un correo electrónico válido.");
        mail.classList.add("is-invalid");
        mailValido.focus();
        return;
    }

    // Verifico si esta ingresado al menos 1 ticket, sino que aplique un estilo de error haciendo foco en Cant //
    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert(" Por favor, ingresá correctamente la cantidad de tickets. ");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    // Verifico si esta ingresada la cat, sino que aplique un estilo de error haciendo foco en Cat //
    if (categoria.value == "") {
        alert("Por favor, seleccioná una categoría.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    // Multiplico cantidad de tickets por el valor //
    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    // Aplico descuentos segun categoria //
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
    }
    else if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
    else if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }
    else (categoria.value == 0); {
        totalValorTickets = totalValorTickets ;
    }

    // Inserto el valor en el HTML //
    totalPago.innerHTML = totalValorTickets;

}

// Boton Resumen recibe un escuchador y la funcion del calculo //
btnResumen.addEventListener("click", TotalAPagar);
btnBorrar.addEventListener("click", ResetTotalAPagar);


