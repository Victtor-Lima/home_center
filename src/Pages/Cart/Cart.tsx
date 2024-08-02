import React from "react";
import * as S from "./Styled";
import CardCart from "../../components/CardCart/Index";
import { getLocal } from "../../utilityFunctions/localstorage_funcs";
import { IProduct } from "../../typesProject/types";

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
    <S.ContainerCart>
      <S.CartTitle>Carrinho</S.CartTitle>
      <S.CartListProducts>
        {cart.map((item) => (
          <S.Product key={item.id}>
            <CardCart product={item} arrCart={[cart, setCart]} />
          </S.Product>
        ))}
      </S.CartListProducts>
      <S.CartSummary>
        <h3>Resumo</h3>
        <p> Valor Total:</p>
        <span>{total(cart)}</span>
      </S.CartSummary>
    </S.ContainerCart>
  );
};

export default Cart;
