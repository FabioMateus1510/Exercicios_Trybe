// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.

let soma = 0;
for (index = 50; index <= 100; index++){
    soma += index;
}
console.log('A soma de 50 a 100 é:' + soma);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.

let div3 = 0;
for(i = 1; i <= 125; i++){
if(i % 3 == 0)
div3++
}
if(div3 === 50){
    console.log('the cake is a lie');
}
else{
console.log('de 0 a 125 ' + div3 + ' são divisiveis por 3');
}

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

let jogador1 = 'pedra', jogador2 = 'tesoura', resultado = ' ';
if(jogador1 == 'pedra' && jogador2 == 'tesoura'){
    resultado = 'jogador 1 venceu';
}
else if(jogador1 == 'tesoura' && jogador2 == 'papel'){
    resultado = 'jogador 1 venceu';
}
else if(jogador1 == 'papel' && jogador2 == 'pedra'){
    resultado = 'jogador 1 venceu';
}
else if (jogador1 == jogador2) {
    resultado = 'empate';
}
else{
    resultado = 'jogador 2 venceu';
}
console.log(resultado);

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.

let idade = 18;
if (idade < 18){
    console.log('A pessoa é menor de idade')
}
else{
    console.log('A pessoa é maior de idade')
}
// Com operador ternário
// console.log(age >= 18 ? 'Maior de idade' : 'Menor de idade');

// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.
let Marcella = 15, Carlos = 13, Camila = 18, nova =' ';

if(Marcella < Carlos && Marcella < Camila){
    nova = 'Marcella';
}
else if(Carlos < Marcella && Carlos < Camila){
    nova = 'Carlos'
}
else{
    nova = 'Camila';
}
console.log(nova + ' é a mais nova');
