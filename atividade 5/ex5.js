let altura, peso, imc

altura = Number(prompt('Insira sua altura:'))
peso = Number(prompt('Insira seu peso:'))

imc = peso / altura * altura
alert('Seu imc é de: ' + imc)