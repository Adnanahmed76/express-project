
let checkToken=(req,res,next)=>{
   
    console.log(res)
if(req.query.token==""|| req.query.token==undefined){
    return res.send({
        status:0,
        msg:"plesae fill the token"
    })
}
if(req.query.token!==process.env.MyToken){
    return res.send({
        status:1,
        msg:"please fil the Correct token"
    })
}
next();
}

module.exports={checkToken}