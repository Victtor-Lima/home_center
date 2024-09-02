import { Link } from "react-router-dom";
import * as S from "./Styled";
import { SearchByCategory } from "../../typesProject/types";
import { normalizeString } from "../../utilityFunctions/normalizeString";

const NavSidebar = ({ data }: { data: SearchByCategory }) => {
  if (data === null) return;
  return (
    <section>
      {data.available_filters
        .filter((filter) => filter.id === "category")
        .map((filter) => (
          <div key={filter.id}>
            <S.CategorieTitle>{filter.name}</S.CategorieTitle>
            <ul>
              {filter.values.map((value) => (
                <S.CategorieOption key={value.id}>
                  <Link
                    to={`/home_center/${normalizeString(value.name)}/${
                      value.id
                    }`}
                  >
                    <span>{value.name}</span>
                  </Link>
                </S.CategorieOption>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default NavSidebar;
