const mongoose=require("mongoose");
const user=new mongoose.Schema({
  name:{
      type:String,
      required:true,
      
  },
  password:{
      type:String,
      retuired:true
  }
})
const User=mongoose.model("users",user)
module.exports=User