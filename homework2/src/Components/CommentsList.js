import React, { useState, useEffect } from 'react';

function CommentsLiSt() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const handleDelete = (id) => {
        // Удаляем комментарий по id
        setComments(comments.filter(comment => comment.id !== id));
    };

    return (
        <div>
            <h1>Список комментариев</h1>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        {comment.text}
                        <button onClick={() => handleDelete(comment.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default CommentsLiSt;