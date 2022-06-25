const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')


router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  let nowTime = new Date()
  let newId = Number(nowTime.getFullYear().toString() + nowTime.getMonth().toString() + nowTime.getDate().toString() + nowTime.getHours().toString() + nowTime.getMinutes().toString()) //取當前時間資料作為id基值，可避免每次啟動伺服器並新增餐廳時給予重複的id
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  const id = newId
  newId = newId + 1


  return Restaurant.create({ id, name, name_en, category, image, location, phone, google_map, rating, description }) // 存入資料庫
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})

router.get('/:restaurant_id', (req, res) => {
  const id = Number(req.params.restaurant_id)
  return Restaurant.findOne({ id: id })
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})


router.get('/:restaurant_id/edit', (req, res) => {
  const id = Number(req.params.restaurant_id)
  return Restaurant.findOne({ id: id })
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})


router.put('/:restaurant_id', (req, res) => {
  const id = Number(req.params.restaurant_id)
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body

  return Restaurant.findOne({ id: id })
    .then(restaurant => {
      console.log(id)
      restaurant.name = name
      restaurant.name_en = name_en
      restaurant.category = category
      restaurant.image = image
      restaurant.location = location
      restaurant.phone = phone
      restaurant.rating = rating
      restaurant.google_map = google_map
      restaurant.description = description
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

router.delete('/:restaurant_id', (req, res) => {
  const id = Number(req.params.restaurant_id)
  return Restaurant.findOne({ id: id })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router