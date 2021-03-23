const getCurrency = (currency) => (currency === 'ARS' ? '$' : 'U$S');

const formatAmount = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const getFormatedPrice = (currency, amount) => {
  return `${getCurrency(currency)} ${formatAmount(amount)}`;
};

export default getFormatedPrice;
