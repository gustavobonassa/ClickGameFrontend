import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CoinsCount = styled.div`
  margin-bottom: 30px;
  font-weight: bold;
  display: flex;

  span {
    font-size: 50px;
    text-align: center;
    line-height: 50px;
    margin-left: 10px;
  }
`;

const MenuTop = styled.div`
  top: 10px;
  position: absolute;
`;

export { Container, CoinsCount, MenuTop };
