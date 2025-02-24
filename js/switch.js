const numero = parseInt(Math.random()*6)
console.log(numero);

// switch (numero) {
//     case 0:
//         console.log('o numero sorteado é o ZERO');
        
        
//         break;

//  case 1:
// console.log('o numero sorteado é o UM');
//  break;

 


// case 2:
// console.log('o numero sorteado é o DOIS');
// break;

// case 3:
// console.log('o numero sorteado é o TRES');
// break;

// case 4:
// console.log('o numero sorteado é o QUATRO');
// break;

//     default: console.log('o numero sorteado é CINCO');
    
    
// }
// com o if
if (numero === 0){
console.log(`o numero é ZERO`);
}
else if (numero === 1){
    console.log(`o numero é UM`);


}
else if (numero === 2){
    console.log(`o numero é DOIS`);


}else if (numero === 3){
    console.log(`o numero é TRÊS`);


}else if (numero === 4){
    console.log(`o numero é QUATRO`);


}
else  {
    console.log(`o numero é CINCO`);


}

const novoNumero = parseInt(Math.random()*101)
console.log(`novo numero sorteado = ${novoNumero}`);
if(novoNumero <= 20){
    console.log('o numero esta no intervalo entre 0 e 20');
}
else{
    console.log(`O número não esta no intervalo entre o 0 e 20`);
    
}
