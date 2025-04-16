const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("You're in the mongo mainframe");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
