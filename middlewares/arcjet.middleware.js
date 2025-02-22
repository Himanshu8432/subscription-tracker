import aj from "../config/arcjet.js"


export const arcJetMiddleware=async(req,res,next)=>{
    try{
    const decision=await aj.protect(req,{
        requested:1
    })
if(decision.isDenied()){
    if(decision.reason.isRateLimit()) return  res.status(429).json({
        error:"Rate Limit exceeded"
    })
    if(decision.reason.isBot()) return  res.status(429).json({
        error:"Bot detected"
    })
    return res.status(403).json({
        error:"Access Denied"
    })
}
next()
    } catch(
        err
    ){
        console.log(`Arkjet Middleware erroe:${err}`);
        next(err)
    }
}