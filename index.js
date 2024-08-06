const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const {User} = require("./model/user");
const config = require("./config/key")
//mongodb connect 
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    //option    
}).then(() => console.log('Mongodb conneted'))
  .catch(err => console.log(err))

  //get method
app.get('/', (req, res) => {
  res.send('이제부터 nodejs 시작이다!노드몬이다!')
})
  //post method

  app.post("/register",async (req,res) =>{
      //회원가입정보 
      const user = new User(req.body)

      try {
        await user.save();
        return res.status(200).json({message:'성공'})
      } catch (err) {
        return res.json({success:false, err})
      }
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})