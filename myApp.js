let express = require('express');
let app = express();
let bodyParser = require('body-parser')
// bodyParser.urlencoded({ extended: false })

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// const MESSAGE_STYLE=process.env['MESSAGE_STYLE']

// app.get("/now",(req,res,next)=>{
//   req.time = new Date().toString()
//   next()
// },(req,res)=>{
//   res.json({time: req.time})
// })

  // app.get("/:word/echo",(req,res)=>{
  //   word = req.params.word
  //   res.json({echo: word})
  // })
  app.get("/name",(req,res)=>{
    res.json({name: `${req.query.first}  ${req.query.last}`})
  })

// app.route('/name').get((req,res)=>{
    // let firstName = req.query.first
    // let lastName = req.query.last
    // console.log(firstName)
    // res.json({name: `${req.query.first}  ${req.query.last}`})
// })
// app.use((req,res,next)=>{
//    let path = req.path
//   let method = req.method
//   let ip = req.ip
//   console.log(method+" "+path+" "+"-"+" "+ip)
//   next()
// })
// app.get('/json',(req,res)=>{
//   res.json({message: "Hello json"})
// })

app.get("/",(req,res)=>{
  let abpath = __dirname + "/views/index.html"
  res.sendFile(abpath)
})

app.use("/public",express.static(__dirname +"/public"))

// app.get("/json", (req, res) => {
//   // let helloJson = "HELLO JSON"
//   if(process.env['MESSAGE_STYLE']=== "uppercase" ){
//     res.json({"message": "HELLO JSON"})
//     // helloJson = "Hello json"
//     // console.log(helloJson)
//   }else{
//       res.json({"message": "Hello json"})
//   }
// });
// const mySecret = process.env['MESSAGE_STYLE']


app.post("/name",function(request,response){
    let name = request.body.first+" "+request.body.last
    response.json({name: name })
})




























 module.exports = app;
