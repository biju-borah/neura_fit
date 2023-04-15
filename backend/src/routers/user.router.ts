import express, {Router} from 'express'
import controller from '@controllers/user.controller'

const router : Router = express.Router();

router.get('/',controller.get);
router.post('/',controller.post);

export default router