function calcula(primeiroNumero, segundoNumero, operador) {
    if (operador == "+") {
        return parseFloat(primeiroNumero) + parseFloat(segundoNumero);
    }

    if (operador == '-') {
        return parseFloat(primeiroNumero) - parseFloat(segundoNumero);
    }

    if (operador == '*') {
        return parseFloat(primeiroNumero) * parseFloat(segundoNumero);
    }

    if (operador == "/") {
        return parseFloat(primeiroNumero) / parseFloat(segundoNumero);
    }

   

}

function limpaValores() {
    document.getElementById('primeiro-numero').value = '';
    document.getElementById('segundo-numero').value = '';
    document.getElementById('primeiro-numero').focus();

}




const botao = document.querySelector(".btn");

botao.addEventListener("click", function(event) {
    event.preventDefault();
    const primeiroNumero = document.querySelector("#primeiro-numero").value;
    const segundoNumero = document.querySelector("#segundo-numero").value;
    const operador = document.querySelector("#operador").value;
    const resultado = calcula(primeiroNumero, segundoNumero, operador);
    if(primeiroNumero && segundoNumero) {        
        document.getElementById('resposta').innerHTML = `O resultado é ${resultado}.`;       
        if (!isFinite(resultado)) {
            document.getElementById('resposta').innerHTML = "Na divisão, o segundo número não pode ser 0."
        }
    }else {
        document.getElementById('resposta').innerHTML = "Por favor, informe um valor válido para o primeiro e o segundo número.";

    }
    limpaValores();

});