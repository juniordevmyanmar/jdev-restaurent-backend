const adjectives = ['happy', 'silly', 'funny', 'serious', 'clever', 'angry', 'hungry', 'sleepy', 'crazy', 'goofy']
const nouns = ['cat', 'dog', 'bird', 'horse', 'cow', 'sheep', 'fish', 'rabbit', 'snake', 'penguin']

function generateRandomName() {
  const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length)
  const randomNounIndex = Math.floor(Math.random() * nouns.length)
  const adjective = adjectives[randomAdjectiveIndex]
  const noun = nouns[randomNounIndex]
  return `${adjective}-${noun}`
}

module.exports = generateRandomName
