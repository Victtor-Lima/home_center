import { IoIosRemoveCircle, IoMdAddCircle } from "react-icons/io";
import * as S from "./Styled";
import { ICardCart, IProduct } from "../../typesProject/types";
import {
  addUnit,
  reduceUnit,
} from "../../utilityFunctions/quantityManipulation";
import ButtonDelete from "../ButtonDelete/Index";
import { MdDelete } from "react-icons/md";

const CardCart = ({ product, arrCart }: ICardCart) => {
  const [cart, setCart] = arrCart;

  return (
    <S.ContainerCardCart>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <S.ContainerUnits>
        <S.ButtonControllUnits
          onClick={() => reduceUnit(product, cart, setCart)}
        >
          <IoIosRemoveCircle size="1.6em" />
        </S.ButtonControllUnits>
        <span>{product.amount}</span>
        <S.ButtonControllUnits onClick={() => addUnit(product, cart, setCart)}>
          <IoMdAddCircle size="1.6em" />
        </S.ButtonControllUnits>
      </S.ContainerUnits>
      <span>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <span>
        {(product.amount * product.price).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <ButtonDelete arrParams={[product, [cart, setCart], "cart"]}>
        <MdDelete size="1.6em" />
      </ButtonDelete>
    </S.ContainerCardCart>
  );
};

export default CardCart;
