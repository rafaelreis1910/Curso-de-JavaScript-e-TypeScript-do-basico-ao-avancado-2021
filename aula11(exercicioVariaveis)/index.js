let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;

console.log(varA,varB,varC);

// para resolver bastou criar uma constante para salvar o valor da variavel A, e não substituir quando fizesse a troca