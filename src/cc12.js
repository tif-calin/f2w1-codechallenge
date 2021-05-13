export const toLastNames = people => {
  return people.map(p => `${p.firstName} ${p.lastName}`);
};

export const addValues = arrNums => {
  return arrNums.reduce((acc, num) => acc + num, 0);
};