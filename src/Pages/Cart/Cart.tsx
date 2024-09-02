import * as S from "./Styled";
import CardCart from "../../components/CardCart/Index";
import { somar, total } from "../../utilityFunctions/quantityManipulation";
import { useLogin } from "../../context/LoginContext";

const Cart = () => {
  const { cart } = useLogin();

  return (
    <S.ContainerCart>
      <S.CartTitle>Carrinho</S.CartTitle>
      <S.CartListProducts>
        {cart?.map((item) => (
          <S.Product key={item.id}>
            <CardCart product={item} />
          </S.Product>
        ))}
      </S.CartListProducts>
      <S.CartSummary>
        <h3>Resumo</h3>
        <S.SummaryList>
          <S.SummaryItem>
            <p>Quantidade:</p>
            <span>{cart ? somar(cart) : 0}</span>
          </S.SummaryItem>
          <S.SummaryItem>
            <p>Subtotal:</p>
            <span>{cart ? total(cart) : 0}</span>
          </S.SummaryItem>
          <S.SummaryItem>
            <p>Frete:</p>
            <span>Gratis</span>
          </S.SummaryItem>
          <S.SummaryItem>
            <p>Total:</p>
            <span>{cart ? total(cart) : 0}</span>
          </S.SummaryItem>
        </S.SummaryList>
        <button>Finalizar Perdido</button>
      </S.CartSummary>
    </S.ContainerCart>
  );
};

export default Cart;
