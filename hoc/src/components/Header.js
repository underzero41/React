import React, { useContext } from 'react';
import { UserContext } from './/UserContext';

const Header = () => {
    const { user } = useContext(UserContext);
    return <h1>Привет, {user.name}!</h1>;
};

export default Header;
