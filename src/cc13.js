export const sortByChildren = (charArray) => {
  return charArray.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0).sort((a, b) => a.children.length - b.children.length);
};