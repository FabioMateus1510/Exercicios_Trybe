/*8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

const a = 2, b = 3, c = 21;
var par;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    par = true;
}
else {
    par = false;
}
console.log(par);
