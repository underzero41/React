import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { ThemeContext } from './ThemeContext';

const Profile = () => {
    const { user } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);
    
    return (
        <div style={{ background: theme === "темная" ? "#333" : "#fff", color: theme === "темная" ? "#fff" : "#000" }}>
            <h2>Профиль пользователя</h2>
            <p>Имя: {user.name}</p>
        </div>
    );
};

export default Profile;
