
import mongoose from 'mongoose'



const Connection = () =>{
    const DB_URL = ''
    try {
        mongoose.connect(DB_URL,{useNewUrlParser : true})
        console.log("Database connected sucessfully")
    } catch (error) {
        console.log("Errror msg is displayed here",error.message)
    }
}

export default Connection
