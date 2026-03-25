import express from "express";
import { config } from "./config/environment";
import {winstonLogger, morganLogger } from "./services/logger";


const app = express();
const port = config.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morganLogger);


app.listen(port, () => winstonLogger.info(`Server running on port ${port}...`));