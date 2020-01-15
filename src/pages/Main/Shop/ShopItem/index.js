import React from 'react';
import { ShopItemStyle, Title, Description, Quantity, Value, Body, ButtonGroup } from './styles';
import coin from '../../../../assets/images/coin.svg';

const ShopItem = (props) => {
  return (
    <ShopItemStyle>
      <div className="image-item">
        <img src={props.image} alt={props.title} />
      </div>
      <Body>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <ButtonGroup>
          <Quantity className="ui blue label">Quantity <span className="detail">{props.quantity}</span></Quantity>
          <Value className="ui image yellow label" onClick={props.onClick}><img src={coin} alt="Coin" width="20px" /><span>{props.value}</span></Value>
        </ButtonGroup>
      </Body>
    </ShopItemStyle>
  )
}

export default ShopItem;
