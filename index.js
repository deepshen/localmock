require('babel-polyfill')
const path = require('path')
const express = require('express')
const router = express.Router()
const app = express()

const mock = require('./mockFiles')

for(let item in mock){
  if(mock.hasOwnProperty(item)){
    let preData = item.split(' ')
    let method = preData[0]
    let url = preData[1]
    router[method.toLocaleLowerCase()](url,function (req, res) {
      return mock[item](req,res)
    })
  }
}
app.use(router)
// app.use(express.static(__dirname+'/public'))

app.listen(8112,()=>{
  console.log('server is runnint ar port 8112')
})
