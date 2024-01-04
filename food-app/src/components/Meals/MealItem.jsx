import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import { cartContext } from "../store/Context";
const MealItem = (props) => {

    const cartCtx = useContext(cartContext)
    const price = `$${props.price.toFixed(2)}`;
    const addToCart = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        })
    }
  
    return (
        <li className='meal'>
        <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.description}</div>
            <div className='price'>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddCart={addToCart}/>
        </div>
        </li>
    );
}
 
export default MealItem;