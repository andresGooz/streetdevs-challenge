const PostUseCase = require('../use-case/postUseCase');
const UsecasePostInterface = require('./interfaces/usecasePost.interface');
const checkValidityPluggin = require('../../helpers/checkValidityPluggin');


class PostController {
    constructor(postRepository) {
        this.postRepository = postRepository;
        this.postUseCase = new PostUseCase(postRepository);
        checkValidityPluggin(this.postUseCase, UsecasePostInterface);
    }
    async getAll(req, res) {
        const posts = await this.postUseCase.getAll();
        res.json(posts);
    }

    async getById(req, res) {
        const post = await this.postUseCase.getById(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).send('post not found');
        }
    }

    async getByName(req, res) {
        const posts = await this.postUseCase.getByName(req.params.name);
        if (posts) {
            res.json(posts);
        }
        else {
            res.status(404).send('Post not found');
        }
    }

    async create(req, res) {
        const post = await this.postUseCase.create(req.body);
        res.status(201).json(post);
    }

    async update(req, res) {
        const post = await this.postUseCase.update(req.params.id, req.body);
        if (post) {
            res.json(post);
        } else {
            res.status(404).send('post not found');
        }
    }

    async delete(req, res) {
        await this.postUseCase.delete(req.params.id);
        res.status(204).send();
    }
}

module.exports = PostController;
