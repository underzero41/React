import React from 'react';
import { useParams } from 'react-router-dom';
import articles from './data';

const DetailPage = () => {
    const { id } = useParams();
    const article = articles.find(item => item.id === parseInt(id));

    if (!article) {
        return <div>Статья не найдена</div>;
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
};

export default DetailPage;
