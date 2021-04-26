function sumar (){
    var n1 = Number (prompt("Escribe un numero "))
    var n2 = Number (prompt("Escribe otro numero"))    
    if (n1 === 2 && n2 === 2 ) {
        alert ("Pez")
    } else {
        alert(n1 + n2)
    }
        
    }


var verFormulario = false

function mostrarFormulario() {
    var formulario = document.getElementById('crearFormulario')
    var cards = document.getElementById('cards')
    var crearBtn = document.getElementById('crearBtn')
    console.log(crearBtn)

    if (!verFormulario) {
        formulario.style.display = 'block'
        cards.style.display = 'none'
        verFormulario = true
        crearBtn.innerText = 'Cancelar'
    } else {
        formulario.style.display = 'none'
        cards.style.display = 'block'
        verFormulario = false
        crearBtn.innerText = 'Crear'
    }
    // Instrucciones para desaparecer a #cards

    // Cambiar el texto del boton crear por la palabra Cancelar
    // Si oprimo una vez el boton crear, muestra el formulario y desaparecen
    // las cards, si lo oprimo nuevamente, muestra las cards y desaparece
    // el formulario
}

// sumar(num1, num2)

