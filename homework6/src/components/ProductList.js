import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, toggleAvailability } from './productsSlice';

const ProductList = ({ setEditingProduct }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  return (
    <div>
      <h2>Список продуктов</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: {product.price} руб.</p>
            <p>Доступность: {product.available ? 'Доступен' : 'Недоступен'}</p>
            <button onClick={() => dispatch(toggleAvailability(product.id))}>
              {product.available ? 'Сделать недоступным' : 'Сделать доступным'}
            </button>
            <button onClick={() => dispatch(removeProduct(product.id))}>Удалить</button>
            <button onClick={() => setEditingProduct(product)}>Редактировать</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
