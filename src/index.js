import express from 'express'
import blogsRouter from './routes/blogs.router'
import logger from './utils/logger'
import dbinit from './model/dbinit'
import path from 'path'

dbinit();
const app = express();

app.use((req, res, next) => {
    logger.info(`Route ${req.url}`);
    next();
});
app.use(express.json());
app.use('/blogs', blogsRouter);
app.use((err, req, res, next) => {
    logger.error(err);
    res.sendStatus(500);
    next();
});

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    logger.debug(`Route ${req.url} is not defined`);
    res.render('404', {title: 'Hey', message: 'Hello there!'})
});

app.listen(3000, () => {
    logger.info('Server started in port 3000!');
});
