import * as S from "./Styled";
import { ICardCart } from "../../typesProject/types";
import ButtonDelete from "../ButtonDelete/Index";
import {
  addUnit,
  removeUnit,
} from "../../utilityFunctions/quantityManipulation";
import subtracao from "../../img/subtracao.svg";
import adicao from "../../img/adicao.svg";

const CardCart = ({ product, arrCart }: ICardCart) => {
  const [cart, setCart] = arrCart;

  return (
    <S.ContainerCardCart>
      <S.ImgProduct src={product.thumbnail} alt={product.title} />
      <S.ContainerContent>
        <h3>{product.title}</h3>
        <S.PriceFinalCart>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </S.PriceFinalCart>
        <S.ContainerUnits>
          <S.ButtonControllUnits
            onClick={() => removeUnit(product, cart, setCart)}
          >
            <S.IconControl src={subtracao} alt="" />
          </S.ButtonControllUnits>
          <S.Units>{product.amount}</S.Units>
          <S.ButtonControllUnits
            onClick={() => addUnit(product, cart, setCart)}
          >
            <S.IconControl src={adicao} alt="" />
          </S.ButtonControllUnits>
        </S.ContainerUnits>
        <ButtonDelete arrParams={[product, [cart, setCart], "cart"]}>
          Remover
        </ButtonDelete>
      </S.ContainerContent>
    </S.ContainerCardCart>
  );
};

export default CardCart;
