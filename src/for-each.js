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
  const hoursOpen = ['9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];


}

export function salesData(hours, data) {
  
}