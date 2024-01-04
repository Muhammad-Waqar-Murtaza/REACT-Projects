import { useContext } from "react";
import Modal from "../Ui/Modal";
import { cartContext } from "../store/Context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);

  const hasItems = cartCtx.items.length > 0
  const cartAmount = cartCtx.totalAmount.toFixed(2);

  const addHandler = (item) => {
    cartCtx.addItem({...item, amount:1})
  }

  const removeHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const orderHandler = () => {
    alert("Thank you for the order")
  }

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onAdd={addHandler.bind(null, item)}
          onRemove={removeHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>${cartAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button onClick={orderHandler} className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
