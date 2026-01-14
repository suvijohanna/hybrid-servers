import articleRouter from './routes/articleRouter';
import { Router } from 'express';


const router = Router();

router.use('/articles', articleRouter);

export default router;