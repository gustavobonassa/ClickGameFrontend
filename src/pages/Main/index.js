import React from 'react';
import { Container, CoinsCount, MenuTop } from './styles';
import Button from '../../Components/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CoinsActions } from '../../store/ducks/coins';
import { Creators as ShopActions } from '../../store/ducks/shop';
import Shop from './Shop';
import coin from '../../assets/images/coin.svg';
import numberFormat from '../../util/numberFormat';

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
    const coins_per_second = this.props.coinsInfo.coins_per_second;
    return (
      <Container>
        <MenuTop>
          <Button onClick={() => { this.props.openShopModal() }}>Shop</Button>
        </MenuTop>
        <CoinsCount>
          <img src={coin} alt="Coin" width="50" />
          <span>
            {numberFormat(coins)}
          </span>
        </CoinsCount>
        <span>{numberFormat(coins_per_second)} coins/second</span>
        <Button onClick={() => this.addCoin()}>Click me</Button>
        {this.props.shop_modal && (<Shop />)}
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  coinsInfo: state.coins,
  shop_modal: state.coins.shop_modal,
  shop: state.shop,
});

const mapDispathToProps = dispatch =>
  bindActionCreators({ ...CoinsActions, ...ShopActions }, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(Main);
