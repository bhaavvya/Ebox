import express from "express";
import Connection from "./database/db.js";
import cors from 'cors';
import routes from "./routes/routes.js";


const app = express()
const PORT = 8000
app.use(cors())
app.use(express.urlencoded());
app.use(express.json());
app.use('/',routes)
Connection();

app.listen(PORT,()=>{
    console.log(`Server has started at port ${PORT}`)
})