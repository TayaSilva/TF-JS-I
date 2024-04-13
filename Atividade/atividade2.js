const prompt = require ("prompt-sync")();

const palavra = prompt("Digite uma palavra:")

let palavraInvert = "";

for(let i = palavra.length -1; i >=0; i--){

    palavraInvert += palavra[i];
    console.log(palavra[i])
}




// vai pegar o tamanho da string, diminuir um e roda enquanto não chegar no 0, o i-- é pq esta em ordem decrescente
// pra pular vezes é só usar o i+=3 por exemplo

