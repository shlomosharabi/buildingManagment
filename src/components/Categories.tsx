import { CATEGORIES } from "../constants/categories";
import styled from "styled-components";
import Category from "./Category";

const Categories = () => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    /* display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 3fr);
    gap: 20px; */
  }
`;
const CategoriesContainer = styled.div`
  width: 50%;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  gap: 10%;

  @media (max-width: 768px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 3fr);
    gap: 20px;
  }
`;

export default Categories;
