import React from 'react';
import { Container, CoinsCount, MenuTop } from './styles';
import Button from '../../Components/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CoinsActions } from '../../store/ducks/coins';
import { Creators as ShopActions } from '../../store/ducks/shop';
import Shop from './Shop';
import coin from '../../assets/images/coin.svg';

class Main extends React.Component {
  componentDidMount() {
    this.coinPerSecond();
  }

  coinPerSecond = async () => {
    await setInterval(() => this.props.addCoinsPerSecond(), 1000);
  }

  addCoin = () => {
    this.props.addCoinsDefault();
  }

  render() {
    const coins = this.props.coinsInfo.coins;
    console.log(this.props)
    return (
      <Container>
        <MenuTop>
          <Button onClick={() => { this.props.openShopModal() }}>Shop</Button>
        </MenuTop>
        <CoinsCount>
          <img src={coin} alt="Coin" width="50" />
          <span>
            {coins}
          </span>
        </CoinsCount>
        <Button onClick={() => this.addCoin()}>Click me</Button>
        {this.props.shop_modal && (<Shop />)}
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  coinsInfo: state.coins,
  shop_modal: state.coins.shop_modal,
  botInfo: state.shop.bot,
});

const mapDispathToProps = dispatch =>
  bindActionCreators({ ...CoinsActions, ...ShopActions }, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(Main);
