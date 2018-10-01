var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");
    var tdPeso = paciente.querySelector(".info-peso");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if(!pesoEhValido){
        console.log("Peso invalido!");
        tdImc.textContent = "Peso invalido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura invalida");
        tdImc.textContent = "Altura invalida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido){
        tdImc.textContent = calculaImc(peso, altura);
    } else{
        tdImc.textContent = "Altura e/ou peso inválidos!";
    }
}

function calculaImc(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso <= 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 3.00){
        return true;
    } else {
        return false;
    }
}
