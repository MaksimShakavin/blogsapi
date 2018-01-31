import {createLogger, format, transports} from 'winston';
const {combine, timestamp, label, printf} = format;


const myFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

export default createLogger({
    format: combine(
        label({ label: 'What is happening now with app?' }),
        timestamp(),
        myFormat
    ),
    transports: [new transports.Console(), new transports.File({ filename: 'combined.log' })]
});