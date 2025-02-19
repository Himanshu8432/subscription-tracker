import aj from "../config/arcjet.js"


const arcJetMiddleware=(req,res,next)=>{
    try{

    } catch(
        err
    ){
        console.log(err);
        next(err)
    }
}