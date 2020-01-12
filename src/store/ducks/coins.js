export const Types = {
  ADD_DEFAULT: 'coins/ADD_DEFAULT',
  ADD_COINS_PER_SECOND: 'coins/ADD_COINS_PER_SECOND',
  CHANGE_COINS_PER_SECOND: 'coins/CHANGE_COINS_PER_SECOND',
  OPEN_SHOP_MODAL: 'coins/OPEN_SHOP_MODAL',
  CLOSE_SHOP_MODAL: 'coins/CLOSE_SHOP_MODAL',
  REMOVE_COINS: 'coins/REMOVE_COINS',
};

const INITIAL_STATE = {
  coins: parseInt(localStorage.getItem("coin")) || 0,
  coins_per_click: 1,
  coins_per_second: parseInt(localStorage.getItem("coins_per_second")) || 0,
  shop_modal: false,
};

export default function coins(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_DEFAULT:
      const coins = state.coins + state.coins_per_click;
      localStorage.setItem("coin", coins);
      return { ...state, coins };
    case Types.ADD_COINS_PER_SECOND:
      const coinsPerSecond = state.coins + state.coins_per_second;
      localStorage.setItem("coin", coinsPerSecond);
      return { ...state, coins: coinsPerSecond };
    case Types.CHANGE_COINS_PER_SECOND:
      const newCoinsPerSecond = state.coins_per_second + action.payload.coins_per_second;
      localStorage.setItem("coins_per_second", newCoinsPerSecond);
      return { ...state, coins_per_second: newCoinsPerSecond };
    case Types.OPEN_SHOP_MODAL:
      return { ...state, shop_modal: true };
    case Types.CLOSE_SHOP_MODAL:
      return { ...state, shop_modal: false };
    case Types.REMOVE_COINS:
      const removeCoins = state.coins - action.payload.coins;
      localStorage.setItem("coin", removeCoins);
      return { ...state, coins: removeCoins };
    default:
      return state;
  }
}

export const Creators = {
  addCoinsDefault: () => ({
    type: Types.ADD_DEFAULT,
  }),
  addCoinsPerSecond: () => ({
    type: Types.ADD_COINS_PER_SECOND,
  }),
  changeCoinsPerSecond: (coins_per_second) => ({
    type: Types.CHANGE_COINS_PER_SECOND,
    payload: { coins_per_second }
  }),
  openShopModal: () => ({
    type: Types.OPEN_SHOP_MODAL,
  }),
  closeShopModal: () => ({
    type: Types.CLOSE_SHOP_MODAL,
  }),
  removeCoins: (coins) => ({
    type: Types.REMOVE_COINS,
    payload: { coins }
  }),
};
