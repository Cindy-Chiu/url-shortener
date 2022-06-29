const URL = require('./url')


async function generateCode(length) {
  const letters = 'abcdefghijkmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ23456789'
  let code = ''

  do { 
    for (let i = 0; i < length; i++) {
      code += letters[Math.floor(Math.random() * letters.length)]
    }
  } while (await URL.exists({ shortenedURL: code })) //若亂數碼在資料庫已經存在，就重新產生一組

  return code
}

module.exports = generateCode
