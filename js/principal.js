var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0;i < pacientes.length; i++){

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;
    if(peso <= 0 || peso >= 1000){
        pesoEhValido = false;
        paciente.querySelector(".info-imc").textContent = "Peso inválido!";
    }

    if(altura <= 0 || altura >= 3){
        alturaEhValida = false;
        paciente.querySelector(".info-imc").textContent = "Altura inválida!";
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / (altura*altura);
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    }
}

 