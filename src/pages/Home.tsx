import styled from "styled-components";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <Container>
      <Categories />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    /* background-color: green; */
    flex-direction: column;
  }
`;
export default Home;
