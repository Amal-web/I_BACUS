

const JobSeeker=require("../Model/JobSeeker-model");


const addStatus=async(req,res)=>{
    const {status}=req.body;
    const user=req.params.id
    console.log(status,user,"statussss");
    if(status==="" ){
        return res.status(422).json({message:"Invalid Inputs"})
    }
    let existingUser;
    try {
        existingUser=await JobSeeker.findById(user)
        console.log(existingUser, "@statusssssssssssUser");
        await JobSeeker.updateOne({_id:user},{$set:{status:status}})
    } catch (error) {
        console.log(error)
    }

   
    

   
    return res.status(200).json({ message: "status updated",status});
}

module.exports={addStatus}