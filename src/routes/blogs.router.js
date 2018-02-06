import express from 'express';
import Blogs from '../model/blogs.model'
import logger from "../utils/logger";

const router = express.Router();

router.get('/', (req,res) => {
    Blogs.getAll()
        .then(posts => res.send(posts));
});

router.get('/:id', (req,res) => {
    Blogs.get(req.params.id)
        .then(post =>  res.send(post) )
        .catch(err => logger.error(err));
});

router.delete('/:id', (req,res) => {
    Blogs.remove(req.params.id)
        .then(() => res.sendStatus(200));
});

router.post('/',(req,res) => {
    const blogpost = {
        title: req.body.title,
        description: req.body.description
    };

    Blogs.add(blogpost)
        .then(post => res.send(post));
});

router.put('/:id',(req,res) => {
    const blogpost = {
        id: req.params.id,
        title: req.body.title,
        description: req.body.description
    };

    Blogs.update(blogpost)
        .then(post => res.send(post));
});
export default router;