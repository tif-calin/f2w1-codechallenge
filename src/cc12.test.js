import { test, expect } from '@jest/globals';
import { addPurchases, addValues, averageNums, countNumberOfChildren, countNumberOfElements, countPrimeNumbers, extractChildren, extractState, returnNames, reversedString, toLastNames } from './cc12.js';

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

test('countNumberOfElements', () => {
  const input = [{ item: 'basketball', purchasePrice: 16.99 }, 23, 'learn spanish', []];
  const expected = 4;

  expect(countNumberOfElements(input)).toStrictEqual(expected);
});

test('returnNames', () => {
  const input = [{
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a' },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a'
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male'
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female'
  }];;
  const expected = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa'];

  expect(returnNames(input)).toStrictEqual(expected);
});

test('reversedString', () => {
  const input = 'Hello, world!';
  const expected = '!dlrow ,olleH';

  expect(reversedString(input)).toStrictEqual(expected);
});

const dataGameOfThrones = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

test('countNumberOfChildren', () => {
  const input = dataGameOfThrones;
  const expected = 14;

  expect(countNumberOfChildren(input)).toStrictEqual(expected);
});

test('averageNums', () => {
  const input = [5, 10, 30];
  const expected = 15;

  expect(averageNums(input)).toStrictEqual(expected);
});

test('countPrimeNumbers', () => {
  const input = [5, 10, 30];
  const expected = 1;

  expect(countPrimeNumbers(input)).toStrictEqual(expected);
});

test('extractState', () => {
  const data = {
    stats: [
      {
        stat: {
          url: 'https://pokeapi.co/api/v2/stat/6/',
          name: 'speed',
        },
        effort: 5,
        baseStat: 30,
      },
      {
        stat: {
          url: 'https://pokeapi.co/api/v2/stat/5/',
          name: 'special-defense',
        },
        effort: 2,
        baseStat: 110,
      },
      {
        stat: {
          url: 'https://pokeapi.co/api/v2/stat/4/',
          name: 'special-attack',
        },
        effort: 9,
        baseStat: 65,
      },
    ],
    name: 'snorlax',
    weight: 4600,
  };
  const input = 'special-defense';
  const expected = data.stats[1];
  const input2 = 'very-special-defense';
  const expected2 = null;

  expect(extractState(data, input)).toStrictEqual(expected);
  expect(extractState(data, input2)).toStrictEqual(expected2);
});

test('extractChildren', () => {
  const input = dataGameOfThrones;
  const expected = ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Drogon', 'Rhaegal', 'Viserion', 'Margaery', 'Loras'];

  expect(extractChildren(input)).toStrictEqual(expected);
});