var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0;i < pacientes.length; i++){

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;7
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;
    if(peso <= 0 || peso >= 1000){
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
    }

    if(altura <= 0 || altura >= 3){
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }else{
        paciente.classList.add("paciente-invalido");
    }
}

 