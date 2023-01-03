let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let equalsOrDifferent

if(firstNumber == secondNumber) {
  equalsOrDifferent = 'iguais'
} else {
  equalsOrDifferent = 'diferentes'
}

const sum = firstNumber + secondNumber

let oddOrEven

if(sum % 2 == 0) {
  oddOrEven = 'par'
} else {
  oddOrEven = 'ímpar'
}

const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = (firstNumber / secondNumber).toFixed(2)
const restDiv = firstNumber % secondNumber


alert('A soma dos dois número é: ' + sum)
alert('A subtração dos dois número é: ' + sub)
alert('A multiplicação dos dois número é: ' + multi)
alert('A divisão dos dois número é: ' + div)
alert('O resto da divisão dos dois número é: ' + restDiv)
alert('Os números inseridos são ' + equalsOrDifferent)
alert('A soma dos dois números é ' + oddOrEven + ': ' + sum)
