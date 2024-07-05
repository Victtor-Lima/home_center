import React from "react";
import CardCart from "../Components/CardCart";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { getLocal, setLocal } from "../Utility_functions/localstorage_funcs";
import { IProduct } from "../Utility_functions/types_project/types";
import styles from "../Style/Cart.module.css";

const Cart = () => {
  const [cart, setCart] = React.useState<Array<IProduct>>([]);

  React.useEffect(() => {
    const cartLocal = getLocal("cart");

    if (cartLocal) {
      setCart(cartLocal);
    }
  }, []);

  function addUnit(
    product: IProduct,
    state: IProduct[],
    setState: React.Dispatch<React.SetStateAction<IProduct[]>>
  ) {
    const updateState = state.map((item) => {
      if (item.id === product.id) {
        item.amount += 1;
      }
      return item;
    });
    setState(updateState);
    setLocal("cart", updateState);
  }

  function reduceUnit(
    product: IProduct,
    state: IProduct[],
    setState: React.Dispatch<React.SetStateAction<IProduct[]>>
  ) {
    const updateState = state.map((item) => {
      if (item.id === product.id && item.amount >= 2) {
        item.amount -= 1;
      }
      return item;
    });
    setState(updateState);
    setLocal("cart", updateState);
  }

  function remove(
    product: IProduct,
    state: IProduct[],
    setState: React.Dispatch<React.SetStateAction<IProduct[]>>
  ) {
    const updateState = state.filter((item) => item.id !== product.id);
    setState(updateState);
    setLocal("cart", updateState);
  }

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
            <div className={styles.cart_product_content}>
              <img src={item.thumbnail} alt={item.title} />
              <h3 className={styles.cart_product_title}>{item.title}</h3>
              <div className={styles.container_cart_units}>
                <button
                  onClick={() => reduceUnit(item, cart, setCart)}
                  className={styles.cart_product_btn}
                >
                  <IoIosRemoveCircle size="1.6em" />
                </button>
                <span>{item.amount}</span>
                <button
                  onClick={() => addUnit(item, cart, setCart)}
                  className={styles.cart_product_btn}
                >
                  <IoMdAddCircle size="1.6em" />
                </button>
              </div>
              <span>
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <span>
                {(item.amount * item.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <button
                onClick={() => remove(item, cart, setCart)}
                className={styles.cart_product_btn}
              >
                <MdDelete size="1.6em" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.container_card_total}></div>
    </section>
  );
};

export default Cart;
