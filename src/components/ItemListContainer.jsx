import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import ItemList from './ItemList';
import '../styles/ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { categoria } = useParams(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let q;
        if (categoria) {
          // Si hay categoría en la URL, filtramos los productos
          q = query(collection(db, 'productos'), where('categoria', '==', categoria));
        } else {
          // Si no hay categoría, mostramos todos los productos
          q = collection(db, 'productos');
        }
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
      } catch (error) {
        console.log('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoria]);

  return (
    <div className="item-list-container">
      <h1 className="neon-text">Productos en {categoria ? categoria : 'todas las categorías'}</h1>
      {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
