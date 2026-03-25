import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.join(__dirname, '../../.env')});

const mandatoryEnvironments = [
    "PORT",
    "OPEN_WEATHER_API_TOKEN",
    "WHATSAPP_TOKEN"
];

const missingEnvironments = mandatoryEnvironments.filter(variable => !process.env[variable]);

if(missingEnvironments.length > 0) {
    const variablesString = JSON.stringify(missingEnvironments);

    console.log(`Environment variable(s) ${variablesString.substring(1, variablesString.length - 1)} required to start the application`)
    process.exit(1);
}

export const config = {
    PORT: process.env.PORT,
    OPEN_WEATHER_API_TOKEN: process.env.OPEN_WEATHER_API_TOKEN,
    WHATSAPP_TOKEN: process.env.WHATSAPP_TOKEN
}

console.log(missingEnvironments);