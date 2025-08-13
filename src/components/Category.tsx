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
    <Container
      style={{ backgroundImage: `url(${bacground})` }}
      onClick={() => navigate(path)}
    >
      {title}
    </Container>
  );
};
const Container = styled.div`
  background-size: cover;
  width: 200px;
  height: 200px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid red;
  border-radius: 8px;
  @media (max-width: 768px) {
    background-color: rosybrown;
  }
`;

export default Category;
