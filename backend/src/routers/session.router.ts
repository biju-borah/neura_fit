import express, {Router} from 'express'
import controller from '@controllers/session.controller'

const router : Router = express.Router();

router.get('/:user_id',controller.get);
router.post('/',controller.post);

export default router