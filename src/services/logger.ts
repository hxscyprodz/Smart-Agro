import { format, createLogger, transports } from "winston";
import morgan from "morgan";
import { config } from "../config/environment";

const { combine, colorize, json, printf, timestamp } = format;
const { APP_ENV } = config;

const loggerFormat = printf(({timestamp, level, message}) => {
    return `${timestamp} [ ${level} ] : ${message}`;
});

export const winstonLogger = createLogger({
    level: APP_ENV === 'development' ? 'debug' : 'info',
    format: combine(timestamp(), APP_ENV === 'development' ? combine(colorize(), loggerFormat) : json()),
    transports: [ new transports.Console()]
});

const stream = {
  write: (message: string) => winstonLogger.info(message.trim()),
};

export const morganLogger = morgan(
  APP_ENV === 'production' ? 'combined' : 'dev',
  { stream }
);


 