import { Router } from "express";
import { articlesGet, articleGet } from "../controllers/articleController";

const router = Router();

router.route('/').get(articlesGet);
router.route('/:id').get(articleGet);

export default router;