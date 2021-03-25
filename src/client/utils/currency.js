const getCurrency = (currency) => (currency === 'ARS' ? '$' : 'U$S');

const formatAmount = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const getFormatedPrice = (currency, amount, decimals = 2) => {
  const fixedPrice = `${Number.parseFloat(amount).toFixed(decimals)}`;
  const [integerPart, decimalPart] = fixedPrice.split('.');

  return [`${getCurrency(currency)} ${formatAmount(integerPart)}`, decimalPart];
};

export default getFormatedPrice;
