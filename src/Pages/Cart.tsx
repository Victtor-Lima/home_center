import React from "react";
import CardCart from "../Components/CardCart/Index";
import { getLocal } from "../Utility_functions/localstorage_funcs";
import { IProduct } from "../Utility_functions/types_project/types";
import styles from "../Style/Cart.module.css";
import {
  addUnit,
  reduceUnit,
  remove,
} from "../Utility_functions/quantityManipulation";
import ButtonDelete from "../Components/ButtonDelete/Index";

function total(cart: IProduct[]) {
  const priceTotal: string = cart
    .map((item) => item.price * item.amount)
    .reduce((acum, value) => acum + value, 0)
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  return priceTotal;
}

const Cart = () => {
  const [cart, setCart] = React.useState<Array<IProduct>>([]);

  React.useEffect(() => {
    const cartLocal = getLocal("cart");

    if (cartLocal) {
      setCart(cartLocal);
    }
  }, []);

  return (
    <section className={styles.contianer_cart_products}>
      <h1 className={styles.cart_title}>Carrinho</h1>
      <div className={styles.container_cart_header}>
        <ul className={styles.cart_header_list}>
          <li>Produto</li>
          <li>Quantidade</li>
          <li>Preço</li>
          <li>Total</li>
        </ul>
      </div>
      <ul className={styles.cart_list_products}>
        {cart.map((item) => (
          <li key={item.id} className={styles.cart_list_product}>
            <CardCart item={item} cart={cart} setCart={setCart} />
          </li>
        ))}
      </ul>
      <div className={styles.container_card_total}>
        <h3>Resumo</h3>
        <p> Valor Total:</p>
        <span>{total(cart)}</span>
      </div>
    </section>
  );
};

export default Cart;
