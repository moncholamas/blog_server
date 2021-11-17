import  Express  from 'express';
import  {createPost, deletePost, getAll, getById, updatePost} from '../controllers/postsController.js'

const router = Express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;

