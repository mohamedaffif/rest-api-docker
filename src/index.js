import express from "express";
import cors from "cors";

import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";



const app = express();
const PORT = process.env.PORT || 5001


// Middleware
app.use(express.json());
app.use(cors());

// routes 
app.use("/api", userRoutes);


// create user table if not exist




// testing POSTGRESS Connection
app.get('/', async (req, res) => {
    console.log("START")
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`);
    console.log("END")
});


// error handling middleware
app.use(errorHandler)

// server running
app.listen(PORT , async () => {
    await createUserTable();
    console.log(`Server is running on port ${PORT}`);
})