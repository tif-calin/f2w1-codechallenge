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