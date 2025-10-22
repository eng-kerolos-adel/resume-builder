import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    let mongodbURL = process.env.MONGODB_URL;
    const projectName = "resume-builder";

    if (!mongodbURL) {
      throw new Error("MONGODB_URL is not defined in environment variables");
    }
    if (mongodbURL.endsWith("/")) {
      mongodbURL = mongodbURL.slice(0, -1);
    }
    await mongoose.connect(`${mongodbURL}/${projectName}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
