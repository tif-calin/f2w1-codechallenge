export const toLastNames = arr => {
  return arr.map(p => `${p.firstName} ${p.lastName}`);
};

export const addValues = arr => {
  return arr.reduce((acc, num) => acc + num, 0);
};

export const addPurchases = arr => {
  return arr.reduce((acc, item) => acc + item.purchasePrice, 0);
};

export const countNumberOfElements = arr => {
  return arr.reduce((acc, num) => ++acc, 0);
};

export const returnNames = arr => {
  return arr.reduce((acc, val) => [...acc, val.name], []);
};