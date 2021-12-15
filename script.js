let idade = window.document.getElementById('idade')
let altura = window.document.getElementById('altura')
let peso = window.document.getElementById('peso')
let botaoCalcular = window.document.getElementById('botao')
let h1Resultado = window.document.getElementById('title-imc')
let pResultado = window.document.getElementById('text-imc')

botaoCalcular.addEventListener('click', clickCalcular)

function clickCalcular() {
    let alturaReal = Number(altura.value)
    let pesoReal = Number(peso.value)
    let imc = Math.round(pesoReal / (alturaReal * alturaReal).toFixed(2))
    h1Resultado.innerHTML = 'RESULTADO:'
    pResultado.innerHTML = `Seu IMC é de <strong>${imc} kg/m<sup>2</sup></strong>`
    if (imc <= 18) {
        window.document.getElementById('item1').style.backgroundImage = 'linear-gradient(to right, #718093, transparent)'
        window.document.getElementById('item1').style.borderRadius = '3px'
    } else if (imc <= 25) {
        window.document.getElementById('item2').style.backgroundImage = 'linear-gradient(to right, #718093, transparent)'
        window.document.getElementById('item2').style.borderRadius = '3px'
    } else if (imc <= 30) {
        window.document.getElementById('item3').style.backgroundImage = 'linear-gradient(to right, #718093, transparent)'
        window.document.getElementById('item3').style.borderRadius = '3px'
    } else {
        window.document.getElementById('item4').style.backgroundImage = 'linear-gradient(to right, #718093, transparent)'
        window.document.getElementById('item4').style.borderRadius = '3px'
    }
}