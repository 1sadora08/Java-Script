let eleitores, votoX, votoY, votoBranco, VotoNulo, percentualX, percentualY, PercentualB, percentualN

eleitores = Number(prompt('Digite a quantidade de eleitores:'))
votoX =  Number(prompt('Insira a quantidade de votos do candidato X:'))
votoY=  Number(prompt('Insira a quantidade de votos do candidato Y:'))
votoBranco = Number(prompt('Insira a quantidade de votos em branco:'))
VotoNulo =  Number(prompt('Insira a quantidade de votos nulos:'))

percentualX = votoX / eleitores * 100
percentualY = votoY / eleitores * 100
PercentualB = votoBranco / eleitores * 100
percentualN = VotoNulo / eleitores *100

alert('A quantidade de votos para o candidato X é de ' + percentualX + '%!')
alert('A quantidade de votos para o candidato Y é de ' + percentualY + '%!')
alert('A quantidade de votos brancos é de ' + PercentualB + '%!')
alert('A quantidade de votos nulos é de ' + percentualN + '%!')
