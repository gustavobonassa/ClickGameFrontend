import styled from "styled-components";

const ShopItemStyle = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  padding: 5px;

`;

const Title = styled.span`
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  height: 20px;
`;
const Description = styled.div`
  width: 100%;
`;
const Quantity = styled.div`

`;
const Value = styled.button`

`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 5px;
  }
`;


export { ShopItemStyle, Title, Description, Quantity, Value, Body, ButtonGroup };
