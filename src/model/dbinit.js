import mongoose from 'mongoose'
import logger from '../utils/logger'

export default () => {

    mongoose.connect('mongodb://127.0.0.1:27017/frontcamp', {
        poolSize: 10
    });

    mongoose.connection.on('error', (err) => {
        logger.error('Database Connection Error: ' + err);
        process.exit(2);
    });

    mongoose.connection.on('connected', () => {
        logger.info('Succesfully connected to MongoDB Database');
    });
}