const express=require("express")
const cors=require("cors")
var app=express()
app.use(cors())
app.listen(5000,function()
{
  console.log("SERVER STARTED")
}) 

app.get("/",function(req,res)
{
  console.log(req)
  var fname="FAZIL"
  var pname=123
  if(fname===req.query.username && pname==req.query.password)
    {
      console.log(req.query.username)
   res.send(true)
    }        
    else{
      res.send(false)
    }
})