import mongoose from "mongoose"

export function dbconnection (){
    mongoose.connect('mongodb://127.0.0.1:27017//jobSearch').then(()=>{
        console.log("DB Connected Successfully")
    }).catch((err)=>{
        console.log("Database error ".err)
    })

}