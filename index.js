let express=require("express");
let app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send({
        status:1,
        msg:"home page api"
    })
})
app.get("/news",(req,res)=>{
    res.send({
        status:2,
        msg:"my second api"
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
        msg:"Login successfully",
        bodydata:req.body,
        queryData:req.query
    }
)
})
app.listen("800")