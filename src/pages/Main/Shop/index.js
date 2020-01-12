import React from 'react';
import { Container, Background, Content, Header, Title, ShopCoin, Body } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CoinsActions } from '../../../store/ducks/coins';
import { Creators as ShopActions } from '../../../store/ducks/shop';
import coin from '../../../assets/images/coin.svg';
import close from '../../../assets/images/close.svg';
import ShopItem from './ShopItem';
import bot from '../../../assets/images/bot.svg'

class Shop extends React.Component {
  buyBot = () => {
    const { botInfo } = this.props;
    if (botInfo.value <= this.props.coinsInfo.coins) {
      this.props.removeCoins(botInfo.value);
      this.props.changeCoinsPerSecond(botInfo.clicks_per_unity);
      this.props.addBot();
    }
  }

  render() {
    const coins = this.props.coinsInfo.coins;
    return (
      <Container>
        <Content>
          <Header>
            <Title>
              <span>Shop</span>
            </Title>
            <ShopCoin className="ui teal label"><img src={coin} alt="Coin" width="20" /><span>{coins} coins</span></ShopCoin>
            <button onClick={() => { this.props.closeShopModal() }}>
              <img src={close} alt="Close" width="20" />
            </button>
          </Header>
          <Body>
            <ShopItem
              title="Bot"
              description="Buy this bot to +1 click per second"
              quantity={this.props.botInfo.quantity}
              value={this.props.botInfo.value}
              image={bot}
              onClick={() => { this.buyBot() }}
            />
          </Body>
        </Content>
        <Background onClick={() => { this.props.closeShopModal() }} />
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  coinsInfo: state.coins,
  botInfo: state.shop.bot,
});

const mapDispathToProps = dispatch =>
  bindActionCreators({ ...CoinsActions, ...ShopActions }, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(Shop);
