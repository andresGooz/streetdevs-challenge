const RepositoryPostInterface = require('./interfaces/repositoryPost.interface');
const checkValidityPluggin = require('../../helpers/checkValidityPluggin');


class PostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
        checkValidityPluggin(this.postRepository, RepositoryPostInterface);
    }

    getAll() {
        return this.postRepository.getAll();
    }

    getById(id) {
        return this.postRepository.getById(id);
    }

    getByName(name) {
        return this.postRepository.getByName(name);
    }

    create(post) {
        return this.postRepository.create(post);
    }

    update(id, post) {
        return this.postRepository.update(id, post);
    }

    delete(id) {
        return this.postRepository.delete(id);
    }
}

module.exports = PostUseCase;
