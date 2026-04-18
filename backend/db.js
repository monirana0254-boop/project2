import mongoose from "mongoose";
import "dotenv/config"

const connection=async()=>{
    const url=process.env.Mongo_url
    try{
       await mongoose.connect("mongodb+srv://monirana0254_db_user:4QP28iItRoy4KsJz@cluster0.uivlj7u.mongodb.net/?appName=Cluster0")
        console.log("connected to mongoDb");
    }catch(err){
        console.log(err);
        console.log("error in mongo connection");
    }
}
export default connection 