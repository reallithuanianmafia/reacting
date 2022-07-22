import React, {createContext, useContext, useState} from 'react';
import CartContext, { CartProvider } from '../CartContext';

function Card({id,name, price}) {

    const { addToCart } = useContext(CartContext);
    return(
        <>
            <div className='product-card'>
                <span>{name} </span>
                <span>{price} </span>
                <button onClick={()=> addToCart(id,name,price)}>Add to Cart</button>
                <button onClick={()=> console.log(id + name + price)}>Console Log</button>
            </div>
        </>
    )
}

export default Card;