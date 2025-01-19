let express=require("express");
require('dotenv').config();
const {checkToken}=require("./checkTokenmiddleware")
let app=express();
console.log(process.env.MyToken)
// let Token ="1234";
// let mypass="adnan";
app.use(express.json());

// let checkToken=(req,res,next)=>{
// if(req.query.token==""|| req.query.token==undefined){
//     return res.send({
//         status:0,
//         msg:"plesae fill the token"
//     })
// }
// if(req.query.token!=Token){
//     return res.send({
//         status:1,
//         msg:"please fil the Correct token"
//     })
// }
// next();
// }

// app.use(checkToken)//Middleware
// app.use((req,res,next)=>{
//     if(req.query.pass==""|| req.query.pass==undefined){
//         return res.send({
//             status:0,
//             msg:"please fill the password"
//         })
        
//     }
//     if(req.query.pass!=mypass){
//         return res.send({
//             status:1,
//             msg:"plesse fill the correct Token"
//         })
//     }
//     next();
// })
app.get("/",checkToken,(req,res)=>{
    res.send({
        status:1,
        msg:"home Page api"
    })
})
app.get("/news",checkToken,(req,res)=>{
    res.send({
        status:2,
        msg:"my Second api"
    })
})
app.get("/products",(req,res)=>{
    res.send({
        status:1,
        msg:"products"
    })
})
app.get("/news/:id",(req,res)=>{
    let currentid=req.params.id
    res.send("news details api"+currentid)
})

app.post("/login",(req,res)=>{
    console.log(req.body)
    res.status(200).json(
        {
                    status:1,
                    msg:"Login success",
                    bodydata:req.body,
                    queryData:req.query
                }
    )
    res.send(
        {
        status:1,
        msg:"Login success",
        bodydata:req.body,
        queryData:req.query
    }
)
})
app.listen(process.env.PORT||5000)