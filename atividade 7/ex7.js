let choppBebido, choppDesperdicado, choppSobrou, choppConsumidoTotal, totalPessoas, mediaLitrosPessoa 
choppBebido = Number(prompt("Quantidade de chopp (litros) bebida: "));
choppDesperdicado = Number(prompt("Quantidade de chopp (litros) desperdiçada (se não houver, digite 0): "));
choppSobrou = Number(prompt("Quantidade de chopp (litros) que sobrou (se não houver, digite 0): "));

choppConsumidoTotal = choppBebido + choppDesperdicado;
totalPessoas = 45;

mediaLitrosPessoa = choppConsumidoTotal / totalPessoas;
alert(('Média de litros bebidos por pessoa: ') + mediaLitrosPessoa)