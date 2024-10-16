const postUseCase = require('../use-case/postUseCase');
const ServicePostInterface = require('./interfaces/servicePost.interface');
const checkValidityPluggin = require('../../helpers/checkValidityPluggin');


checkValidityPluggin(postUseCase, ServicePostInterface);
class PostController {
    async getAll(req, res) {
        const posts = await postUseCase.getAll();
        res.json(posts);
    }

    async getById(req, res) {
        const post = await postUseCase.getById(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).send('post not found');
        }
    }

    async getByName(req, res) {
        const posts = await postUseCase.getByName(req.params.name);
        if (posts) {
            res.json(posts);
        }
        else {
            res.status(404).send('Post not found');
        }
    }

    async create(req, res) {
        const post = await postUseCase.create(req.body);
        res.status(201).json(post);
    }

    async update(req, res) {
        const post = await postUseCase.update(req.params.id, req.body);
        if (post) {
            res.json(post);
        } else {
            res.status(404).send('post not found');
        }
    }

    async delete(req, res) {
        await postUseCase.delete(req.params.id);
        res.status(204).send();
    }
}

module.exports = new PostController();
