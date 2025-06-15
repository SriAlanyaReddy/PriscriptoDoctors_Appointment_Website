import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () =>
      console.log('✅ MongoDB connected successfully')
    );

    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
