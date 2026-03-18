import pkg from "pg";
const { Pool } = pkg;




if (!process.env.DATABASE_URL) {
  throw new Error("❌ DATABASE_URL is not defined");
}
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

pool.on("connect", () => {
  console.log("Connected to the database");
});

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl:
//     process.env.NODE_ENV === "production"
//       ? { rejectUnauthorized: false }
//       : false,
// });

// pool.on("connect", () => {
//   console.log("Connected to the database");
// });
// const pool = new Pool(
//   process.env.DATABASE_URL
//     ? {
//         connectionString: process.env.DATABASE_URL,
//         ssl: process.env.NODE_ENV === "production"
//           ? { rejectUnauthorized: false }
//           : false,
//       }
//     : {
//         user: process.env.DB_USER,
//         host: process.env.DB_HOST,
//         database: process.env.DB_NAME,
//         password: process.env.DB_PASSWORD,
//         port: 5432,
//       }
// );
export default pool;
