import User from "../model/userAuth.js";
export const checkRole = async(req,res,next)=>{
    try{
        const user = await User.findById(req.user.id);
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
