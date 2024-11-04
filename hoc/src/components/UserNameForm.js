// UserNameForm.js (для изменения имени)
import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const UserNameForm = () => {
    const { changeUserName } = useContext(UserContext);
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        changeUserName(name);
        setName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={handleChange} 
                placeholder="Введите имя"
            />
            <button type="submit">Сменить имя</button>
        </form>
    );
};

export default UserNameForm;
