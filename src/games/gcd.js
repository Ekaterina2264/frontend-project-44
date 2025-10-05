import BrainGames from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

function round() {
  const a = Math.floor(Math.random() * 11)
  const b = Math.floor(Math.random() * 11)
  const question = String(`${a} ${b}`)

  let x = a
  let y = b

  while (y !== 0) {
    const x2 = y
    y = x % y
    x = x2
  }

  const correctAnswer = String(x)

  return [question, correctAnswer]
}

export default function even() {
  BrainGames(description, round)
}
