const prompt = require ("prompt-sync")();
let numeroAleatorio = Math.floor(Math.random() * 100);

let num = prompt("Jogo da adivinhação, digite um numero: ")


while (num != numeroAleatorio) {
    if (num > numeroAleatorio) {
        console.log("Tente novamente, dessa vez com um número menor.");
    } else {
        console.log("Tente novamente, dessa vez com um número maior.");
    }
   num = (prompt("Digite novamente: "));
}

console.log("Parabens, você acertou, o numero era: " + numeroAleatorio)