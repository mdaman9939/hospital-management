const mongoose = require("mongoose");

// mongoDb connection url
const dbURL =
  "mongodb+srv://mdaman9939:A123456@cluster0.5kgahgx.mongodb.net/hospital-management?retryWrites=true&w=majority&appName=Cluster0";

// connect to mongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected successfully.");
  } catch (error) {
    console.error("error connecting to mongodb", error);
    process.exit(1); // exit the process with failure
  }
};

module.exports = connectDB;
