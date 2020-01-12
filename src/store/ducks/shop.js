export const Types = {
  ADD_BOT: 'shop/ADD_BOT',
};

const INITIAL_STATE = {
  bot: {
    quantity: parseInt(localStorage.getItem("bot:quantity")) || 0,
    clicks_per_unity: 1,
    value: parseInt(localStorage.getItem("bot:value")) || 100,
  },
};

export default function shop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_BOT:
      const quantity = state.bot.quantity + 1;
      const value = state.bot.value += 100;
      localStorage.setItem("bot:quantity", quantity);
      localStorage.setItem("bot:value", value);
      return { ...state, bot: { quantity, value, clicks_per_unity: 1 } };
    default:
      return state;
  }
}

export const Creators = {
  addBot: () => ({
    type: Types.ADD_BOT,
  }),
};
