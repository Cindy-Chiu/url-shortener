// require packages used in the project
const express = require('express')

//const bodyParser = require('body-parser')
const port = 3000
const exphbs = require('express-handlebars')
const hbshelpers = require('handlebars-helpers');
const multihelpers = hbshelpers();
const methodOverride = require('method-override')
const routes = require('./routes')
require('./config/mongoose')
const app = express()


app.engine('handlebars', exphbs({ 
  helpers: multihelpers,
  defaultLayout: 'main' 
}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use(routes)
//app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})