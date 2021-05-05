export function getHouses(arr) {
  return arr.map(char => char.house);
}

export function updateNumbers(obj) {
  return Object.entries(obj).map(([key, val]) => `${key}: ${val}`);
}

export function totalCharacters(arr) {
  let count = 0;
  arr.forEach(char => {
    count += 1 + char.children.length;
    if (char.spouse) count++;
  });
  return count;
}

export function hasChildrenEntries(arr, character) {
  let hasSpouse = false;
  arr.forEach(char => {
    if (char.name === character) hasSpouse = (char.spouse) ? true : false;
  })

  return hasSpouse;
}

export function sortByChildren(arr) {
  return arr.sort((a, b) => a.children.length - b.children.length);
} 