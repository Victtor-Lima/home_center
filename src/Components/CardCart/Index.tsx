import * as S from "./Styled";
import { ICard } from "../../typesProject/types";
import ButtonDelete from "../ButtonDelete/Index";
import {
  addUnit,
  removeUnit,
} from "../../utilityFunctions/quantityManipulation";
import subtracao from "../../img/subtracao.svg";
import adicao from "../../img/adicao.svg";
import { useLogin } from "../../context/LoginContext";

const CardCart = ({ product }: ICard) => {
  const { loggedUser, cart, setCart } = useLogin();

  if (cart === null) return "carregando...";
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
            onClick={() => removeUnit(loggedUser, product, cart, setCart)}
          >
            <S.IconControl src={subtracao} alt="" />
          </S.ButtonControllUnits>
          <S.Units>{product.amount}</S.Units>
          <S.ButtonControllUnits
            onClick={() => addUnit(loggedUser, product, cart, setCart)}
          >
            <S.IconControl src={adicao} alt="" />
          </S.ButtonControllUnits>
        </S.ContainerUnits>
        <ButtonDelete
          product={product}
          arrState={[cart, setCart]}
          nameList="cart"
        >
          Remover
        </ButtonDelete>
      </S.ContainerContent>
    </S.ContainerCardCart>
  );
};

export default CardCart;
