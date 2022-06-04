import mongoose from "mongoose";

const connectDB = async () => {
    try {
      const con = await mongoose.connect(
        // "mongodb+srv://ujjwalraj5798:ujjwalraj5798@cluster0.wbish.mongodb.net/binay-api?retryWrites=true&w=majority",
        // "mongodb+srv://BinayBhattacharya:Binaycodes12@cluster0.rfdd7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        "mongodb+srv://codebasilPvtTech:codebasil1234@cluster0.ugqd4.mongodb.net/?retryWrites=true&w=majority",
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