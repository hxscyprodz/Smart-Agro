import express, {Request, Response} from "express";
import { config } from "./config/environment";
import { StatusCodes } from "http-status-codes";
import { getLocation } from "./services/weather.service";


const app = express();
const port = config.PORT || 3000;

//getLocation();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => console.log(`Server running on port ${port}...`));