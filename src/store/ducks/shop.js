export const Types = {
  BUY_ITEM: 'shop/BUY_ITEM',
};

const INITIAL_STATE = {
  botArm: {
    quantity: parseInt(localStorage.getItem("botArm:quantity")) || 0,
    clicks_per_unity: 1,
    value: parseInt(localStorage.getItem("botArm:value")) || 100,
    price_per_buy: 25
  },
  bot: {
    quantity: parseInt(localStorage.getItem("bot:quantity")) || 0,
    clicks_per_unity: 10,
    value: parseInt(localStorage.getItem("bot:value")) || 1500,
    price_per_buy: 300
  },
  factory: {
    quantity: parseInt(localStorage.getItem("factory:quantity")) || 0,
    clicks_per_unity: 100,
    value: parseInt(localStorage.getItem("factory:value")) || 15000,
    price_per_buy: 1000
  },
  ia: {
    quantity: parseInt(localStorage.getItem("ia:quantity")) || 0,
    clicks_per_unity: 1000,
    value: parseInt(localStorage.getItem("ia:value")) || 100000,
    price_per_buy: 5000
  },
  alien: {
    quantity: parseInt(localStorage.getItem("alien:quantity")) || 0,
    clicks_per_unity: 10000,
    value: parseInt(localStorage.getItem("alien:value")) || 1500000,
    price_per_buy: 100000
  },
  planet: {
    quantity: parseInt(localStorage.getItem("planet:quantity")) || 0,
    clicks_per_unity: 100000,
    value: parseInt(localStorage.getItem("planet:value")) || 5000000,
    price_per_buy: 250000
  },
  space: {
    quantity: parseInt(localStorage.getItem("space:quantity")) || 0,
    clicks_per_unity: 1000000,
    value: parseInt(localStorage.getItem("space:value")) || 100000000,
    price_per_buy: 2500000
  },
  galaxy: {
    quantity: parseInt(localStorage.getItem("planet:quantity")) || 0,
    clicks_per_unity: 10000000,
    value: parseInt(localStorage.getItem("planet:value")) || 500000000,
    price_per_buy: 50000000
  },
};

export default function shop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.BUY_ITEM:
      if (action.payload.item === "botArm") {
        const quantity = state.botArm.quantity + 1;
        const value = state.botArm.value += state.botArm.price_per_buy;
        localStorage.setItem("botArm:quantity", quantity);
        localStorage.setItem("botArm:value", value);
        return { ...state, botArm: { ...state.botArm, quantity, value } };
      } else if (action.payload.item === "bot") {
        const quantity = state.bot.quantity + 1;
        const value = state.bot.value += state.bot.price_per_buy;
        localStorage.setItem("bot:quantity", quantity);
        localStorage.setItem("bot:value", value);
        return { ...state, bot: { ...state.bot, quantity, value } };
      } else if (action.payload.item === "factory") {
        const quantity = state.factory.quantity + 1;
        const value = state.factory.value += state.factory.price_per_buy;
        localStorage.setItem("factory:quantity", quantity);
        localStorage.setItem("factory:value", value);
        return { ...state, factory: { ...state.factory, quantity, value } };
      } else if (action.payload.item === "ia") {
        const quantity = state.ia.quantity + 1;
        const value = state.ia.value += state.ia.price_per_buy;
        localStorage.setItem("ia:quantity", quantity);
        localStorage.setItem("ia:value", value);
        return { ...state, ia: { ...state.ia, quantity, value } };
      } else if (action.payload.item === "alien") {
        const quantity = state.alien.quantity + 1;
        const value = state.alien.value += state.alien.price_per_buy;
        localStorage.setItem("alien:quantity", quantity);
        localStorage.setItem("alien:value", value);
        return { ...state, alien: { ...state.alien, quantity, value } };
      } else if (action.payload.item === "planet") {
        const quantity = state.planet.quantity + 1;
        const value = state.planet.value += state.planet.price_per_buy;
        localStorage.setItem("planet:quantity", quantity);
        localStorage.setItem("planet:value", value);
        return { ...state, planet: { ...state.planet, quantity, value } };
      } else if (action.payload.item === "space") {
        const quantity = state.space.quantity + 1;
        const value = state.space.value += state.space.price_per_buy;
        localStorage.setItem("space:quantity", quantity);
        localStorage.setItem("space:value", value);
        return { ...state, space: { ...state.space, quantity, value } };
      } else if (action.payload.item === "galaxy") {
        const quantity = state.galaxy.quantity + 1;
        const value = state.galaxy.value += state.galaxy.price_per_buy;
        localStorage.setItem("galaxy:quantity", quantity);
        localStorage.setItem("galaxy:value", value);
        return { ...state, galaxy: { ...state.galaxy, quantity, value } };
      }
      return state;
    default:
      return state;
  }
}

export const Creators = {
  buyItem: (item) => ({
    type: Types.BUY_ITEM,
    payload: { item }
  }),
};
