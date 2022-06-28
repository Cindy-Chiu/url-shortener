// 引用 Express 與 Express 路由器
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// 引入 home 模組程式碼
const home = require('./modules/home')


const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride('_method'))

router.use('/', home)

// 匯出路由器
module.exports = router