import { getHouses, updateNumbers, hasChildrenEntries, totalCharacters, sortByChildren } from './more-object-keys-entries.js';


const characters = [
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

test('getHouses', () => {
  const input = characters; //arrange
  const output = getHouses(input); //act
  expect(output).toEqual(expect.arrayContaining(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark'])); //assert
});

test('updateNumbers', () => {
  const input = {'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933'} //arrange
  const output = updateNumbers(input); //act
  expect(output).toEqual(['Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933']); //assert
});

test('totalCharacters', () => {
  const input = characters; //arrange
  const output = totalCharacters(input); //act
  expect(output).toEqual(26); //assert
});

test('hasChildrenEntries', () => {
  const input = characters; //arrange
  const output1 = hasChildrenEntries(input, 'Eddard'); //act
  const output2 = hasChildrenEntries(input, 'Euron');
  expect(output1).toEqual(true); //assert
  expect(output2).toEqual(false);
});

test('sortByChildren', () => {
  const input = characters; //arrange
  const output = sortByChildren(input); //act
  expect(output).toEqual([ {name: 'Euron', spouse: null, children: [], house: 'Greyjoy'}, { name: 'Jon S.', spouse: null, children: [],house: 'Snow'}, {name: 'Jon A.', spouse: 'Lysa', children: ['Robin'], house: 'Arryn'}, {name: 'Mace', spouse: 'Alerie', children: ['Margaery', 'Loras'], house: 'Tyrell'}, { name: 'Cersei',spouse: 'Robert', children: ['Joffrey', 'Myrcella', 'Tommen'], house: 'Lannister'}, {name: 'Daenarys', spouse: 'Khal Drogo', children: ['Drogon', 'Rhaegal', 'Viserion'], house: 'Targaryen'}, {name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark'}]); //assert
});