import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DBNAME}`);
        console.log(`DB is connected to ${connection.connection.host}`);

    }catch(err){
        console.error(err);
    }
}

export default connectDB;