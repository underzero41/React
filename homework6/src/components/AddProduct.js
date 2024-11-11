import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './productsSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      dispatch(addProduct({ id: Date.now(), name, description, price: Number(price), available }));
      setName('');
      setDescription('');
      setPrice('');
      setAvailable(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Добавить продукт</h2>
      <input type="text" value={name} placeholder="Имя" onChange={(e) => setName(e.target.value)} required />
      <input type="text" value={description} placeholder="Описание" onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" value={price} placeholder="Цена" onChange={(e) => setPrice(e.target.value)} required />
      <label>
        Доступен:
        <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} />
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddProduct;
