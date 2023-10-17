function converter (num) { // Converte a entrada 'num' (assumida como um número decimal) em um número inteiro
    let dec = parseInt(num)
    let bin = dec.toString(2) // Converte o decimal 'dec' em uma string binária usando o método toString com base 2
    document.getElementById("res").innerText=bin // Atualizar o conteúdo do elemento com o id "res" para exibir o resultado binário
  }