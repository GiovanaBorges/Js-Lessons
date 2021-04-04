
$(document).ready(function(){
    function GerarDados(){
var frases = ["A invenção do hoje é o meu único meio de instaurar o futuro."
,"Não quero ter a terrível limitação de quem vive apenas do que é passível de fazer sentido. Eu não: quero é uma verdade inventada."
,"Não se preocupe em entender, viver ultrapassa qualquer entendimento.","Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro."
,"Eu amo a minha cruz, a que doloridamente carrego. É o mínimo que posso fazer de minha vida: aceitar comiseravelmente o sacrifício da noite."
,"Gostar de estar vivo dói.","A palavra é meu domínio sobre o mundo.","Civilizar minha vida é expulsar-me de mim."
,"A loucura é vizinha da mais cruel sensatez.","Porque há o direito ao grito. Então eu grito."
,"Liberdade é pouco. O que eu desejo ainda não tem nome.","De qualquer luta ou descanso me levantarei forte e belo como um cavalo novo...",
"Nasci dura, heróica, solitária e em pé.","Por que é que as coisas um instante antes de acontecerem parecem já ter acontecido? É uma questão de simultaneidade de tempo",
"Eu escrevo sem esperança de que o que eu escrevo altere qualquer coisa. Não altera em nada… Porque no fundo a gente não está querendo alterar as coisas. A gente está querendo desabrochar de um modo ou de outro, não é?"
,"Quando se ama não é preciso entender o que se passa lá fora, pois tudo passa a acontecer dentro de nós.","Estou sendo alegre neste mesmo instante porque me recuso a ser vencida: então eu amo. Como resposta."
];


var autor = ["William Shakespeare","Clarice Lispector","Maria Julia Paes de Silva"
,"Friedrich Nietzsche","Augusto Cury","Luís de Camões"
, "Mario Quintana ","Confúcio","Pitágoras","Carlos Drummond de Andrade"
,"Haile Selassie","Dalai Lama",
,"Oliver Wendell Holmes Sr.","Roberto Shinyashiki"
,"Machado de Assis","Aristóteles","Oscar Wildem"
,"Charles Chaplin"];

var randomNum = Math.floor((Math.random()*7));
var frase_aleatoria = frases[randomNum];
var Autor_aleatorio = autor[randomNum];

$(".frase").text(frase_aleatoria);
$(".autor").text(Autor_aleatorio);
}


$(".btn").on("click", function(){
    GerarDados();
  });
});

