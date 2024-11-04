import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "Гость" });

    const changeUserName = (newName) => {
        setUser({ name: newName });
    };

    return (
        <UserContext.Provider value={{ user, changeUserName }}>
            {children}
        </UserContext.Provider>
    );
};

