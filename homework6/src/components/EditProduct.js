import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from './productsSlice';

const EditProduct = ({ product, onCancel }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: product.id, name, description, price, available }));
    onCancel(); // Закрыть форму редактирования
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Редактировать продукт</h2>
      <input type="text" value={name} placeholder="Имя" onChange={(e) => setName(e.target.value)} required />
      <input type="text" value={description} placeholder="Описание" onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" value={price} placeholder="Цена" onChange={(e) => setPrice(e.target.value)} required />
      <label>
        Доступен:
        <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} />
      </label>
      <button type="submit">Обновить</button>
      <button type="button" onClick={onCancel}>Отмена</button>
    </form>
  );
};

export default EditProduct;
