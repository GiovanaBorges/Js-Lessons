var engine = {
    "cores": ['green','purple','pink','red','yellow','orange','grey'],
    "hexadecimais": {
        'green': '#02ef00',
        'purple':'#790093',
        'red':'#e90808',
        'yellow':'#e7d703',
        'black':'#141414',
        'orange':'#f16529',
        'grey':'#ebebeb',
    },
    "moedas":0
}

const audioMoeda = new Audio('audio/moeda.mp3');
const audioErrou = new Audio('audio/errou.mp3');

function sortearCor(){
    var corSorteada = Math.floor(Math.random() * engine.cores.length)
    var legendaCor = document.getElementById('cor-na-caixa');
    var nomeCor = engine.cores[corSorteada];

    legendaCor.innerHTML = engine.cores[corSorteada].toUpperCase();

    return engine.hexadecimais[nomeCor];
}

function aplicarCor(nomeCor){
    var caixaCor = document.getElementById('cor-atual');
    caixaCor.style.backgroundColor = nomeCor;
    caixaCor.style.backgroundImage = "url(img/caixa-fechada.png)";
    caixaCor.style.backgroundSize = "100%";
}

function atualizaPontuacao(valor){
    var pontuacao = document.getElementById('pontuacao-atual');

    engine.moedas += 1;

    if(valor < 0){
        audioErrou.play();
    }else{
        audioMoeda.play();
    }

    pontuacao.innerText = engine.moedas;
}

aplicarCor(sortearCor());

//API DE RECONHJECIMENTO DE VOZ
var btnGravador = document.getElementById("btn-responder");
var transcricaoAudio = "";
var respostaCorreta = "";


if(window.SpeechRecognition || window.webkitSpeechRecognition){
    var SpeechAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    var gravador = new SpeechAPI();

    gravador.continuos = false;
    gravador.lang = "en-US";

    gravador.onStart = function(){
        btnGravador.innerText = "im listen"

        btnGravador.style.backgroundColor = "white";
        btnGravador.style.color = "black";
    }

    gravador.onend = function(){
        btnGravador.innerText = "Responder";
        btnGravador.style.backgroundColor = "transparent";
        btnGravador.style.color = "white";
    }

    gravador.onresult = (event) =>{
        transcricaoAudio = event.results[0][0].transcript;
        respostaCorreta = document.getElementById('cor-na-caixa').innerText.toUpperCase()

        if(transcricaoAudio === respostaCorreta){
            atualizaPontuacao(1);
        }else{
            atualizaPontuacao(-1);
        }
        
        aplicarCor(sortearCor());
    }
}else{
    alert("não tem suporte");
}

btnGravador.addEventListener('click', function(e){
    gravador.start();
})