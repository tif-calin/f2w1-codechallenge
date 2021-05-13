export const toLastNames = people => {
  return people.map(p => `${p.firstName} ${p.lastName}`);
};