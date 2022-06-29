// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const generateCode = require('../../models/generateCode')
const checkOriginal = require('../../models/checkOriginal')

// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

//若輸入了縮短後的網址，則從資料庫撈出原網址並導過去
router.get('/:shortenedURL', (req, res) => { 
  const shortenedURL = req.params.shortenedURL
  URL.findOne({ shortenedURL })
    .lean()
    .then((target) => {
      res.redirect(target.original)
    })
    .catch(()=>{res.redirect('/');})
})

//定義輸入網址後的路由
router.post('/', async (req, res) => {
  const original = req.body.original.trim()
  const shortenedURL = await generateCode(5)
  console.log(shortenedURL)
  if (await checkOriginal(original)) { //若輸入的網址已有一組縮短後的網址，則顯示原縮短後的網址不另外新增資料進資料庫
    URL.findOne({ original })
      .lean()
      .then((target) => {
        console.log(target.shortenedURL)
        const shortenedURL = target.shortenedURL
        res.render('show', { original, shortenedURL })
      })
      .catch(error => console.log(error))
  } else {
    return URL.create({ original, shortenedURL }) // 存入資料庫
      .then(() => res.render('show', { original, shortenedURL })) // 顯示縮短後的網址
      .catch(error => console.log(error))
  }

})

// 匯出路由模組
module.exports = router
