import BlogsModel from './blogpost'
import {ObjectId} from 'mongoose'
import logger from "../utils/logger";

class Blogs {

    constructor() {

    }

    getAll() {
        return BlogsModel.find();
    }

    get(id) {
        return BlogsModel.findById(id);
    }

    remove(id) {
        return BlogsModel.remove({id:id});
    }

    add(blogpost) {
        const blogspostModel = new BlogsModel(blogpost);
        return blogspostModel.save();
    }

    update(blogpost) {
        return BlogsModel.findById(blogpost.id).then(blogModel => {
            console.log(blogpost);
            blogModel.title = blogpost.title;
            blogModel.description = blogpost.description;
            return blogModel.save();
        })
    }

}

export default new Blogs();