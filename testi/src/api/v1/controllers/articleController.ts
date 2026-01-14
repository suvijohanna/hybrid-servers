import {getArticles, getArticleById} from '../models/articleModel';
import {Article} from '../../types/LocalTypes';
import { NextFunction, Request, Response } from 'express';

const articlesGet = (_req: Request, res: Response<Article[]>, _next: NextFunction) => {
    res.json(getArticles())
};

const articleGet = (req: Request<{id: string}>, res: Response<Article>, next: NextFunction) => {
    try {
        const {id} = req.params;
        const idAsNumber = Number(id);
        res.json(getArticleById(idAsNumber));
    } catch (error) {
        next(error);
    }
};

export { articlesGet, articleGet };