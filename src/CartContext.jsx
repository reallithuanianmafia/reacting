import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [items, setItems] = useState([]);

    //const addToCart = () => {
    //    setItems((prevState) => ...prevState, {name, price});
    //}

    const addToCart = (id,name,price) => {
        setItems((prevState) => [...prevState, {id,name,price}]);
    }

    const removeCartItems = () => {
        setItems([]);
    }

    return(
        <CartContext.Provider value = {{items, addToCart,removeCartItems}}>{children}</CartContext.Provider>
    )
}

export default CartContext;