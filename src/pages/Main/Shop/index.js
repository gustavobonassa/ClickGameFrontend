import React from 'react';
import { Container, Background, Content, Header, Title, ShopCoin, Body, MenuShop } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CoinsActions } from '../../../store/ducks/coins';
import { Creators as ShopActions } from '../../../store/ducks/shop';
import coin from '../../../assets/images/coin.svg';
import close from '../../../assets/images/close.svg';
import ShopItem from './ShopItem';
import numberFormat from '../../../util/numberFormat';
import getShopItems from './ShopItem/shopItems';
import './styles.css';

import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

class Shop extends React.Component {
  state = {
    selectedShop: "cps",
  }

  buy = (item) => {
    const { shop } = this.props;
    if (shop[item].value <= this.props.coinsInfo.coins) {
      this.props.removeCoins(shop[item].value);
      this.props.changeCoinsPerSecond(shop[item].clicks_per_unity);
      this.props.buyItem(item);
    } else {
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "500",
        "timeOut": "1000",
        "extendedTimeOut": "500",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      toastr.clear()
      toastr.error("You do not have enough money", "Shop error");
    }
  }

  render() {
    const coins = this.props.coinsInfo.coins;
    const { selectedShop } = this.state;
    const shopItems = getShopItems(this.props);
    return (
      <Container>
        <Content className="modal">
          <Header>
            <Title>
              <span>Shop</span>
            </Title>
            <ShopCoin className="ui teal label"><img src={coin} alt="Coin" width="20" /><span>{numberFormat(coins)} coins</span></ShopCoin>
            <button onClick={() => { this.props.closeShopModal() }}>
              <img src={close} alt="Close" width="20" />
            </button>
          </Header>
          <MenuShop>
            <button class={`ui inverted orange button ${selectedShop === 'cps' && 'active'}`} onClick={() => { this.setState({ selectedShop: 'cps' }) }}>Clicks per second shop</button>
            <button class={`ui inverted orange button ${selectedShop === 'mc' && 'active'}`} onClick={() => { this.setState({ selectedShop: 'mc' }) }}>Mouse click shop</button>
          </MenuShop>
          <Body>
            {selectedShop === 'cps' ? (
              shopItems.map(item => (
                <ShopItem
                  title={item.title}
                  description={item.description}
                  quantity={item.quantity}
                  value={numberFormat(item.value)}
                  image={item.image}
                  onClick={() => { this.buy(item.click) }}
                />
              ))
            ) : 'teste'}
          </Body>
        </Content>
        <Background onClick={() => { this.props.closeShopModal() }} />
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  coinsInfo: state.coins,
  shop: state.shop,
});

const mapDispathToProps = dispatch =>
  bindActionCreators({ ...CoinsActions, ...ShopActions }, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(Shop);
