function sumar (){
    var n1 = parseInt(prompt("Escribe un numero: "))
    var n2 = parseInt(prompt("Escribe otro numero: "))    
    n1 === 2 && n2 === 2 ? alert("pez") : alert(n1 + n2)
}
//     if(n1 == 2 && n2 == 2){
//         alert("pez")
//     }
//     else{
//         alert(n1 + n2)
//     }
// }
// sumar(num1, num2)
function mostrarFormulario(){
    var formulario = document.getElementById('crearFormulario')
    formulario.style.display = 'Block'

   var cards = document.getElementById('cards')
    cards.style.display = 'none'

    
}