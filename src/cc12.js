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

export const reversedString = str => {
  return str.split('').reduceRight((acc, val) => acc + val, '');
};

export const countNumberOfChildren = arr => {
  return arr.reduce((acc, val) => acc + ((val.children) ? val.children.length : 0), 0);
};

export const averageNums = arr => {
  const objAcc = arr.reduce((acc, val) => {
    return { count: ++acc.count, sum: acc.sum + val };
  }, { count: 0, sum: 0 });

  return objAcc.sum / objAcc.count;
};

const isPrime = (value) => {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};

export const countPrimeNumbers = arr => {
  return arr.reduce((acc, val) => ((isPrime(val)) ? ++acc : acc), 0);
};

export const extractState = (obj, str) => {
  const match = obj.stats.reduce((acc, val) => [...acc, ((val.stat.name === str) ? val : null)], []).filter(val => val);
  return (match.length) ? match[0] : null;
};