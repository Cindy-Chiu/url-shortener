const Restaurant = require('../restaurant')
const db = require('../../config/mongoose')
const Seeder = require('../restaurant.json')
const seederData = Seeder.results
db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < seederData.length; i++) {
    Restaurant.create({
      id: seederData[i].id,
      name: seederData[i].name,
      name_en: seederData[i].name_en,
      category: seederData[i].category,
      image: seederData[i].image,
      location: seederData[i].location,
      phone: seederData[i].phone,
      google_map: seederData[i].google_map,
      rating: seederData[i].rating,
      description: seederData[i].description
    })
  }
})