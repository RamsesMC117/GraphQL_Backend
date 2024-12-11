import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/graphql')
        console.log(`MongoDB Connected: ${conn.connection.name}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}