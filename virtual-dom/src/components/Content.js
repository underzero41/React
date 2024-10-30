function Content({theme}) {
    const style = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        padding: '20px',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s',
    };

    
    return (
        <div style={style}>
            <h1>Содержимое с темой {theme}</h1>
            <p>Здесь можно добавлять любой контент.</p>
        </div>
    );

}

export default Content;