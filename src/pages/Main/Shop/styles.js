import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: #000;
  opacity: 0.2;
  z-index: 5;
`;

const Content = styled.div`
  max-height: 500px;
  height: 100%;
  max-width: 500px;
  width: 100%;
  color: #000;
  border-radius: 15px;
  padding: 15px;
  position: absolute;
  background: #fff;
  z-index: 10;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    background: transparent;
  }
`;

const Title = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const ShopCoin = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 78%;
  display: flex;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-top: 10px;
  flex-direction: column;
`;

const MenuShop = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 10px;

  button {
    width: 50%;
  }
`;


export { Container, Background, Content, Header, Title, ShopCoin, Body, MenuShop };
