/*7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

var porcentagem = 2022, nota;

if(porcentagem < 0 || porcentagem > 100){
    console.log('nota invalida ');
}
else if(porcentagem >= 90 ){
    nota =  'A';
}
else if(porcentagem >= 80 ){
    nota =  'B';
}
else if(porcentagem >= 70 ){
    nota =  'C';
}
else if(porcentagem >= 60 ){
    nota =  'D';
}
else if(porcentagem >= 50 ){
    nota =  'E';
}
else {
    nota = 'F';
}
console.log(nota);