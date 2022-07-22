import React, {useContext} from 'react';
import CartContext from '../CartContext';
function Navbar() {

    const { items } = useContext(CartContext);
    return (
        <div>
            <div>Shopping Cart: {items.length}</div>
        </div>
    );
}

export default Navbar;