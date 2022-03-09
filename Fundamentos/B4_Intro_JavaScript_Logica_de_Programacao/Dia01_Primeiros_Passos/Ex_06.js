/*6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

const peca = 'RaInHa'.toLowerCase();
switch (peca) {
    case 'torre':
        console.log(peca + ' Se movimenta em linha reta')
        break;
    case 'cavalo':
        console.log(peca + ' Se movimenta em "L"')
        break;
    case 'bispo':
        console.log(peca + ' Se movimenta em diagonal')
        break;
    case 'rainha':
        console.log(peca + ' Se movimenta em todas as direções, sem limite de casas')
        break;
    case 'rei':
        console.log(peca + ' Se movimenta em todas as direções, 1 uma casa')
        break;
    case 'peao':
        console.log(peca + ' Se movimenta em 1 casa, para frente')
        break;
    default:
        console.log('Esta peça nao existe')

}