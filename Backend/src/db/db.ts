import mongoose from 'mongoose'
const connectToDB = async()=>{
    if(!process.env.MONGO_URI){
        console.error("MONGO_URI not found")
        process.exit(1)
    }
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfully!")
    } catch (error) {
        console.log("Error in connecting to database", error)
        process.exit(1)
    }
}

export default connectToDB