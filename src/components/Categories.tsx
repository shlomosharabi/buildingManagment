import { CATEGORIES } from "../constants/categories";
import styled from "styled-components";
import Category from "./Category";

const Categories = () => {
  return (
    <>
      <CategoriesContainer>
        {CATEGORIES.map((c) => {
          return (
            <Category
              key={c.label}
              title={c.label}
              bacground={c.icon}
              path={c.path}
            />
          );
        })}
      </CategoriesContainer>
    </>
  );
};
const CategoriesContainer = styled.div`
  display: grid;
  margin: 10%;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-content: start;

  @media (max-width: 768px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 3fr);
    gap: 20px;
  }
`;

export default Categories;
