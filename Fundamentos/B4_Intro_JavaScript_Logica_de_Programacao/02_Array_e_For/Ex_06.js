//06.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let numero of numbers) {
    if(numero % 2 !== 0){
    impar += 1;
  }
}
if(impar === 0){
    console.log('nenhum valor ímpar encontrado');
}
else{
  console.log(impar);
}