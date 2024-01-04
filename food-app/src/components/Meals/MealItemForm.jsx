import { useRef, useState } from "react";
import Input from "../Ui/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const refItem = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const cartTotalAmount = refItem.current.value;
    const cartTotalAmountNumber = +cartTotalAmount;

    if (
      cartTotalAmount.length === 0 ||
      cartTotalAmountNumber < 1 ||
      cartTotalAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddCart(cartTotalAmountNumber)
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        ref={refItem}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount between 1-5</p>}
    </form>
  );
};

export default MealItemForm;
