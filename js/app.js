let numeroSecreto =5;

var chute = prompt("Digite um número 1 e 10");
while( chute != numeroSecreto){
if ( numeroSecreto == chute ){
    alert("Acertouu!!")
}else{
    alert("Errouu!!")
    if(chute < numeroSecreto){
    alert("O número secreto é Maior que " + chute)
}else{
    alert("O número secreto é menor que " + chute)
}
}
var chute = prompt("Digite um número de 1 e 10");
}