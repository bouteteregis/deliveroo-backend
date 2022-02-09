import express from "express";
import cors from "cors";
import "dotenv/config";
import fs from "fs";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  fs.readFile("./db-deliveroo.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);
      return res.json(databases);
    }
  });
});

// Heroku va nous fournir une variable process.env.PORT
// if (process.env.PORT) {
//   app.listen(process.env.PORT, () => {
//     console.log("Server started");
//   });
// } else {
//   app.listen(3200, () => {
//     console.log("Server started");
//   });
// }

app.listen(process.env.PORT || 3200, () => {
  console.log("Server started PORT " + process.env.PORT);
});
