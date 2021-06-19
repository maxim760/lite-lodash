export const flattenDeep = (array: any[]): any[] => {
  return array.reduce((acc, item) => {
    if (!Array.isArray(item)) {
      return [...acc, item];
    }
    return [...acc, ...flattenDeep(item)];
  }, []);
};

// console.log(flattenDeep([1, 2, 3, 4, 5]));
// console.log(flattenDeep([1, 2, 3, [4, 5]]));
// console.log(flattenDeep([1, 2, 3, [4, [5]]]));
// console.log(flattenDeep([1, 2, 3, [4, [[5]]]]));
// console.log(flattenDeep([1, [[[[[[[[[[[[2]]]]]]]]]]]], 3, [4, [[5]]]]));
// console.log(
//   flattenDeep([
//     [
//       [1, [2, 3]],
//       [[4], [[5]]],
//     ],
//   ])
// );
// console.log(flattenDeep([1, 2, 3, [[4], [[[5]]]]]));
