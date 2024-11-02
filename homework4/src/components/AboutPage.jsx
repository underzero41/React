import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <h1>О нас</h1>
            <p>Мы – команда разработчиков, создающих замечательные приложения.</p>
            <Link to="/">Вернуться на главную страницу</Link>
        </div>
    );
};

export default AboutPage;
