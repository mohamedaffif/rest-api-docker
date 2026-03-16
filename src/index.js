import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001


// Middleware
app.use(express.json());
app.use(cors());

// routes 
app.use("/api", userRoutes);


// error handling middleware
app.use(errorHandler)

// testing POSTGRESS Connection
app.get('/', async (req, res) => {
    console.log("START")
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`);
    console.log("END")
});

// server running
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})