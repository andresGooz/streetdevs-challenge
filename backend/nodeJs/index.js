const express = require('express')
const app = express();
var cors = require('cors')
app.use(cors())
const port = 3000;
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });

const PostRepository = require('./lib/repository/repositories/post.repository');
const PostController = require('./lib/controller/postController');
const ControllerPostInterface = require('./interfaces/controllerPost.interface');
const checkValidityPluggin = require('./helpers/checkValidityPluggin');


const postRepository = new PostRepository();
const postController = new PostController(postRepository);

checkValidityPluggin(postController, ControllerPostInterface);

app.get('/posts', (req, res) => postController.getAll(req, res));//OK
app.get('/posts/id/:id', (req, res) => postController.getById(req, res));//OK
app.get('/posts/name/:name', (req, res) => postController.getByName(req, res));//OK
app.post('/posts', (req, res) => postController.create(req, res));//OK
app.put('/posts/:id', (req, res) => postController.update(req, res));
app.delete('/posts/:id', (req, res) => postController.delete(req, res));//OK

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
