const express = require('express')
const app = express()
const port = 3000


//mongodb connect 
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://a09176:RA7jV136AtPeA0R6@boiler-plate.ink8y0q.mongodb.net/',{
    //option    
}).then(() => console.log('Mongodb conneted'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('이제부터 nodejs 시작이다!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})