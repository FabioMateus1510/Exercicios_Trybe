//3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 10;
const b = 15;
const c = 25;

if((a > b) && (a > c)){
    console.log("maior numero a" + "(" + a + ")");
}
else if ((b > a) && (b > c)){
    console.log("maior numero b" + "(" + b + ")"); 
}
else{
    console.log("maior numero c" + "(" + c + ")");
}