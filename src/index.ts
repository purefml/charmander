import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import referralRoute from './routes/referrals';
import uploadRoute from './routes/uploads';

dotenv.config();

const app: Application = express();
const port: number = 9000;

// init mongodb
const connect = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB as string);
        console.log('Connected to DB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process on failure
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('Database Disconnected');
});

mongoose.connection.on('connected', () => {
    console.log('Database Connected');
});

// Routes
app.get('/', (_req: Request, res: Response) => {
    res.send('Hello world!');
});

// Middlewares
app.use(express.json()); // Parses application/json
app.use(express.urlencoded({ extended: true })); // Parses application/x-www-form-urlencoded

// API Routes
app.use('/api/referrals', referralRoute);
app.use('/api/upload', uploadRoute);

// Global Error Handler Middleware
app.use((err: Error & { status?: number }, _req: Request, res: Response, _next: NextFunction) => {
    const errStatus: number = err.status || 500;
    const errMessage: string = err.message || 'Something went wrong';

    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined, // Hide stack trace in production
    });
});

// Start Server
app.listen(port, () => {
    connect();
    console.log(`Server running on port ${port}`);
});