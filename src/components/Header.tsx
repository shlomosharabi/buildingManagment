import styled from "styled-components";

const Header = () => {
  const screenWidth = window.innerWidth;
  return (
    <Container>
      <TitleContainer>
        <Title>הצנחנים 14</Title>
      </TitleContainer>
      {screenWidth > 768 ? (
        <PersonalAreaIcon src="src/assets/img/user.png" />
      ) : (
        <MobileMenu src="src/assets/img/menu-bar.png" />
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background-color: #2ba2e2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PersonalAreaIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const MobileMenu = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const Title = styled.h1`
  margin-left: 50px;
  @media (max-width: 768px) {
    font-size: medium;
  }
`;

export default Header;
