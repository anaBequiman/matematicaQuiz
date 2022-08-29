function start(){
    window.location = "login.html";
}
function comecar(){
    var jogadorUm = document.getElementById("n1").value;
    var jogadorDois = document.getElementById("n2").value; 
    localStorage.setItem("jogador1", jogadorUm);
    localStorage.setItem("jogador2", jogadorDois);
    window.location = "numeros.html";
}