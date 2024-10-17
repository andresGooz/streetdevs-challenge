const PostUseCase = require('./postUseCase'); // Ajusta la ruta según la ubicación del archivo
const RepositoryPostInterface = require('./interfaces/repositoryPost.interface');

describe('PostUseCase', () => {
    let postRepositoryMock;
    let postUseCase;

    beforeEach(() => {
        postRepositoryMock = {
            getAll: jest.fn(),
            getById: jest.fn(),
            getByName: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        };

        postUseCase = new PostUseCase(postRepositoryMock);
    });

    test('should call getAll on repository', async () => {
        await postUseCase.getAll();
        expect(postRepositoryMock.getAll).toHaveBeenCalled();
    });

    test('should call getById with correct id', async () => {
        const id = 1;
        await postUseCase.getById(id);
        expect(postRepositoryMock.getById).toHaveBeenCalledWith(id);
    });

    test('should call create with correct post', async () => {
        const post = { title: 'Test Post' };
        await postUseCase.create(post);
        expect(postRepositoryMock.create).toHaveBeenCalledWith(post);
    });
});
