const getProductCondition = (condition) => {
  return condition === 'new' ? 'Nuevo' : 'Usado';
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getProductCondition,
};
