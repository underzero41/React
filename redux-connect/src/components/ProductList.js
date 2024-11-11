import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from './favoritesSlice';

const products = [
  { id: 1, name: 'Товар 1', description: 'Описание товара 1', price: 100 },
  { id: 2, name: 'Товар 2', description: 'Описание товара 2', price: 200 },
  { id: 3, name: 'Товар 3', description: 'Описание товара 3', price: 300 }
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddFavorite = (product) => {
    dispatch(addFavorite(product));
  };

  return (
    <div>
      <h2>Список товаров</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: {product.price} руб.</p>
            <button onClick={() => handleAddFavorite(product)}>Добавить в избранное</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
