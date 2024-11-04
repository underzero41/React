import React from 'react';

// HOC withLoadingIndicator
const withLoadingIndicator = (WrappedComponent) => {
    return function WithLoadingIndicator({ isLoading, ...props }) {
        if (isLoading) {
            return <div>Загрузка...</div>; // Можете заменить на спиннер из библиотеки
        }
        return <WrappedComponent {...props} />;
    };
};

export default withLoadingIndicator;
