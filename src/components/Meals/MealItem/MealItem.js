import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartItemContext from "../../Context/CartItemContext";

const MealItem = (props) => {

  const cardItemCtx = useContext(CartItemContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    //get the amount from the form and send it to the cardItemContext to reducer function
    cardItemCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li key={props.id} className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
