export const chunk = (array: Array<any>, number: number = 1): Array<any[]> => {
  return [array.slice(0,number),array.slice(number)]
}

// console.log(chunk(['a', 'b', 'c', 'd'], 2))
// console.log(chunk(['a', 'b', 'c', 'd'], 3))