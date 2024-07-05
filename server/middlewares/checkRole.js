import User from "../model/userAuth";
export const checkRole = (req,res,next)=>{
    try{
        const user = User.findOne({_id:req.user.id});
        if(user.role==='Admin'){
            next();
        }
        else{
            res.status(401).json("Only Admin have these permissions!")
        }
    }
    catch(e){
        next(e);
    }
}