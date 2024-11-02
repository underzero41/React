import React from 'react';
import { Link } from 'react-router-dom';
import articles from './data';

const ListPage = () => {
    return (
        <div>
            <h1>Список статей</h1>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <Link to={`/article/${article.id}`}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListPage;
