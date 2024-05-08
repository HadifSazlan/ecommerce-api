
import {Router} from 'express';
import {index, store, fetch, update, remove} from './controller.js';
import {authenticateJWT} from '../middlewares/auth.js';

const router = Router();

router.get('/', authenticateJWT, index);
router.post('/', authenticateJWT, store);
router.get('/:id', authenticateJWT, fetch);
router.put('/:id', authenticateJWT, update);
router.delete('/:id', authenticateJWT, remove);

export default router;