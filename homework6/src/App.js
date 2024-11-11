import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct';

const App = () => {
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <Provider store={store}>
      <div>
        <h1>Каталог продуктов</h1>
        <AddProduct />
        {editingProduct ? (
          <EditProduct 
            product={editingProduct} 
            onCancel={() => setEditingProduct(null)} 
          />
        ) : (
          <ProductList setEditingProduct={setEditingProduct} />
        )}
      </div>
    </Provider>
  );
};

export default App;
