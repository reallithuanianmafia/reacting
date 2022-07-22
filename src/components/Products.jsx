import React, { useContext } from 'react';
import CartContext from '../CartContext';
import Card from './Card';

function Product() {

    const { items } = useContext(CartContext);
    console.log(items);

    const products = [
        { id: 1, name: 'Gucci shirt', price: 80},
        { id: 2, name: 'Zara trousers', price: 90},
        { id: 3, name: 'DG hoodie', price: 100},
        { id: 4, name: 'New Yorker', price: 55},
        
      ];
    return (
        <div className='products-list'>
            {products.map((product) => 
                <Card name={product.name} price={product.price} key={product.id} id={product.id} />
            )}
        </div>
    );
}

export default Product;