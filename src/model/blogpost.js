import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title: String,
    description: String
});

export default mongoose.model('blogs',blogSchema);