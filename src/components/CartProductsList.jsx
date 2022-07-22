import { useContext } from "react"
import CartContext from "../CartContext"

const CartProductsList = () => {
    
    const { items,removeCartItems } = useContext(CartContext);


    return(
        <div>
            <div>
                <button onClick={()=> removeCartItems()}>Clear Cart</button>
            </div>
        {
            items.map(item => <div>{item.name}</div>)
        }
        </div>
    )
}

export default CartProductsList;