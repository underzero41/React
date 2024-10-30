import React from 'react';

function MessagesList( {messages}) {
    


    return (  
        <ul>
            {messages.map( message => (
                <li key={message.id}>
                    {message.text}
                </li>
            ))}
        </ul>
    );
}

export default MessagesList;