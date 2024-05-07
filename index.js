import express from "express";
import helmet from "helmet";
import routes from "./src/routes/index.js";
import mongoose from "mongoose";
import { ENV } from "./src/constants/index.js";
import chalk from "chalk";

const app = express();

app.use(helmet());
app.use(express.json());

mongoose.connect(`mongodb+srv://sualehfarooq65:aDBMr1igb4qNpyxb@cluster0.ep9momm.mongodb.net/`)

mongoose.connection.on("connected", () => {
    console.log(chalk.white.bgGreen("---- Connected to MongoDB ----"));
});

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/api", routes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});