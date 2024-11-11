import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from './favoritesSlice';

const FavoriteList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  const handleRemoveFavorite = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div>
      <h2>Избранное</h2>
      <ul>
        {favorites.length === 0 ? (
          <li>Нет избранных товаров</li>
        ) : (
          favorites.map(item => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Цена: {item.price} руб.</p>
              <button onClick={() => handleRemoveFavorite(item.id)}>Удалить из избранного</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FavoriteList;
