
import {Router} from 'express';
import {index, store, fetch, update, remove} from './controller.js';

const router = Router();

router.get('/', index);
router.post('/', store);
router.get('/:id', fetch);
router.put('/:id', update);
router.delete('/:id', remove)

export default router;