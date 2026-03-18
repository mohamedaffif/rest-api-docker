import  pool  from '../config/db.js';
const createUserTable =  async () => {
    console.log("create user table is running")
    const queryText = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    try {
        await pool.query(queryText);
        console.log("User table created if not exist successfully");
    }catch (err) {
        console.error("Error creating user table:", err);
    }
}

export default createUserTable;