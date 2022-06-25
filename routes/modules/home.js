// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const Restaurant = require('../../models/restaurant')
// 定義首頁路由
router.get('/', (req, res) => {

  Restaurant.find()
    .lean()
    .then(restaurants => {
      res.render('index', { restaurants })
    })
    .catch(error => console.log(error))
})

//定義搜尋路由
router.get('/search', (req, res) => {
  const {keyword, sorting} = req.query
  const regex = new RegExp(keyword, 'i') // i for case insensitive
  return Restaurant.find({ $or: [{ name: { $regex: regex } }, { category: { $regex: regex } }, { name_en: { $regex: regex } }] })
    .lean() //用關鍵字搜尋餐廳時可以輸入名稱、英文名稱、餐廳分類來搜尋並且不分字母大小寫
    .sort(sorting)
    .then((restaurants) => res.render('index', { restaurants, keyword, sorting}))
    .catch(error => console.log(error))
})


// 匯出路由模組
module.exports = router