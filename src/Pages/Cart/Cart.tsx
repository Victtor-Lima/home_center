import React from "react";
import * as S from "./Styled";
import CardCart from "../../components/CardCart/Index";
import { IProduct } from "../../typesProject/types";
import { getLocal } from "../../utilityFunctions/localstorage_funcs";
import { somar, total } from "../../utilityFunctions/quantityManipulation";

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
        <S.SummaryList>
          <S.SummaryItem>
            <p>Quantidade:</p>
            <span>{somar(cart)}</span>
          </S.SummaryItem>
          <S.SummaryItem>
            <p>Subtotal:</p>
            <span>{total(cart)}</span>
          </S.SummaryItem>
          <S.SummaryItem>
            <p>Frete:</p>
            <span>Gratis</span>
          </S.SummaryItem>
          <S.SummaryItem>
            <p>Total:</p>
            <span>{total(cart)}</span>
          </S.SummaryItem>
        </S.SummaryList>
        <button>Finalizar Perdido</button>
      </S.CartSummary>
    </S.ContainerCart>
  );
};

export default Cart;
