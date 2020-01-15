const numberFormat = (value) =>
  new Intl.NumberFormat('en-US').format(value);

export default numberFormat;
