import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const initializeConnection = async () => {
  try {
    const connectionConfig = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_USER,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
    };
    const connection = await mysql.createConnection(connectionConfig);
    console.log("Connected to database: " + connectionConfig.database);
    return;
  } catch (error) {
    console.log("Database connection is failed: " + error.stack);
    return;
  }
};

export default initializeConnection;
