/*9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

const a = 2, b = 4, c = 7;
var impar;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    impar = true;
}
else {
    impar = false;
}
console.log(impar);
