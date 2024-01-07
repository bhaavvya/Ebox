
import mongoose from 'mongoose'



const Connection = () =>{
    const DB_URL = 'mongodb+srv://bhavyadv:bhavyaverma@impbox.x8dsujl.mongodb.net/?retryWrites=true&w=majority'
    try {
        mongoose.connect(DB_URL,{useNewUrlParser : true})
        console.log("Database connected sucessfully")
    } catch (error) {
        console.log("Errror msg is displayed here",error.message)
    }
}

export default Connection