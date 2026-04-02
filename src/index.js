// require('dotenv').config{path : './env'}
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGODB Connection Failed" , err)
})















//using iife method - 1
// import express from "express"
// const app = express()

// ( async() => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error" , (error) => {
//         console.log(error);
//         throw error;
//        })

//        app.listen(process.env.PORT, () => {
//         console.log(`The port is listening on ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log(error);
//         throw error;
    
//     }
// })()