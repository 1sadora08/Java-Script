let plastico, papel, metal, totalReais, quantPlastico, quantPapel, quantMetal

quantPlastico = Number(prompt('Quantos kilos de plástico serão?'))
quantPapel = Number(prompt('Quantos kilos de papel serão?'))
quantMetal = Number(prompt('Quantos kilos de metal serão?'))

plastico = (quantPlastico / 10) * 2
papel = (quantPapel / 30) * 3
metal = (quantMetal /50) * 5

totalReais = papel + plastico + metal
alert('O total de dinehiro ganhor será de: ' + totalReais + 'reais')