// require packages used in the project
const express = require('express')
const port = 3000
const exphbs = require('express-handlebars')
const routes = require('./routes')
require('./config/mongoose')
const app = express()


app.engine('handlebars', exphbs({ 

  defaultLayout: 'main' 
}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use(routes)



// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})