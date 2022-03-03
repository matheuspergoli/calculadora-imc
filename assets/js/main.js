const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const peso = Number(form.querySelector('#peso').value)
    const altura = Number(form.querySelector('#altura').value)

    if (!peso && !altura) {
        setResultado('Dados inválidos!', false)
        return
    }

    if (!peso || peso < 30 || peso > 500) {
        setResultado('Peso inválido!', false)
        return
    }

    if (!altura || altura > 2.10 || altura < 1.40) {
        setResultado('Altura inválida!', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivel = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivel})`

    setResultado(msg, true)
})

function criarP () {
    const p = document.createElement('p')
    return p
}

function setResultado (msg, isValid) {
    const divResultado = form.querySelector('#div-resultado')
    divResultado.innerHTML = ''
    const p = criarP()
    
    if (!isValid) {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    divResultado.appendChild(p)
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc < 18.5) {
        return nivel[0]
    }

    if (imc <= 24.9) {
        return nivel[1]
    }

    if (imc <= 29.9) {
        return nivel[2]
    }

    if (imc <= 34.9) {
        return nivel[3]
    }

    if (imc <= 39.9) {
        return nivel[4]
    }

    if (imc > 40) {
        return nivel[5]
    }
}