import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors'; // استيراد مكتبة cors

dotenv.config()

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });
const __dirname = path.resolve();

const app = express();const corsOptions = {
  origin: "http://localhost:3000",  
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization"
};

app.use(cors(corsOptions));
// تمكين CORS
app.use(cors());

app.use(express.json());
app.use(cookieParser());

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

// زيادة مهلة الخادم إلى 10 دقائق
server.setTimeout(10 * 60 * 1000);

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
