export function sortedKeys(obj) {
  return Object.keys(obj).sort((a, b) => a.length - b.length);
}

export function getFilteredKey(obj) {
  // return ['age']; lol jk
  return Object.keys(obj).filter(key => key === 'age'); // very useful function
}

export function getArrayOfKeysAndValues(obj){
  return Object.entries(obj);
}

export function sortedArraysByValuesLength(obj) {

}