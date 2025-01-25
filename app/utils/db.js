import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
  // mongoose.set("debug", true);
};

// console.log(connectDb);

export default connectDb;
