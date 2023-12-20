import dbConnect from "./db/index.js";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
console.log(process.env.PORT);

dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONGO DB Connection fail :`, err);
  });
