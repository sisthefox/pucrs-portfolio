import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default function connectDB() {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
}
