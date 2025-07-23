import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            maxPoolSize: 10, // Adjust as needed
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB connection Error", error.message);
        process.exit(1);
    }
}

export default connectDB;