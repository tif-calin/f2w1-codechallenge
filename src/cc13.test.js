// imports
import { describe, expect, test } from '@jest/globals';
import { citiesAtoJ, containsW, containsWorld, findShells, hangman, isCapitalized, isNum, matchMonth, noPunctuation, sortByChildren } from './cc13.js';

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

test('challenge 3: isNum', () => {
  expect(isNum(1234567890)).toStrictEqual(true);
  expect(isNum('12345')).toStrictEqual(true);
  expect(isNum('h3llo w0rld')).toStrictEqual(true);
  expect(isNum('hello world')).toStrictEqual(false);
  expect(isNum('')).toStrictEqual(false);
});

test('challenge 4: containsWorld', () => {
  expect(containsWorld('hello world')).toStrictEqual(true);
  expect(containsWorld('Hello World')).toStrictEqual(false);
  expect(containsWorld('hello everyone')).toStrictEqual(false);
});

test('challenge 5: isCapitalized', () => {
  expect(isCapitalized('We only want to Return the Words that begin With a capital Letter')).toStrictEqual(['We', 'Return', 'Words', 'With', 'Letter']);
  expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toStrictEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']);
  expect(isCapitalized('these words are all failures')).toStrictEqual([]);
});

test('challenge 6: citiesAtoJ', () => {
  expect(citiesAtoJ(['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'])).toStrictEqual(['Cleveland', 'Birmingham', 'Austin', 'Boston', 'Hoboken']);
  expect(citiesAtoJ(['Albuquerque', 'Chicago', 'Philadelphia', 'Newark', 'Sacramento', 'Eugene'])).toStrictEqual(['Albuquerque', 'Chicago', 'Eugene']);
  expect(citiesAtoJ([])).toStrictEqual([]);
});

test('challenge 7: matchMonth', () => {
  expect(matchMonth('Oct')).toStrictEqual(true);
  expect(matchMonth('oct')).toStrictEqual(true);
  expect(matchMonth('October')).toStrictEqual(true);
  expect(matchMonth('october')).toStrictEqual(true);
  expect(matchMonth('November')).toStrictEqual(false);
  expect(matchMonth('nov')).toStrictEqual(false);
  expect(matchMonth(123)).toStrictEqual(false);
  expect(matchMonth('octob')).toStrictEqual(false);
  expect(matchMonth('OCTOBER')).toStrictEqual(false);
  expect(matchMonth('notOctober')).toStrictEqual(false);
});

test('challenge 8: noPunctuation', () => {
  expect(noPunctuation('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia vel massa sed egestas. Nunc faucibus iaculis elit, a scelerisque enim condimentum sed. Aenean ac scelerisque sem, et pharetra diam.')).toStrictEqual(['Lorem ', 'ipsum ', 'dolor ', 'sit ', 'consectetur ', 'adipiscing ', 'Cras ', 'lacinia ', 'vel ', 'massa ', 'sed ', 'Nunc ', 'faucibus ', 'iaculis ', 'a ', 'scelerisque ', 'enim ', 'condimentum ', 'Aenean ', 'ac ', 'scelerisque ', 'et ', 'pharetra ']);
  expect(noPunctuation('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toStrictEqual(['Given ', 'by ', 'our ', 'hand ', 'in ', 'the ', 'meadow ', 'that ', 'is ', 'called ', 'between ', 'Windsor ', 'and ', 'on ', 'the ', 'fifteenth ', 'day ', 'of ', 'June ', 'in ', 'the ', 'seventeenth ', 'year ', 'of ', 'our ', 'reign ', 'the ', 'new ', 'regnal ', 'year ', 'began ', 'on ', '28 ']);
});

test('challenge 9: hangman', () => {
  expect(hangman('This is a regex challenge. We are trying to create a hangman phrase where all of the vowels are missing!')).toStrictEqual('Th_s _s _ r_g_x ch_ll_ng_. W_ _r_ try_ng t_ cr__t_ _ h_ngm_n phr_s_ wh_r_ _ll _f th_ v_w_ls _r_ m_ss_ng!');
  expect(hangman('I wAnt them all tO bE removed and replaced with Underscores.')).toStrictEqual('_ w_nt th_m _ll t_ b_ r_m_v_d _nd r_pl_c_d w_th _nd_rsc_r_s.');
});

test('challenge 10: findShells', () => {
  const seashells = `She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I'm sure she sells seashore shells.`;

  expect(findShells(seashells)).toStrictEqual(['sells', 'seashells', 'shells', 'sells', 'seashells', 'sells', 'shells', 'sells', 'shells']);
});