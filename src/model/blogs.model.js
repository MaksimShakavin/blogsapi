import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileAsync'
import path from 'path'

class Blogs {

    constructor() {
        const adapter = new FileSync(path.join(__dirname, '../data/blogs.json'));
        this.db = low(adapter);
    }

    getAll() {
        return this.db.then(db => db.get('blogs')
            .value()
        );
    }

    get(id) {
        return this.db.then(db => db.get('blogs')
            .find({id:id})
            .value()
        );
    }

    remove(id) {
        return this.db.then(db => db.get('blogs')
            .remove({id: id})
            .write()
        );
    }

    add(blogpost) {
        return this.db.then(db => db.get('blogs')
            .push(blogpost)
            .last()
            .assign({ id: Date.now().toString() })
            .write()
        );
    }

    update(blogpost) {
        return this.db.then(db => db.get('blogs')
            .find({id: blogpost.id})
            .assign(blogpost)
            .write()
        )
    }




}

export default new Blogs();