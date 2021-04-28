export function doubleNumbers(arr) {
  return arr.map(n => n * 2);
}

export function stringItUp(arr) {
  return arr.map(n => n.toString());
}

export function capitalizeNames(arr) {
  return arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());
}

export function namesOnly(arr) {
  return arr.map(obj => obj.name);
}

export function makeStrings(arr) {
  return arr.map(obj => `${obj.name} ${obj.age < 18 ? 'is under age!!' : 'can go to The Matrix'}`);
}

export function readyToPutInTheDOM(arr) {
  return arr.map(obj => `<h1>${obj.name}</h1><h2>${obj.age}</h2>`);
}