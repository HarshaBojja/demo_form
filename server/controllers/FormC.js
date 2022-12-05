import FormM from "../models/FormM.js"


export const createForm= async(req,res,next)=>{
    const newForm=new FormM(req.body)
    try{
        const saveForm=await newForm.save()
        res.status(200).json(saveForm)
    }catch(err){
        next("err")
    }
}