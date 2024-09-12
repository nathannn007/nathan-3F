const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".abaconteudo");
const contadores = document.querySelectorAll(".contador");

const tempoObjetivo1 = new Date("2025-10-05T00:00:00");
const tempoObjetivo2 = new Date("2025-12-05T00:00:00");
const tempoObjetivo3 = new Date("2025-12-30T00:00:00");
const tempoObjetivo4 = new Date("2025-01-16T00:00:00");


const tempos =[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4]


for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
            
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")


    }
}




function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos]
    } else {
        return "Prazo Finalizado";
    }
}

function atualizaCronometro(){
    for (let i=0;i<contadores.length;i++){
        document.getElementById('dias'+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById('horas'+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById('minutos'+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById('segundos'+i).textContent = calculaTempo(tempos[i])[3];
        //contadores[i].textContent = calculaTempo(tempo[i]);
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();


