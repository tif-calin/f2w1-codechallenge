export function howMuchPencil(str) {
  const newArr = [];
  for (let i = 0; i <= str.length; i++) {
    newArr.push(str.substring(i, str.length));
  }
  return newArr;
}

export function wordsToCharList(str) {
  return str.split('');
}

export function listFoods(recipe){
  return recipe.ingredients.map(ingredient => ingredient.split(' ').splice(2).join(' '));
}

export function stepActions(recipe){
  return recipe.steps.map(step => step.split(' ').splice(0, 1)[0]);
}

export function removeLastCharacters(str, numberOfCharacters){
  return str.substring(0, str.length - numberOfCharacters);
}

// stretch goals 
export function totalSumCSV(str){
  return str.split(',').reduce((acc, val) => acc + Number(val), 0);
}

const vwls = ['a', 'e', 'i', 'o', 'u'];

export function removeVowels(str){
  return str.split('').filter(char => !vwls.includes(char)).join('');
}

export function extractVowels(str){
  const noVwls = [];
  const onlyVwls = [];

  str.split('').forEach(char => {
    if (vwls.includes(char)) onlyVwls.push(char);
    else noVwls.push(char);
  });

  return [noVwls.join(''), onlyVwls.sort().join('')];
}