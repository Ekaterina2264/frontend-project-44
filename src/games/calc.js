import BrainGames from '../index.js'

const description = 'What is the result of the expression?'

function round() {
  const a = Math.floor(Math.random() * 11) // число 0–10
  const b = Math.floor(Math.random() * 11)
  const operators = ['+', '-', '*']
  const operator = operators[Math.floor(Math.random() * operators.length)]

  const question = `${a} ${operator} ${b}`
  let correctAnswer

  switch (operator) {
    case '+':
      correctAnswer = a + b
      break
    case '-':
      correctAnswer = a - b
      break
    case '*':
      correctAnswer = a * b
      break
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }

  return [question, String(correctAnswer)]
}

export default function сalc() {
  BrainGames(description, round)
}
