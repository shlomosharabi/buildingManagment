import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type CategoryType = {
  title: string;
  bacground: string;
  path: string;
};

const Category = ({ title, bacground, path }: CategoryType) => {
  const navigate = useNavigate();

  return (
    <Container>
      <CategoryContainer
        style={{ backgroundImage: `url(${bacground})` }}
        onClick={() => navigate(path)}
      >
        {title}
      </CategoryContainer>
      <span>{title}</span>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;
const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  width: 250px;
  height: 250px;
  cursor: pointer;
  border: 5px solid red;
  border-radius: 8px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    background-color: rosybrown;
  }
`;

export default Category;
