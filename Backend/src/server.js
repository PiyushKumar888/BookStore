import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
dotenv.config();
const app = express();
import cors from "cors";
import connectDB from "./db/db.js";
import bookRoutes from "../src/routes/Book.routes.js";
import userRoutes from "../src/routes/user.routes.js";

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: `http://localhost:5173`,
    credentials: true
}))


connectDB()
    .then(()=>(
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        })
    )).catch((err)=>{
        console.error(err);
});

//defining routes
app.use('/api/books', bookRoutes);
app.use('/api/user', userRoutes);

