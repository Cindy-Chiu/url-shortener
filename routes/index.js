// 引用 Express 與 Express 路由器
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// 引入 home 模組程式碼
const home = require('./modules/home')
// 引入 restaurants 模組程式碼
const restaurants = require('./modules/restaurants')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride('_method'))

// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/', home)
// 將網址結構符合 /restaurants 字串開頭的 request 導向 restaurants 模組 
router.use('/restaurants', restaurants)

// 匯出路由器
module.exports = router