export const sortByChildren = (charArray) => {
  return charArray.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0).sort((a, b) => a.children.length - b.children.length);
};

export const containsW = str => {
  const re = new RegExp('w');
  return re.test(str);
};

export const isNum = input => {
  const re = new RegExp('\\d');
  return re.test(input);
};

export const containsWorld = input => {
  const re = new RegExp('world');
  return re.test(input);
};

export const isCapitalized = str => {
  const re = new RegExp('[A-Z]');
  return str.split(' ').filter(word => re.test(word[0])).map(word => word.replace(/\W/g, ''));
};

export const citiesAtoJ = arr => {
  const re = new RegExp('[A-J]');
  return arr.filter(word => re.test(word[0]));
};

export const matchMonth = str => {
  const re = new RegExp('^[oO].*[tr]$');
  return re.test(str);
};