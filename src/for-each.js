export function returnTen(str) {
  return str.split('').slice(-10);
}

export function findMax(matrix) {
  return matrix.reduce((acc, val) => Math.max(...val, acc), 0);
}

export function totalSum(matrix) {
  return matrix.reduce((acc, val) => acc + val.reduce((a, v) => a + Number(v), 0), 0);
}

export function grandTotal(stores) {
  const totals = new Array(stores[0].length).fill(0);
  stores.forEach(store => {
    store.forEach((hourly, index) => totals[index] += hourly);
  });
  return totals;
}

export function salesData(hours, data) {
  const storeData = [];
  hours.forEach((hour, index) => storeData.push({sales: `${data[index]} cookies`, time: hour}));
  return storeData;
}