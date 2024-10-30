import express from "express";
import cors from "cors";

import initializeConnection from "./dbConnection.js";
import register from "./src/register.js";

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

app.post('/register', (req, res) => {
    register(req, res);
});

initializeConnection()
  .then((connection) => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error initialize connection error: ", error);
  });