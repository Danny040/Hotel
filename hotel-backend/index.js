import express from "express";
import initializeConnection from "./dbConnection.js";

const app = express();

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
