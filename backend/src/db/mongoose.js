import mongoose from "mongoose";

const connectDB = async () => {
    try {
      const con = await mongoose.connect(
        "mongodb://localhost:27017/codebasil-api",
        {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        }
      );
      console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (error) {
      console.error("Error: ", error.message);
      process.exit(1);
    }
  };
  
  export default connectDB;
