import { Article } from '../../types/LocalType';

const articles = Article[] = [
    {
        id: 1,
        title: "Example",
        content: "lorem ipsum dolor sit amet"
    },
    {
        id: 2,
        title: "Example 2",
        content: "consectetur adipiscing elit"
    },
    {
        id: 3,
        title: "Example 3",
        content: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }

];

const getArticles = () => {
    return articles;
};

const getArticleById = (id: number) => {
    const article = articles.find(article => article.id === id);
    if(!article) {
        throw new Error('Article not found');
    }
    return article;
};

export { getArticles, getArticleById };