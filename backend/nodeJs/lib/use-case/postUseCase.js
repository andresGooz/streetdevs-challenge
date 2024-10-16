const postRepository = require('../repository/repositories/post.repository');
const RepositoryPostInterface = require('./interfaces/repositoryPost.interface');
const checkValidityPluggin = require('../../helpers/checkValidityPluggin');


checkValidityPluggin(postRepository, RepositoryPostInterface);
class PostUseCase {
    getAll() {
        return postRepository.getAll();
    }

    getById(id) {
        return postRepository.getById(id);
    }

    getByName(name) {
        return postRepository.getByName(name);
    }

    create(post) {
        return postRepository.create(post);
    }

    update(id, post) {
        return postRepository.update(id, post);
    }

    delete(id) {
        return postRepository.delete(id);
    }
}

module.exports = new PostUseCase();