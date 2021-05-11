import { returnTen, findMax, totalSum, grandTotal, salesData } from './for-each.js';

test('returnTen should return the last 10 characters of a string as an array', () => {
  expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
  expect(returnTen('world')).toStrictEqual(['w','o','r','l','d']);
});

test('findMax takes in a matrix of positive numbers and returns the number with the highest value', () => {
  expect(findMax([[13,24,24,2], [2,5,6], [2,3]])).toStrictEqual(24);
});

test('totalSum takes in a matrix of positive numbers and returns the sum of all the numbers', () => {
  expect(totalSum([[13,24,24,2], [2,5,6], [2,3]])).toStrictEqual(81);
  expect(totalSum([])).toStrictEqual(0);
});

test('It should create an object of data for each store', () => {
  const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

  expect(salesData(cookieStores)).toStrictEqual([88, 153, 252, 286, 139, 161, 145, 232, 276, 207, 161, 169]);
});

test('salesData function', () => {
  const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

  expect(salesData(hoursOpen, grandTotal(cookieStores))).toStrictEqual([
    { sales: '88 cookies', time: '9 a.m.' },
    { sales: '153 cookies', time: '10 a.m.' },
    { sales: '252 cookies', time: '11 a.m.' },
    { sales: '286 cookies', time: '12 p.m.' },
    { sales: '139 cookies', time: '1 p.m.' },
    { sales: '161 cookies', time: '2 p.m.' },
    { sales: '145 cookies', time: '3 p.m.' },
    { sales: '232 cookies', time: '4 p.m.' },
    { sales: '276 cookies', time: '5 p.m.' },
    { sales: '207 cookies', time: '6 p.m.' },
    { sales: '161 cookies', time: '7 p.m.' },
    { sales: '169 cookies', time: '8 p.m.' }
  ]);
  expect(salesData(hoursOpen, grandTotal(cookieStores)).length).toStrictEqual(hoursOpen.length);
});