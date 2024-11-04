import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ background: theme === "темная" ? "#333" : "#fff", color: theme === "темная" ? "#fff" : "#000" }}>
            <p>© {currentYear} Ваш сайт</p>
        </footer>
    );
};

export default Footer;
