var pontosJogador1 = 0;
var pontosJogador2 = 0;
var jogador1 = localStorage.getItem("jogador1");
var jogador2 = localStorage.getItem("jogador2");
function enviar(){
    var algarismo1 = document.getElementById("n1").value;
    var algarismo2 = document.getElementById("n2").value;
    var respostaCorreta = parseInt(algarismo1)*parseInt(algarismo2);
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
            var aumento_pontos_jogador1 = pontosJogador1 + 1;
            document.getElementById("pontuacaoJUm").innerHTML = aumento_pontos_jogador1;
        }
        else{
            var aumento_pontos_jogador2= pontosJogador2 + 1;
            document.getElementById("pontuacaoJDois").innerHTML = aumento_pontos_jogador2;
        }

        if(quemResponde=="t1"){
            quemResponde="t2";
            document.getElementById("questionador").innerHTML = jogador2;
        }
        else{
            quemResponde="t1";
            document.getElementById("questionador").innerHTML = jogador1;  
        }

        if(quemPergunta=="t2"){
            quemResponde="t2";
            document.getElementById("respondedor").innerHTML = jogador1;
        }
        else{
            quemResponde="t2";
            document.getElementById("respondedor").innerHTML = jogador2;  
        }
    }
}