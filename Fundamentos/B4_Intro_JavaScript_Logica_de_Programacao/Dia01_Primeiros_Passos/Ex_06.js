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