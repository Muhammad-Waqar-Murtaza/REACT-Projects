import { useContext } from "react";
import CartIcon from "./CartIcon";
import { cartContext } from "../store/Context";

const HeaderCartButton = (props) => {

    const cartCtx = useContext(cartContext)

    const cartNumberItems = cartCtx.items.reduce((currNum, item)=>{
        return currNum + item.amount
    }, 0)
        

    return (
        <button className="button" onClick={props.onClick}>
            <span className="icon">
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className="badge">{cartNumberItems}</span>
        </button>
    );
}
 
export default HeaderCartButton;