let anoNasc, anoAtual, idade, meses, dias, semanas

anoNasc = Number(prompt('Digite seu ano de nascimento: '))
anoAtual = Number(prompt('Digite o ano atual: '))

idade = anoAtual - anoNasc
meses = idade * 12
dias = idade * 365
semanas = idade * 52

alert('Você tem: ' + idade + 'anos de idade!')
alert('Você tem: ' + meses + 'meses de idade!')
alert('Você tem: ' + dias + 'dias de idade!')
alert('Você tem: ' + semanas + 'semanas de idade!')
