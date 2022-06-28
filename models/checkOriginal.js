const URL = require('./url')

async function checkOriginal(original){ //檢查輸入進來的網址是否已經有一組縮短後的網址
  let result = await URL.exists({ original })
  return result
}

module.exports = checkOriginal