// imports
import { describe, expect, test } from '@jest/globals';
import { containsW, sortByChildren } from './cc13.js';

// data
let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

// tests
describe('challenge 1: sortByChildren', () => {
  test('sorts characters by the number of children in each house (fewest to most)', () => {
    const input = characters;
    const expected = [
      {
        name: 'Euron',
        spouse: null,
        children: [],
        house: 'Greyjoy'
      },
      {
        name: 'Jon S.',
        spouse: null,
        children: [],
        house: 'Snow'
      },
      {
        name: 'Jon A.',
        spouse: 'Lysa',
        children: ['Robin'],
        house: 'Arryn'
      },
      {
        name: 'Mace',
        spouse: 'Alerie',
        children: ['Margaery', 'Loras'],
        house: 'Tyrell'
      },
      {
        name: 'Cersei',
        spouse: 'Robert',
        children: ['Joffrey', 'Myrcella', 'Tommen'],
        house: 'Lannister'
      },
      {
        name: 'Daenarys',
        spouse: 'Khal Drogo',
        children: ['Drogon', 'Rhaegal', 'Viserion'],
        house: 'Targaryen'
      },
      {
        name: 'Eddard',
        spouse: 'Catelyn',
        children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
        house: 'Stark'
      }
    ];

    expect(sortByChildren(input)).toStrictEqual(expected);
    expect(sortByChildren(input)[0].children.length).toStrictEqual(0);
  });
});

describe('challenge 2: containsW', () => {
  test('does "hello world" contain "w"?', () => {
    const input = 'hello world';
    const expected = true;

    expect(containsW(input)).toStrictEqual(expected);
  });

  test('does "Hello World" contain "w"?', () => {
    const input = 'Hello World';
    const expected = false;

    expect(containsW(input)).toStrictEqual(expected);
  });

  test('does "hello everyone" contain "w"?', () => {
    const input = 'hello everyone';
    const expected = false;

    expect(containsW(input)).toStrictEqual(expected);
  });
});