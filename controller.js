function isPrime(num) {
    if (num < 2) {
        return false
    }
    if (num === 2) {
        return true
    }
    if (num % 2 === 0) {
        return false
    }
    for (let i = 3; i < num; i += 2) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

const textHandler = (ctx) => {
  const { text, chat } = ctx.message
    const num = parseInt(text)

    if (Number.isNaN(num)) {
        ctx.reply(`send me a number, you idiot`)
        return
    }

    if (isPrime(num)) {
        ctx.reply(`${text} is a prime number`)
    } else {
        ctx.reply(`${text} is not a prime number`)
    }
}

module.exports = { textHandler }