import { IoIosRemoveCircle, IoMdAddCircle } from "react-icons/io";
import * as S from "./Styled";
import { IProduct } from "../../Utility_functions/types_project/types";
import {
  addUnit,
  reduceUnit,
  remove,
} from "../../Utility_functions/quantityManipulation";
import { ButtonDelete } from "../ButtonDelete/Styled";
import { MdDelete } from "react-icons/md";

type ICardCart = {
  item: IProduct;
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
};

const CardCart = ({ item, cart, setCart }: ICardCart) => {
  return (
    <S.ContainerCardCart>
      <img src={item.thumbnail} alt={item.title} />
      <h3>{item.title}</h3>
      <S.ContainerUnits>
        <S.ButtonControllUnits onClick={() => reduceUnit(item, cart, setCart)}>
          <IoIosRemoveCircle size="1.6em" />
        </S.ButtonControllUnits>
        <span>{item.amount}</span>
        <S.ButtonControllUnits onClick={() => addUnit(item, cart, setCart)}>
          <IoMdAddCircle size="1.6em" />
        </S.ButtonControllUnits>
      </S.ContainerUnits>
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
      <ButtonDelete onClick={() => remove(item, [cart, setCart], "cart")}>
        <MdDelete size="1.6em" />
      </ButtonDelete>
    </S.ContainerCardCart>
  );
};

export default CardCart;
