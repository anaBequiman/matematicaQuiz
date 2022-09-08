var quemPergunta = "t1";
var quemResponde = "t2";
var pontosJogador1 = 0;
var pontosJogador2 = 0;
var jogador1 = localStorage.getItem("jogador1");
var jogador2 = localStorage.getItem("jogador2");
var respostaCorreta = parseInt(algarismo1)*parseInt(algarismo2);
document.getElementById("questionador").innerHTML = jogador1;
document.getElementById("respondedor").innerHTML = jogador2;
document.getElementById("jUm").innerHTML = jogador1;
document.getElementById("jDois").innerHTML = jogador2;
document.getElementById("pontuacaoJUm").innerHTML = pontosJogador1;
document.getElementById("pontuacaoJDois").innerHTML = pontosJogador2;
function enviar(){
    var algarismo1 = document.getElementById("n1").value;
    var algarismo2 = document.getElementById("n2").value;
    var questao = "<h4 id = 'quetaoFeita'>" + algarismo1 + "X" + algarismo2 + "</h4>";
    var respostaJogador = "<h4> Resposta: </h4> <input type= 'text' id='resposta_jogador'>";
    var checar = "<button id='checado' onclick = 'check()'>Checar</button>";
    var parteRespondedor = questao + respostaJogador + checar;
    document.getElementById("output").innerHTML = parteRespondedor;
    document.getElementById("n1").innerHTML = " ";
    document.getElementById("n2").innerHTML = " ";
}
function check(){
    var resposta = document.getElementById("resposta_jogador").value;
    if(resposta==respostaCorreta){
        if(quemResponde == "t1"){
            pontosJogador1 = pontosJogador1 + 1;
            document.getElementById("pontuacaoJUm").innerHTML = pontosJogador1;
        }
        else{
            pontosJogador2 = pontosJogador2 + 1;
            document.getElementById("pontuacaoJDois").innerHTML = pontosJogador2;
        }
    }
    //quem pergunta
    if(quemResponde=="t1"){
        quemResponde="t2";
        document.getElementById("respondedor").innerHTML = jogador2;
    }
    else{
        quemResponde="t1";
        document.getElementById("respondedor").innerHTML = jogador1;  
    }
}