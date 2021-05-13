import { test, expect } from '@jest/globals';
import { addPurchases, addValues, toLastNames } from './cc12.js';

/*
Main:
  toEqual -> to be equivalent (like it can be a clone, but not actually the same place in the memory). It uses Object.is
  toBe -> to be the actual same thing (like same address in the memory)
  toStrictEqual -> a newer version of toEqual. it makes sure the objects have not only the same structure but also the same type

Other:
  toContain
*/

test('toLastNames', () => {
  const input = [{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }];
  const expected = ['Jane Doe', 'James Bond'];

  expect(toLastNames(input)).toStrictEqual(expected);
});

test('addValues', () => {
  const input = [4, 3, 2, 1];
  const expected = 10;

  expect(addValues(input)).toStrictEqual(expected);
});

test('addPurchases', () => {
  const input = [{ item: 'basketball', purchasePrice: 16.99 }, { item: 'dance shoes', purchasePrice: 48.67 }];
  const expected = 65.66;

  expect(addPurchases(input)).toStrictEqual(expected);
});