export type IItem = {
  name: string;
  function: string;
};
export type ICategory = {
  title: string;
  items: IItem[];
};
export type ICategoryItem = {
  title: string;
  items: string[];
};

export const categories: ICategory[] = [
  {
    title: "Array",
    items: [
      {
        function:
          "(array, number = 1) => {\n  return [array.slice(0, number), array.slice(number)];\n}",
        name: "chunk",
      },
      {
        function: "array => {\n  return array.filter(item => item);\n}",
        name: "compact",
      },
      {
        function:
          "(array, ...array2) => {\n  return [].concat.apply(array, array2);\n}",
        name: "concat",
      },
      {
        function:
          "(array, array2) => {\n  return array.filter(item => !array2.includes(item));\n}",
        name: "difference",
      },
      {
        function:
          '(array, array2, func) => {\n  const compare = item => typeof func === "function" ? func(item) : item[func];\n\n  const check = item => compare(item) ? compare(item) : compare(item.toString());\n\n  return array.filter(item => {\n    return !array2.some(compareItem => check(compareItem) === check(item));\n  });\n}',
        name: "differenceBy",
      },
      {
        function:
          "(array, array2, compare) => {\n  return array.filter(item => {\n    return !array2.some(compareItem => compare(compareItem, item));\n  });\n}",
        name: "differenceWith",
      },
      {
        function: "(array, number = 1) => {\n  return array.slice(number);\n}",
        name: "drop",
      },
      {
        function:
          "(array, number = 1) => {\n  const dif = array.length - number > 0 ? array.length - number : 0;\n  return array.slice(0, dif);\n}",
        name: "dropRight",
      },
      {
        function:
          '(array, predicate) => {\n  const compare = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  const number = [...array].reverse().findIndex(item => !compare(item));\n\n  if (number === -1) {\n    return [];\n  }\n\n  return array.slice(0, array.length - number);\n}',
        name: "dropRightWhile",
      },
      {
        function:
          '(array, predicate) => {\n  const compare = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  const number = array.findIndex(item => !compare(item));\n\n  if (number === -1) {\n    return [];\n  }\n\n  return array.slice(number);\n}',
        name: "dropWhile",
      },
      {
        function:
          "(array, sym, start = 0, end = array.length) => {\n  return Array.from(array, (item, index) => {\n    return index >= start && index < end ? sym : item;\n  });\n}",
        name: "fill",
      },
      {
        function:
          '(array, predicate, index = 0) => {\n  const compare = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  const number = array.slice(index).findIndex(item => compare(item));\n\n  if (number === -1) {\n    return number;\n  }\n\n  return number + index;\n}',
        name: "findIndex",
      },
      {
        function:
          '(array, predicate, index = array.length - 1) => {\n  const compare = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  const number = [...array].reverse().slice(0, index + 1).findIndex(item => compare(item));\n\n  if (number === -1) {\n    return number;\n  }\n\n  return index - number;\n}',
        name: "findLastIndex",
      },
      {
        function: "array => {\n  return array[0];\n}",
        name: "first",
      },
      {
        function: "array => {\n  return array.flat();\n}",
        name: "flatten",
      },
      {
        function:
          "(array) => {\n  return array.reduce((acc, item) => {\n    if (!Array.isArray(item)) {\n      return [...acc, item];\n    }\n    return [...acc, ...flattenDeep(item)];\n  }, []);\n}",
        name: "flattenDeep",
      },
      {
        function: "(array, number = 1) => {\n  return array.flat(number);\n}",
        name: "flattenDepth",
      },
      {
        function:
          "array => {\n  return array.reduce((acc, [key, value]) => {\n    acc[key] = value;\n    return acc;\n  }, {});\n}",
        name: "fromPairs",
      },
      {
        function: "array => {\n  return array[0];\n}",
        name: "head",
      },
      {
        function:
          "(array, value, index = 0) => {\n  return array.indexOf(value, index);\n}",
        name: "indexOf",
      },
      {
        function:
          "array => {\n  const last = array.length - 1;\n  return array.slice(0, last);\n}",
        name: "initial",
      },
      {
        function: `(...arrays) => {
            const [array, ...other] = arrays
            return array.filter((item) => other.every(oth => oth?.includes(item)))
          }`,
        name: "intersection",
      },
      {
        function:
          '(...arrays) => {\n  const func = arrays.pop();\n  const [array, ...other] = arrays;\n\n  const compare = item => typeof func === "function" ? func(item) : item[func];\n\n  const check = item => compare(item) ? compare(item) : compare(item.toString());\n\n  return array.filter(item => other.every(othAr => othAr.some(compItem => check(compItem) === check(item))));\n}',
        name: "intersectionBy",
      },
      {
        function:
          "(...arrays) => {\n  const compare = arrays.pop();\n  const [array, ...other] = arrays;\n  return array.filter(item => other.every(othAr => othAr.some(compItem => compare(compItem, item))));\n}",
        name: "intersectionWith",
      },
      {
        function: '(array, sep = ",") => {\n  return array.join(sep);\n}',
        name: "join",
      },
      {
        function: "array => {\n  return array[array.length - 1];\n}",
        name: "last",
      },
      {
        function:
          "(array, value, index = array.length - 1) => {\n  return array.lastIndexOf(value, index);\n}",
        name: "lastIndexOf",
      },
      {
        function:
          "(array, number = 0) => {\n  return number >= 0 ? array[number] : array[array.length + number]; // 5 + - 2 => 5 - 2\n}",
        name: "nth",
      },
      {
        function:
          "(array, ...removeAr) => {\n  return array.filter(item => !removeAr.includes(item));\n}",
        name: "pull",
      },
      {
        function:
          "(array, removeAr) => {\n  return array.filter(item => !removeAr.includes(item));\n}",
        name: "pullAll",
      },
      {
        function:
          '(array, removeAr, func) => {\n  const compare = item => typeof func === "function" ? func(item) : item[func];\n\n  const check = item => compare(item) ? compare(item) : compare(item.toString());\n\n  return array.filter(item => !removeAr.some(compItem => check(item) === check(compItem)));\n}',
        name: "pullAllBy",
      },
      {
        function:
          "(array, removeAr, compare) => {\n  return array.filter(item => !removeAr.some(compItem => compare(item, compItem)));\n}",
        name: "pullAllWith",
      },
      {
        function:
          '(array, nums) => {\n  if (typeof nums === "number") {\n    return array.splice(nums, 1);\n  }\n\n  let count = 0;\n  const pulled = [];\n  nums.forEach(num => {\n    pulled.push(array.splice(num - count++, 1)[0]);\n  });\n  return pulled;\n}',
        name: "pullAt",
      },
      {
        function:
          "(array, func) => {\n  return array.reduce((acc, value, i) => {\n    if (func(value)) {\n      acc.push(array.splice(i, 1)[0]);\n    }\n\n    return acc;\n  }, []);\n}",
        name: "remove",
      },
      {
        function: "array => {\n  return array.reverse();\n}",
        name: "reverse",
      },
      {
        function:
          "(array, start = 0, end = array.length) => {\n  return array.slice(start, end);\n}",
        name: "slice",
      },
      {
        function:
          "(array, value) => {\n  let index = null;\n  array.reduce((acc, num, i) => {\n    if (value > num && (num > acc || acc === null)) {\n      acc = num;\n      index = i + 1;\n    }\n\n    return acc;\n  }, null);\n  return index || 0;\n}",
        name: "sortedIndex",
      },
      {
        function:
          '(array, value, func) => {\n  const getRes = item => typeof func === "function" ? func(item) : item[func];\n\n  let index = null;\n  array.reduce((acc, num, i) => {\n    if (getRes(value) > getRes(num) && (getRes(num) > acc || acc === null)) {\n      acc = getRes(num);\n      index = i + 1;\n    }\n\n    return acc;\n  }, null);\n  return index || 0;\n}',
        name: "sortedIndexBy",
      },
      {
        function: "(array, value) => {\n  return array.indexOf(value);\n}",
        name: "sortedIndexOf",
      },
      {
        function:
          "(array, value) => {\n  let index = null;\n  array.reduce((acc, num, i) => {\n    if (value >= num && (num >= acc || acc === null)) {\n      acc = num;\n      index = i + 1;\n    }\n\n    return acc;\n  }, null);\n  return index || 0;\n}",
        name: "sortedLastIndex",
      },
      {
        function:
          '(array, value, func) => {\n  const getRes = item => typeof func === "function" ? func(item) : item[func];\n\n  let index = null;\n  array.reduceRight((acc, num, i) => {\n    if (getRes(value) >= getRes(num) && (getRes(num) >= acc || acc === null)) {\n      acc = getRes(num);\n      index = i + 1;\n    }\n\n    return acc;\n  }, null);\n  return index || 0;\n}',
        name: "sortedLastIndexBy",
      },
      {
        function: "(array, value) => {\n  return array.lastIndexOf(value);\n}",
        name: "sortedLastIndexOf",
      },
      {
        function: "array => {\n  return Array.from(new Set(array));\n}",
        name: "sortedUniq",
      },
      {
        function:
          '(array, func) => {\n  const getRes = item => typeof func === "function" ? func(item) : item[func];\n\n  return array.reduce((acc, value) => {\n    if (!acc.some(item => getRes(item) === getRes(value))) {\n      acc.push(value);\n    }\n\n    return acc;\n  }, []);\n}',
        name: "sortedUniqBy",
      },
      {
        function: "(array, num = 1) => {\n  return array.slice(num);\n}",
        name: "tail",
      },
      {
        function: "(array, num = 1) => {\n  return array.slice(0, num);\n}",
        name: "take",
      },
      {
        function:
          "(array, num = 1) => {\n  return num > array.length ? array.slice() : array.slice(array.length - num);\n}",
        name: "takeRight",
      },
      {
        function:
          '(array, predicate) => {\n  const check = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  const number = [...array].reverse().findIndex(item => !check(item));\n\n  if (number === -1) {\n    return [];\n  }\n\n  return array.slice(array.length - number);\n}',
        name: "takeRightWhile",
      },
      {
        function:
          '(array, predicate) => {\n  const check = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  const number = [...array].findIndex(item => !check(item));\n\n  if (number === -1) {\n    return [];\n  }\n\n  return array.slice(0, number);\n}',
        name: "takeWhile",
      },
      {
        function:
          "(...arrays) => {\n  return Array.from(new Set(arrays.flat()));\n}",
        name: "union",
      },
      {
        function:
          '(...arrays) => {\n  const func = arrays.pop();\n\n  const compare = item => typeof func === "function" ? func(item) : item[func];\n\n  const check = item => compare(item) ? compare(item) : compare(item.toString());\n\n  return arrays.flat().reduce((acc, value) => {\n    if (acc.some(item => check(item) === check(value))) {\n      return acc;\n    }\n\n    acc.push(value);\n    return acc;\n  }, []);\n}',
        name: "unionBy",
      },
      {
        function:
          "(...arrays) => {\n  const func = arrays.pop();\n  return arrays.flat().reduce((acc, value) => {\n    if (acc.some(item => func(item, value))) {\n      return acc;\n    }\n\n    acc.push(value);\n    return acc;\n  }, []);\n}",
        name: "unionWith",
      },
      {
        function: "array => {\n  return Array.from(new Set(array));\n}",
        name: "uniq",
      },
      {
        function:
          '(array, func) => {\n  const compare = item => typeof func === "function" ? func(item) : item[func];\n\n  const check = item => compare(item) ? compare(item) : compare(item.toString());\n\n  return array.reduce((acc, value) => {\n    if (!acc.some(item => check(item) === check(value))) {\n      acc.push(value);\n      return acc;\n    }\n\n    return acc;\n  }, []);\n}',
        name: "uniqBy",
      },
      {
        function:
          "(array, func) => {\n  return array.reduce((acc, value) => {\n    if (!acc.some(item => func(item, value))) {\n      acc.push(value);\n      return acc;\n    }\n\n    return acc;\n  }, []);\n}",
        name: "uniqWith",
      },
      {
        function: `(array) => {
            const maxLen = Math.max(...array.map(item => item.length))
            return array.reduce((acc, value, idxZip) => {
              for (let i = 0; i < maxLen; i++) {
                if(!acc[i]) acc[i] = []
                acc[i][idxZip] = value[i] ?? undefined
              }
              return acc
            }, [])
          }`,
        name: "unzip",
      },
      {
        function:
          "(array, func) => {\n  const maxLen = Math.max(...array.map(item => item.length));\n  const res = [];\n\n  for (let i = 0; i < maxLen; i++) {\n    res.push(func(array[0][i], array[1][i]));\n  }\n\n  return res;\n}",
        name: "unzipWith",
      },
      {
        function:
          "(array, ...values) => {\n  return array.filter(item => !values.some(value => value === item));\n}",
        name: "without",
      },
      {
        function:
          "(...arrays) => {\n  return arrays.flat().filter((item, _, array) => array.indexOf(item) === array.lastIndexOf(item));\n}",
        name: "xor",
      },
      {
        function:
          '(...arrays) => {\n  const func = arrays.pop();\n\n  const helpFunc = item => typeof func === "function" ? func(item) : item[func];\n\n  const getRes = item => helpFunc(item) ? helpFunc(item) : helpFunc(item.toString());\n\n  const array = arrays.flat();\n  const arrayAfterFunc = array.map(item => getRes(item));\n  return array.filter(item => arrayAfterFunc.indexOf(getRes(item)) === arrayAfterFunc.lastIndexOf(getRes(item)));\n}',
        name: "xorBy",
      },
      {
        function:
          "(...arrays) => {\n  const func = arrays.pop();\n  const array = arrays.flat();\n  const indexToRemove = [];\n  return array.reduce((acc, value) => {\n    const idx = acc.findIndex(item => func(item, value));\n\n    if (idx >= 0) {\n      indexToRemove.push(idx);\n      return acc;\n    }\n\n    acc.push(value);\n    return acc;\n  }, []).filter((_, i) => !indexToRemove.includes(i));\n}",
        name: "xorWith",
      },
      {
        function: `(...arrays) => {
            const nestedLen = Math.max(...arrays.map((ar) => ar.length));
            return arrays.reduce((acc, value, idxZip) => {
              for (let i = 0; i < nestedLen; i++) {
                if (!acc[i]) acc[i] = []
                acc[i][idxZip] = value[i] ?? undefined
              }
              return acc;
            }, []);
          };`,
        name: "zip",
      },
      {
        function:
          "(keyArray, valueArray) => {\n  return keyArray.reduce((acc, value, i) => {\n    acc[value] = valueArray[i];\n    return acc;\n  }, {});\n}",
        name: "zipObject",
      },
      {
        function:
          '(keyArray, valueArray) => {\n  const getByPath = (path, accInitial = {}, finalRes) => {\n    let obj = null;\n    let curString = "";\n    path.split("").reduce((acc, sym, i, arr) => {\n      if (!obj) {\n        obj = acc;\n      }\n\n      const str = curString;\n\n      if (sym === ".") {\n        if (!acc[str]) {\n          acc[str] = {};\n        }\n\n        curString = "";\n        return acc[str];\n      } else if (sym === "[") {\n        if (!acc[str]) {\n          acc[str] = [];\n        }\n\n        curString = "";\n        return acc[str];\n      } else if (sym === "]") {\n        if (!acc[+str]) {\n          acc[+str] = undefined;\n        }\n\n        return acc;\n      }\n\n      if (i === arr.length - 1) {\n        curString += sym;\n\n        if (!acc[curString]) {\n          acc[curString] = finalRes;\n        }\n\n        return acc[curString];\n      } else {\n        curString += sym;\n        return acc;\n      }\n    }, accInitial);\n    return obj;\n  };\n\n  return keyArray.reduce((acc, value, i) => {\n    const obj = getByPath(value, acc, valueArray[i]);\n    return obj;\n  }, {});\n}',
        name: "zipObjectDeep",
      },
      {
        function:
          "(...arrays) => {\n  const func = arrays.pop();\n  const maxLen = Math.max(...arrays.map(ar => ar.length));\n  const res = [];\n\n  for (let i = 0; i < maxLen; i++) {\n    res.push(func(...arrays.map(item => item[i])));\n  }\n\n  return res;\n}",
        name: "zipWith",
      },
    ],
  },
  {
    title: "Collection",
    items: [
      {
        function:
          '(array, func) => {\n  const check = item => typeof func === "function" ? func(item) : item[func];\n\n  const getRes = item => check(item) ? check(item) : check(item.toString());\n\n  return array.reduce((acc, value) => {\n    const key = getRes(value);\n\n    if (!acc[key]) {\n      acc[key] = 0;\n    }\n\n    acc[key]++;\n    return acc;\n  }, {});\n}',
        name: "countBy",
      },
      {
        function:
          '(array, predicate) => {\n  const check = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  return array.every(item => check(item));\n}',
        name: "every",
      },
      {
        function:
          '(array, predicate) => {\n  const check = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  return array.filter(item => check(item));\n}',
        name: "filter",
      },
      {
        function:
          '(array, predicate, fromIndex = 0) => {\n  const check = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  return array.slice(fromIndex).find(item => check(item));\n}',
        name: "find",
      },
      {
        function:
          '(array, predicate, fromIndex = array.length - 1) => {\n  const check = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  return [...array].reverse().slice(array.length - 1 - fromIndex).find(item => check(item));\n}',
        name: "findLast",
      },
      {
        function:
          "(array, func) => {\n  return array.map(item => func(item)).flat();\n}",
        name: "flatMap",
      },
      {
        function:
          "(array, func) => {\n  const mappedArray = array.map(item => func(item));\n\n  const isFlatArray = array => array.every(item => !Array.isArray(item));\n\n  let newArray = JSON.parse(JSON.stringify(mappedArray));\n\n  while (!isFlatArray(newArray)) {\n    newArray = newArray.flat();\n  }\n\n  return newArray;\n}",
        name: "flatMapDeep",
      },
      {
        function:
          "(array, func, number) => {\n  return array.map(item => func(item)).flat(number);\n}",
        name: "flatMapDepth",
      },
      {
        function:
          "(obj, func) => {\n  if (Array.isArray(obj)) {\n    obj.forEach(func);\n  } else {\n    Object.entries(obj).forEach(([key, value]) => {\n      func(value, key);\n    });\n  }\n}",
        name: "forEach",
      },
      {
        function:
          "(obj, func) => {\n  if (Array.isArray(obj)) {\n    for (let i = obj.length - 1; i >= 0; i--) {\n      func(obj[i]);\n    }\n  } else {\n    const arrayEntries = Object.entries(obj);\n\n    for (let i = arrayEntries.length - 1; i >= 0; i--) {\n      func(arrayEntries[i][0], arrayEntries[i][1]);\n    }\n  }\n}",
        name: "forEachRight",
      },
      {
        function:
          '(collection, iteratee) => {\n  const group = item => typeof iteratee === "function" ? iteratee(item) : item[iteratee];\n\n  return collection.reduce((acc, value) => {\n    const res = group(value);\n\n    if (!acc[res]) {\n      acc[res] = [];\n    }\n\n    acc[res].push(value);\n    return acc;\n  }, {});\n}',
        name: "groupBy",
      },
      {
        function:
          '(collection, value, fromIndex = 0) => {\n  return typeof collection === "object" ? Object.values(collection).includes(value, fromIndex) : collection.includes(value, fromIndex);\n}',
        name: "includes",
      },
      {
        function: `(collection, path, ...args) => {
            if (!args?.length) {
              args = [undefined];
            }
            return collection.map((item) => {
              return typeof path === "function"
                ? path.apply(item, args)
                : item[path](...args);
            });
          };`,
        name: "invokeMap",
      },
      {
        function:
          '(collection, predicate) => {\n  const getRes = item => typeof predicate === "function" ? predicate(item) : item[predicate] || item[predicate.toString()];\n\n  return collection.reduce((acc, value) => {\n    const res = getRes(value);\n    acc[res] = value;\n    return acc;\n  }, {});\n}',
        name: "keyBy",
      },
      {
        function:
          '(collection, predicate) => {\n  const getRes = item => typeof predicate === "function" ? predicate(item) : item[predicate] || item[predicate.toString()];\n\n  if (Array.isArray(collection)) {\n    return collection.map(item => getRes(item));\n  }\n\n  return Object.keys(collection).map(item => getRes(collection[item]));\n}',
        name: "map",
      },
      {
        function: `(collection[], predicate, orders) => {
            const localComp = (a, b) => {
              return (
                a.toString().localeCompare(b.toString()) -
                b.toString().localeCompare(a.toString())
              );
            };
            const isDesc = (item) => /^desc/i.test(item.toString());
            const newCol = [...collection];
            const sorting = (str) => (a, b) => {
              if (!isDesc(str)) {
                if (typeof a === "number") {
                  return a - b;
                }
                return localComp(a, b);
              }
              if (typeof a === "number") {
                return b - a;
              }
              return localComp(b, a);
            };
            const flag = (a, b) => {
              let tFlag = 0;
              predicate.forEach((item, i) => {
                tFlag = tFlag || sorting(orders[i])(a[item], b[item]);
              });
              return tFlag;
            };`,
        name: "orderBy",
      },
      {
        function:
          '(collection, predicate) => {\n  const isTruthy = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item); // [0] - тру значения\n  // [1] - фолс значения\n\n\n  return collection.reduce((acc, value) => {\n    isTruthy(value) ? acc[0].push(value) : acc[1].push(value);\n    return acc;\n  }, [[], []]);\n}',
        name: "partition",
      },
      {
        function:
          "(collection, func, acc) => {\n  if (Array.isArray(collection)) {\n    return collection.reduce(func, acc);\n  }\n\n  return Object.keys(collection).reduce((acc, key) => {\n    return func(acc, collection[key], key);\n  }, acc);\n}",
        name: "reduce",
      },
      {
        function:
          "(collection, func, acc) => {\n  if (Array.isArray(collection)) {\n    return collection.reduceRight(func, acc);\n  }\n\n  return Object.keys(collection).reduceRight((acc, key) => {\n    return func(acc, collection[key], key);\n  }, acc);\n}",
        name: "reduceRight",
      },
      {
        function:
          '(collection, predicate) => {\n  const isTruthy = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  return collection.reduce((acc, value) => {\n    !isTruthy(value) && acc.push(value);\n    return acc;\n  }, []);\n}',
        name: "reject",
      },
      {
        function:
          "collection => {\n  const getRandom = (start, end) => Math.floor(Math.random() * (end - start) + start);\n\n  const index = getRandom(0, collection.length);\n  return collection[index];\n}",
        name: "sample",
      },
      {
        function:
          "(collection, num) => {\n  const newCol = [...collection];\n\n  const getRandom = (start, end) => Math.floor(Math.random() * (end - start) + start);\n\n  const size = Math.min(newCol.length, num);\n  return Array.from({\n    length: size\n  }, () => {\n    const index = getRandom(0, newCol.length);\n    return newCol.splice(index, 1)[0];\n  });\n}",
        name: "sampleSize",
      },
      {
        function:
          "collection => {\n  const getRandom = (start, end) => Math.floor(Math.random() * (end - start) + start);\n\n  const newCol = [...collection];\n  const size = newCol.length;\n  return Array.from({\n    length: size\n  }, () => {\n    const index = getRandom(0, newCol.length);\n    return newCol.splice(index, 1)[0];\n  });\n}",
        name: "shuffle",
      },
      {
        function:
          'collection => {\n  return typeof collection === "object" ? Object.keys(collection).length : collection.length;\n}',
        name: "size",
      },
      {
        function:
          '(collection, predicate) => {\n  const isTruthy = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  return collection.some(item => isTruthy(item));\n}',
        name: "some",
      },
      {
        function:
          '(collection, pr) => {\n  if (!pr || pr.length === 0) {\n    return collection;\n  }\n\n  const predicate = Array.isArray(pr) ? pr : [pr];\n\n  const localComp = (a, b) => a.toString().localeCompare(b.toString()) - b.toString().localeCompare(a.toString());\n\n  const getItem = prop => item => typeof prop === "function" ? prop(item) : item[prop];\n\n  const newCol = [...collection];\n\n  const sorting = (a, b) => {\n    if (typeof a === "number") {\n      return a - b;\n    }\n\n    return localComp(a, b);\n  };\n\n  const flag = (a, b) => {\n    let tFlag = 0;\n    predicate.forEach((prop, i) => {\n      const getProp = getItem(prop);\n      tFlag = tFlag || sorting(getProp(a), getProp(b));\n    });\n    return tFlag;\n  };\n\n  return newCol.sort(flag);\n}',
        name: "sortBy",
      },
    ],
  },
  {
    title: "Date",
    items: [
      {
        function: "() => {\n  return Date.now();\n}",
        name: "now",
      },
    ],
  },
  {
    title: "Function",
    items: [
      {
        function:
          "function after(n, func) {\n  let count = 0;\n  return () => {\n    count++;\n    return count >= n ? func() : undefined;\n  };\n}",
        name: "after",
      },
      {
        function:
          "(n, func) => {\n  return (...args) => {\n    return func.apply(null, args.slice(0, n));\n  };\n}",
        name: "ary",
      },
      {
        function:
          "function before(n, func) {\n  let count = 0;\n  return () => {\n    count++;\n    return count < n ? func() : undefined;\n  };\n}",
        name: "before",
      },
      {
        function:
          "(func, thisArg, ...partials) => {\n  return (...args2) => {\n    return func.apply(thisArg, partials.concat(args2));\n  };\n}",
        name: "bind",
      },
      {
        function:
          "(object, key, ...partials) => {\n  return (...args2) => {\n    return object[key].apply(object, partials.concat(args2));\n  };\n}",
        name: "bindKey",
      },
      {
        function:
          "func => {\n  return function curried(...args) {\n    if (args.length >= func.length) {\n      return func(...args);\n    } else {\n      return (...args2) => {\n        return curried(...args.concat(args2));\n      };\n    }\n  };\n}",
        name: "curry",
      },
      {
        function:
          "func => {\n  return function curried(...args) {\n    if (args.length >= func.length) {\n      return func(...args);\n    }\n\n    return (...args2) => {\n      return curried(...args2.concat(args));\n    };\n  };\n}",
        name: "curryRight",
      },
      {
        function:
          "(func, wait) => {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      timer = null;\n      func(...args);\n    }, wait);\n  };\n}",
        name: "debounce",
      },
      {
        function:
          "(func, ...args) => {\n  return setTimeout(() => func(...args), 1);\n}",
        name: "defer",
      },
      {
        function:
          "(func, ms, ...args) => {\n  return setTimeout(() => func(...args), ms);\n}",
        name: "delay",
      },
      {
        function:
          "func => {\n  return (...args) => {\n    return func(...[...args].reverse());\n  };\n}",
        name: "flip",
      },
      {
        function: "func => {\n  return (...args) => !func(...args);\n}",
        name: "negate",
      },
      {
        function:
          "func => {\n  let count = 0;\n  let res;\n  return (...args) => {\n    count++;\n\n    if (count === 1) {\n      res = func(...args);\n    }\n\n    return res;\n  };\n}",
        name: "once",
      },
      {
        function:
          "(func, transform) => {\n  const changeAr = [].concat(transform); // 22 => [22], [22] => [22]\n\n  return (...args) => {\n    const res = func(...args);\n    return Array.isArray(res) ? res.map((item, i) => changeAr[i] ? changeAr[i](item) : changeAr[0](item)) : changeAr[0](res);\n  };\n}",
        name: "overArgs",
      },
      {
        function:
          "(func, ...partials) => {\n  return (...args) => func(...partials.concat(args));\n}",
        name: "partial",
      },
      {
        function:
          "(func, ...partials) => {\n  return (...args) => func(...args.concat(partials));\n}",
        name: "partialRight",
      },
      {
        function:
          "(func, ...rest) => {\n  const indexes = rest.flat(); // 1,2,3 => [1,2,3], [1,2,3] => [[1,2,3]], поэтому flat\n\n  return (...args) => {\n    return func(...indexes.map(idx => args[idx]));\n  };\n}",
        name: "rearg",
      },
      {
        function:
          "(func, start = func.length - 1) => {\n  return (...args) => {\n    const nonRest = args.slice(0, func.length - 1);\n    const restParams = args.slice(start);\n    return func(...nonRest, restParams);\n  };\n}",
        name: "rest",
      },
      {
        function:
          "(func, start = 0) => {\n  return (...args) => {\n    return func(...args.flat().slice(start));\n  };\n}",
        name: "spread",
      },
      {
        function:
          "(func, wait) => {\n  let lastTime = 0;\n  return (...args) => {\n    const now = Date.now();\n\n    if (now - lastTime >= wait) {\n      func(args);\n      lastTime = now;\n    }\n  };\n}",
        name: "throttle",
      },
      {
        function:
          "func => {\n  return first => {\n    return func(first);\n  };\n}",
        name: "unary",
      },
      {
        function:
          "(value, wrapper) => {\n  // return (...args[]) => {\n  //   value.apply(null, args)\n  // }\n  return (...args) => wrapper(value, ...args);\n}",
        name: "wrap",
      },
    ],
  },
  {
    title: "Lang",
    items: [
      {
        function:
          "(...args) => {\n  if (args.length === 0) {\n    return [];\n  }\n\n  const arg = args[0];\n\n  if (Array.isArray(arg)) {\n    return arg;\n  }\n\n  return [arg];\n}",
        name: "castArray",
      },
      {
        function:
          'value => {\n  const shallowCopy = item => Array.isArray(item) ? [...item] : typeof item === "object" ? { ...item\n  } : item;\n\n  return shallowCopy(value);\n}',
        name: "clone",
      },
      {
        function:
          'value => {\n  const deepCopy = item => typeof item === "object" ? JSON.parse(JSON.stringify(item)) : item;\n\n  return deepCopy(value);\n}',
        name: "cloneDeep",
      },
      {
        function:
          '(value, customizer) => {\n  customizer = typeof customizer === "function" ? customizer : undefined;\n\n  const deepCopy = item => typeof item === "object" ? JSON.parse(JSON.stringify(item)) : item;\n\n  const res = deepCopy(value);\n\n  if (!customizer) {\n    return res;\n  }\n\n  if (typeof value !== "object") {\n    return value;\n  }\n\n  if (Array.isArray(value)) {\n    return value.map((item, i, array) => customizer(item, i, array));\n  }\n\n  return Object.values(value).map((item, i) => customizer(item, i, value)); // не полностью понял как именно работает customizer\n}',
        name: "cloneDeepWith",
      },
      {
        function:
          '(value, customizer) => {\n  customizer = typeof customizer === "function" ? customizer : undefined;\n\n  const shallowCopy = item => Array.isArray(item) ? [...item] : typeof item === "object" ? { ...item\n  } : item;\n\n  const res = shallowCopy(value);\n\n  if (!customizer) {\n    return res;\n  }\n\n  if (typeof value !== "object") {\n    return value;\n  }\n\n  if (Array.isArray(value)) {\n    return value.map((item, i, array) => customizer(item, i, array));\n  }\n\n  return Object.values(value).map((item, i) => customizer(item, i, value)); // не полностью понял как именно работает customizer\n}',
        name: "cloneWith",
      },
      {
        function:
          '(object, sourse) => {\n  const check = key => {\n    return typeof sourse[key] === "function" ? sourse[key](object[key]) : sourse[key] === object[key];\n  };\n\n  return !Object.keys(sourse).some(key => {\n    return !check(key);\n  });\n}',
        name: "conformsTo",
      },
      {
        function:
          "(value, other) => {\n  return value === other || value !== value && other !== other;\n}",
        name: "eq",
      },
      {
        function: "(value, other) => value > other",
        name: "gt",
      },
      {
        function: "(value, other) => value >= other",
        name: "gte",
      },
      {
        function:
          "value => {\n  return value.toString() === function (a, b, c) {\n    return arguments;\n  }().toString();\n}",
        name: "isArguments",
      },
      {
        function: "value => {\n  return Array.isArray(value);\n}",
        name: "isArray",
      },
      {
        function: "value => {\n  return value instanceof ArrayBuffer;\n}",
        name: "isArrayBuffer",
      },
      {
        function: `(value) => {
            return (value?.length ?? value?.size ?? undefined) !== undefined;
          };`,
        name: "isArrayLike",
      },
      {
        function: `(value) => {
            return (
              typeof value === "object" &&
              (value?.length ?? value?.size ?? undefined) !== undefined
            );
          };`,
        name: "isArrayLikeObject",
      },
      {
        function: 'value => typeof value === "boolean"',
        name: "isBoolean",
      },
      {
        function: "value => value instanceof Buffer",
        name: "isBuffer",
      },
      {
        function: "value => value instanceof Date",
        name: "isDate",
      },
      {
        function: `(value) =>
          value?.children instanceof HTMLCollection;`,
        name: "isElement",
      },
      {
        function:
          'value => typeof value === "number" || typeof value === "boolean" ? true : typeof value === "object" && value !== null ? Array.isArray(value) ? value.length === 0 : Object.keys(value).length === 0 : !value',
        name: "isEmpty",
      },
      {
        function:
          '(value, other) => {\n  let isEq = true;\n\n  if (value === other || value !== value && other !== other) {\n    return true;\n  }\n\n  if (typeof value !== typeof other || typeof value !== "object" || Array.isArray(value) !== Array.isArray(other)) {\n    return false;\n  }\n\n  if (Array.isArray(value)) {\n    if (other.length !== value.length) {\n      return false;\n    }\n\n    value.forEach((item, i) => {\n      isEq = isEq && isEqual(item, other[i]);\n    });\n  } else {\n    if (Object.keys(value).length !== Object.keys(other).length) {\n      return false;\n    }\n\n    Object.keys(value).forEach(key => {\n      isEq = isEq && isEqual(value[key], other[key]);\n    });\n  }\n\n  return isEq;\n}',
        name: "isEqual",
      },
      {
        function:
          '(value, other, customizer) => {\n  let isEq = true;\n\n  if (value === other || customizer(value, other) || value !== value && other !== other) {\n    return true;\n  }\n\n  if (typeof value !== typeof other || typeof value !== "object" || Array.isArray(value) !== Array.isArray(other)) {\n    return false;\n  }\n\n  if (Array.isArray(value)) {\n    if (other.length !== value.length) {\n      return false;\n    }\n\n    value.forEach((item, i) => {\n      isEq = isEq && isEqualWith(item, other[i], customizer);\n    });\n  } else {\n    if (Object.keys(value).length !== Object.keys(other).length) {\n      return false;\n    }\n\n    Object.keys(value).forEach(key => {\n      isEq = isEq && isEqualWith(value[key], other[key], customizer);\n    });\n  }\n\n  return isEq;\n}',
        name: "isEqualWith",
      },
      {
        function: "value => value instanceof Error",
        name: "isError",
      },
      {
        function: "value => Number.isFinite(value)",
        name: "isFinite",
      },
      {
        function: "value => value instanceof Function",
        name: "isFunction",
      },
      {
        function: "value => Number.isInteger(value)",
        name: "isInteger",
      },
      {
        function:
          "value => Number.isInteger(value) && value >= 0 && value <= Number.MAX_SAFE_INTEGER",
        name: "isLength",
      },
      {
        function: "value => value instanceof Map",
        name: "isMap",
      },
      {
        function:
          '(object, source) => {\n  let isEq = true;\n\n  if (object === source || object !== object && source !== source) {\n    return true;\n  }\n\n  if (typeof object !== typeof source || typeof object !== "object" || Array.isArray(object) !== Array.isArray(source)) {\n    return false;\n  }\n\n  if (Array.isArray(source)) {\n    source.forEach((item, i) => {\n      isEq = isEq && isMatch(item, source[i]);\n    });\n  } else {\n    Object.keys(source).forEach(key => {\n      isEq = isEq && isMatch(object[key], source[key]);\n    });\n  }\n\n  return isEq;\n}',
        name: "isMatch",
      },
      {
        function:
          '(object, source, customizer) => {\n  let isEq = true;\n\n  if (object === source || customizer(object, source) || object !== object && source !== source) {\n    return true;\n  }\n\n  if (typeof object !== typeof source || typeof object !== "object" || Array.isArray(object) !== Array.isArray(source)) {\n    return false;\n  }\n\n  if (Array.isArray(source)) {\n    source.forEach((item, i) => {\n      isEq = isEq && isMatchWith(item, source[i], customizer);\n    });\n  } else {\n    Object.keys(source).forEach(key => {\n      isEq = isEq && isMatchWith(object[key], source[key], customizer);\n    });\n  }\n\n  return isEq;\n}',
        name: "isMatchWith",
      },
      {
        function:
          'value => (typeof value === "number" || value instanceof Number) && value != +value',
        name: "isNaN",
      },
      {
        function: "value => value === undefined || value === null",
        name: "isNil",
      },
      {
        function: "value => value === null",
        name: "isNull",
      },
      {
        function:
          'value => typeof value === "number" || value instanceof Number',
        name: "isNumber",
      },
      {
        function: "value => value instanceof Object",
        name: "isObject",
      },
      {
        function:
          'value => value instanceof Object && typeof value === "object"',
        name: "isObjectLike",
      },
      {
        function: `(value) =>
          value?.__proto__?.constructor.name === "Object" ||
          (typeof value === "object" &&
            value !== null &&
            value.__proto__ === undefined);`,
        name: "isPlainObject",
      },
      {
        function: "value => value instanceof RegExp",
        name: "isRegExp",
      },
      {
        function:
          "value => {\n  return Number.isInteger(value) && value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER;\n}",
        name: "isSafeInteger",
      },
      {
        function: "value => value instanceof Set",
        name: "isSet",
      },
      {
        function: 'value => typeof value === "string"',
        name: "isString",
      },
      {
        function: 'value => typeof value === "symbol"',
        name: "isSymbol",
      },
      {
        function:
          "value => value instanceof Uint16Array || value instanceof Uint32Array || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int16Array || value instanceof Int32Array || value instanceof Int8Array || value instanceof Float32Array || value instanceof Float64Array || value instanceof BigUint64Array || value instanceof BigInt64Array || value instanceof MimeTypeArray",
        name: "isTypedArray",
      },
      {
        function: "value => value === undefined",
        name: "isUndefined",
      },
      {
        function: "value => value instanceof WeakMap",
        name: "isWeakMap",
      },
      {
        function: "value => value instanceof WeakSet",
        name: "isWeakSet",
      },
      {
        function: "(value, other) => value < other",
        name: "lt",
      },
      {
        function: "(value, other) => value <= other",
        name: "lte",
      },
      {
        function:
          'value => {\n  if (Array.isArray(value)) {\n    return value;\n  }\n\n  if (typeof value === "object") {\n    return Object.values(value);\n  }\n\n  return Array.from(value);\n}',
        name: "toArray",
      },
      {
        function:
          "num => {\n  if (num > Number.MAX_VALUE) {\n    return Number.MAX_VALUE;\n  }\n\n  if (num < Number.MIN_VALUE) {\n    return Number.MIN_VALUE;\n  }\n\n  return +num || 0;\n}",
        name: "toFinite",
      },
      {
        function:
          "(num = 0) => {\n  return num >= 0 ? Math.min(Math.trunc(num), Number.MAX_VALUE) : Math.max(Math.trunc(num), Number.MIN_VALUE);\n}",
        name: "toInteger",
      },
      {
        function:
          "(num = 0) => {\n  return Math.max(Math.min(Math.trunc(num), 2 ** 32 - 1), 0);\n}",
        name: "toLength",
      },
      {
        function: "(num = 0) => {\n  return +num;\n}",
        name: "toNumber",
      },
      {
        function:
          'obj => {\n  if (typeof obj !== "object") {\n    return {};\n  }\n\n  const res = { ...obj\n  };\n  let proto = obj.__proto__;\n\n  while (proto) {\n    Object.assign(res, proto);\n    proto = proto.__proto__;\n  }\n\n  return res;\n}',
        name: "toPlainObject",
      },
      {
        function:
          "(num = 0) => {\n  return num >= 0 ? Math.min(Math.trunc(num), Number.MAX_SAFE_INTEGER) : Math.max(Math.trunc(num), Number.MIN_SAFE_INTEGER);\n}",
        name: "toSafeInteger",
      },
      {
        function:
          'str => {\n  const res = str || "";\n\n  if (typeof str === "number" && 1 / str === -Infinity) {\n    return "-0";\n  }\n\n  return res + "";\n}',
        name: "toString",
      },
    ],
  },
  {
    title: "Math",
    items: [
      {
        function: "(a, b) => a + b",
        name: "add",
      },
      {
        function:
          "(number, precision = 0) => {\n  return Math.ceil(number * 10 ** precision) / 10 ** precision;\n}",
        name: "ceil",
      },
      {
        function: "(a, b) => a / b",
        name: "divide",
      },
      {
        function:
          "(number, precision = 0) => {\n  return Math.floor(number * 10 ** precision) / 10 ** precision;\n}",
        name: "floor",
      },
      {
        function: "array => array.length ? Math.max(...array) : undefined",
        name: "max",
      },
      {
        function:
          '(array, func) => {\n  const getRes = item => typeof func === "function" ? func(item) : item[func];\n\n  let max = -Infinity;\n  let idx = -1;\n\n  for (let i = 0; i < array.length; i++) {\n    const res = getRes(array[i]);\n\n    if (res > max) {\n      max = res;\n      idx = i;\n    }\n  }\n\n  return idx > -1 ? array[idx] : undefined;\n}',
        name: "maxBy",
      },
      {
        function:
          "array => array.length ? array.reduce((acc, value) => acc + value) / array.length : undefined",
        name: "mean",
      },
      {
        function:
          '(array, func) => {\n  if (!array.length) {\n    return undefined;\n  }\n\n  const getRes = item => {\n    return typeof func === "function" ? func(item) : item[func];\n  };\n\n  return array.reduce((acc, value) => acc + getRes(value), 0) / array.length;\n}',
        name: "meanBy",
      },
      {
        function: "array => array.length ? Math.min(...array) : undefined",
        name: "min",
      },
      {
        function:
          '(array, func) => {\n  if (!array.length) {\n    return undefined;\n  }\n\n  const getRes = item => {\n    return typeof func === "function" ? func(item) : item[func];\n  };\n\n  let min = Infinity;\n  return array.reduce((acc, value) => {\n    const res = getRes(value);\n\n    if (res < min) {\n      min = res;\n      return value;\n    }\n\n    return acc;\n  }, array[0]);\n}',
        name: "minBy",
      },
      {
        function: "(a, b) => a * b",
        name: "multiply",
      },
      {
        function:
          "(number, precision = 0) => {\n  return Math.round(number * 10 ** precision) / 10 ** precision;\n}",
        name: "round",
      },
      {
        function: "(a, b) => a - b",
        name: "subtract",
      },
      {
        function: "array => array.reduce((acc, value) => acc + value)",
        name: "sum",
      },
      {
        function:
          '(array, func) => {\n  const getRes = item => {\n    return typeof func === "function" ? func(item) : item[func];\n  };\n\n  return array.reduce((acc, value) => acc + getRes(value), 0);\n}',
        name: "sumBy",
      },
    ],
  },
  {
    title: "Number",
    items: [
      {
        function:
          "(number, lower, upper) => {\n  return Math.min(Math.max(number, lower), upper);\n}",
        name: "clump",
      },
      {
        function:
          "(number, start = 0, end) => {\n  if (!end) {\n    return number < Math.max(start, 0) && number >= Math.min(start, 0);\n  }\n\n  return number < Math.max(end, start) && number >= Math.min(start, end);\n}",
        name: "inRange",
      },
      {
        function:
          '(start = 0, end = 1, floating) => {\n  let flag = typeof end === "boolean" ? end : typeof floating === "boolean" ? floating : false;\n\n  if (!Number.isInteger(start) || !Number.isInteger(end) && typeof end === "number") {\n    flag = true;\n  }\n\n  end = typeof end === "boolean" ? 0 : end;\n\n  if (start > end) {\n    let t = start;\n    start = end;\n    end = t;\n  }\n\n  if (flag) {\n    return Math.random() * (end - start) + Math.min(start);\n  }\n\n  return Math.floor(Math.random() * (end - start + 1) + Math.min(start));\n}',
        name: "random",
      },
    ],
  },
  {
    title: "Object",
    items: [
      {
        function:
          "(obj, ...other) => {\n  return Object.assign(obj, ...other);\n}",
        name: "assign",
      },
      {
        function:
          "(obj, ...other) => {\n  other = other.map(item => {\n    const res = { ...item\n    };\n    let proto = item.__proto__;\n\n    while (proto !== null) {\n      Object.assign(res, proto);\n      proto = proto.__proto__;\n    }\n\n    return res;\n  });\n  return Object.assign(obj, ...other);\n}",
        name: "assignIn",
      },
      {
        function:
          "(initial, ...other) => {\n  const customizer = other.pop();\n  other = other.map(item => {\n    let res = { ...item\n    };\n    let proto = item.__proto__;\n\n    while (proto !== null) {\n      res = Object.assign({}, proto, res);\n      proto = proto.__proto__;\n    }\n\n    return res;\n  });\n  return other.reduce((acc, value) => {\n    for (const key in value) {\n      acc[key] = customizer(acc[key], value[key]);\n    }\n\n    return acc;\n  }, initial);\n}",
        name: "assignInWith",
      },
      {
        function:
          "(initial, ...other) => {\n  const customizer = other.pop();\n  return other.reduce((acc, value) => {\n    for (const key in value) {\n      acc[key] = customizer(acc[key], value[key]);\n    }\n\n    return acc;\n  }, initial);\n}",
        name: "assignWith",
      },
      {
        function: `(object: ) => {
            return paths.map((path) => {
              const arrPath = path
                .split(/[\[\]\.]+/)
                .join(" ")
                .trim()
                .split(" ");
              return arrPath.reduce((acc, value) => {
                return acc?.[value] ?? acc?.[+value];
              }, object);
            });
          };`,
        name: "at",
      },
      {
        function: "(prot, props) => {\n  return Object.create(prot, props);\n}",
        name: "create",
      },
      {
        function:
          "(...objects) => {\n  return objects.reduceRight((acc, value) => {\n    for (const key in value) {\n      acc[key] = value[key];\n    }\n\n    return acc;\n  });\n}",
        name: "defaults",
      },
      {
        function:
          '(...objects) => {\n  return objects.reduceRight((acc, value) => {\n    for (const key in value) {\n      if (typeof value[key] !== "object") {\n        acc[key] = value[key];\n      } else {\n        acc[key] = defaultsDeep(value[key], acc[key]);\n      }\n    }\n\n    return acc;\n  }, {});\n}',
        name: "defaultsDeep",
      },
      {
        function:
          '(obj, predicate) => {\n  const check = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  return Object.keys(obj).find(key => check(obj[key]));\n}',
        name: "findKey",
      },
      {
        function:
          '(obj, predicate) => {\n  const check = item => typeof predicate === "function" ? predicate(item) : typeof predicate === "string" ? item === predicate.toString() || item[predicate] === true : Array.isArray(predicate) ? Object.keys(item).some(compKey => compKey === predicate[0] && item[compKey] === predicate[1]) : Object.keys(predicate).every(compKey => item[compKey] === predicate[compKey] && compKey in item);\n\n  return Object.keys(obj).reverse().find(key => check(obj[key]));\n}',
        name: "findLastKey",
      },
      {
        function:
          "(obj, func) => {\n  Object.keys(obj).forEach(key => {\n    func(obj[key], key);\n  });\n\n  if (obj.__proto__) {\n    forIn(obj.__proto__, func);\n  }\n}",
        name: "forIn",
      },
      {
        function:
          "(obj, func) => {\n  if (obj.__proto__) {\n    forIn(obj.__proto__, func);\n  }\n\n  Object.keys(obj).reverse().forEach(key => {\n    func(obj[key], key);\n  });\n}",
        name: "forInRight",
      },
      {
        function:
          "(obj, func) => {\n  Object.keys(obj).forEach(key => {\n    func(obj[key], key);\n  });\n}",
        name: "forOwn",
      },
      {
        function:
          "(obj, func) => {\n  Object.keys(obj).reverse().forEach(key => {\n    func(obj[key], key);\n  });\n}",
        name: "forOwnRight",
      },
      {
        function:
          'obj => {\n  return Object.keys(obj).filter(key => typeof obj[key] === "function");\n}',
        name: "functions",
      },
      {
        function:
          'obj => {\n  const res = Object.keys(obj).filter(key => typeof obj[key] === "function");\n  obj.__proto__ && res.push(...functionsIn(obj.__proto__));\n  return res;\n}',
        name: "functionsIn",
      },
      {
        function: `(
            obj = {},
            path,
            defaultValue
          ) => {
            if (!Array.isArray(path)) {
              path = path
                .split(/[\[\]\.]+/)
                .join(" ")
                .trim()
                .split(" ");
            }
            return path.reduce((acc, value) => {
              return acc?.[value] ?? defaultValue;
            }, obj);
          };
          `,
        name: "get",
      },
      {
        function:
          '(object, path) => {\n  if (typeof path === "string") {\n    path = path.split(/[\\[\\]\\.]/).filter(Boolean);\n  }\n\n  return path.every(value => {\n    if (value in object) {\n      object = object[value];\n      return true;\n    }\n\n    return false;\n  });\n}',
        name: "has",
      },
      {
        function:
          '(object, path) => {\n  if (typeof path === "string") {\n    path = path.split(/[\\[\\]\\.]/).filter(Boolean);\n  }\n\n  let res = { ...object\n  };\n  let proto = object.__proto__;\n\n  while (proto !== null) {\n    Object.assign(res, proto);\n    proto = proto.__proto__;\n  }\n\n  return path.every(value => {\n    if (value in res) {\n      res = res[value];\n      return true;\n    }\n\n    return false;\n  });\n}',
        name: "hasIn",
      },
      {
        function:
          "object => {\n  return Object.keys(object).reduce((acc, key) => {\n    const value = object[key];\n    acc[value] = key;\n    return acc;\n  }, {});\n}",
        name: "invert",
      },
      {
        function:
          "(object, func) => {\n  return Object.keys(object).reduce((acc, key) => {\n    const value = func ? func(object[key]) : object[key];\n\n    if (!(value in acc)) {\n      acc[value] = [];\n    }\n\n    acc[value].push(key);\n    return acc;\n  }, {});\n}",
        name: "invertBy",
      },
      {
        function: ` (
            obj,
            path,
            ...args
          ) => {
            if (typeof path === "string") {
              path = path.split(/[\[\]\.]/).filter(Boolean);
            }
            let self;
            const res = path.reduce((acc, value) => {
              self = acc;
              return acc?.[value];
            }, obj);
            return args.length && res && typeof res === "function"
              ? res.apply(self, args)
              : res;
          };`,
        name: "invoke",
      },
      {
        function: "obj => Object.keys(obj)",
        name: "keys",
      },
      {
        function:
          "obj => {\n  const res = [];\n\n  for (let key in obj) {\n    res.push(key);\n  }\n\n  return res;\n}",
        name: "keysIn",
      },
      {
        function:
          "(object, func) => {\n  const newObj = {};\n\n  for (let key in object) {\n    const res = func(object[key], key);\n    newObj[res] = object[key];\n  }\n\n  return newObj;\n}",
        name: "mapKeys",
      },
      {
        function:
          '(object, func) => {\n  const getRes = item => typeof func === "function" ? func(item) : item[func];\n\n  const newObj = {};\n\n  for (let key in object) {\n    newObj[key] = getRes(object[key]);\n  }\n\n  return newObj;\n}',
        name: "mapValues",
      },
      {
        function:
          '(object, ...other) => {\n  return other.reduce((acc, obj) => {\n    for (let key in obj) {\n      if (!acc[key]) {\n        acc[key] = [];\n      }\n\n      if (Array.isArray(obj[key])) {\n        for (let i = 0; i < obj[key].length; i++) {\n          acc[key][i] = typeof obj[key][i] === "object" && !Array.isArray(obj[key][i]) ? { ...acc[key][i],\n            ...obj[key][i]\n          } : obj[key][i];\n        }\n      } else {\n        acc[key] = typeof obj[key] === "object" && !Array.isArray(obj[key]) ? { ...acc[key],\n          ...obj[key]\n        } : obj[key];\n      }\n    }\n\n    return acc;\n  }, object);\n}',
        name: "merge",
      },
      {
        function:
          "(object, ...other) => {\n  const customizer = other.pop();\n  return other.reduce((acc, obj) => {\n    for (let key in obj) {\n      if (acc[key]) {\n        acc[key] = customizer(acc[key], obj[key]);\n      } else {\n        acc[key] = customizer(undefined, acc[key]);\n      }\n    }\n\n    return acc;\n  }, object);\n}",
        name: "mergeWith",
      },
      {
        function:
          "(object, ...other) => {\n  other = other.flat();\n  return other.reduce((acc, key) => {\n    if (key in acc) {\n      delete acc[key];\n    }\n\n    return acc;\n  }, object);\n}",
        name: "omit",
      },
      {
        function:
          '(object, func) => {\n  const check = item => typeof func === "function" ? func(item) : item[func];\n\n  return Object.keys(object).reduce((acc, key) => {\n    if (key in acc && check(object[key])) {\n      delete acc[key];\n    }\n\n    return acc;\n  }, object);\n}',
        name: "omitBy",
      },
      {
        function:
          "(object, ...other) => {\n  other = other.flat();\n  return other.reduce((acc, key) => {\n    if (key in object) {\n      acc[key] = object[key];\n    }\n\n    return acc;\n  }, {});\n}",
        name: "pick",
      },
      {
        function:
          '(object, func) => {\n  const check = item => typeof func === "function" ? func(item) : item[func];\n\n  return Object.keys(object).reduce((acc, key) => {\n    if (key in object && check(object[key])) {\n      acc[key] = object[key];\n    }\n\n    return acc;\n  }, {});\n}',
        name: "pickBy",
      },
      {
        function: `(
            obj = {},
            path,
            defaultValue
          ) => {
            if (!Array.isArray(path)) {
              path = path
                .split(/[\[\]\.]+/)
                .join(" ")
                .trim()
                .split(" ");
            }
            const res = path.reduce((acc, value) => {
              return acc?.[value] ?? defaultValue;
            }, obj);
            return typeof res === "function" ? res() : res;
          };`,
        name: "result",
      },
      {
        function:
          '(obj, path, defaultValue) => {\n  const setValue = (acc, key, value) => {\n    acc[key] = value;\n    return acc[key];\n  };\n\n  let res = null;\n\n  if (typeof path === "string") {\n    path = path.split(/[\\[\\]\\.]/).filter(Boolean);\n  }\n\n  path.reduce((acc, key, index, arr) => {\n    if (index === arr.length - 1) {\n      return setValue(acc, key, defaultValue);\n    }\n\n    if (!res) {\n      res = acc;\n    }\n\n    if (key in acc) {\n      return acc[key];\n    }\n\n    return setValue(acc, Object.is(+key, NaN) ? key : +key, isNaN(+arr[index + 1]) ? {} : Array(+arr[index + 1] + 1));\n  }, obj);\n  return res;\n}',
        name: "set",
      },
      {
        function:
          '(obj, path, defaultValue, customizer) => {\n  const setValue = (acc, key, value) => {\n    acc[key] = obj[key] ? customizer(obj[key], value, acc) : value;\n    return acc[key];\n  };\n\n  let res = null;\n\n  if (typeof path === "string") {\n    path = path.split(/[\\[\\]\\.]/).filter(Boolean);\n  }\n\n  path.reduce((acc, key, index, arr) => {\n    if (!res) {\n      res = acc;\n    }\n\n    if (key in acc) {\n      return acc[key];\n    }\n\n    if (index === arr.length - 1) {\n      return setValue(acc, key, defaultValue);\n    }\n\n    return setValue(acc, key, {});\n  }, obj);\n  return res;\n}',
        name: "setWith",
      },
      {
        function: "obj => Object.entries(obj)",
        name: "toPairs",
      },
      {
        function:
          "obj => {\n  const res = [];\n\n  for (let key in obj) {\n    res.push([key, obj[key]]);\n  }\n\n  return res;\n}",
        name: "toPairsIn",
      },
      {
        function:
          "(object, func, initial) => {\n  let count = 0;\n  const isArray = Array.isArray(object);\n  const iterArray = isArray ? object : Object.keys(object);\n  return iterArray.reduce((acc, key, i, ar) => {\n    if (count >= ar.length - i) {\n      return acc;\n    } // if isArray, key is element of array\n\n\n    count += (isArray ? func(acc, key) : func(acc, object[key], key)) ? 1 : 0;\n    return acc;\n  }, initial);\n}",
        name: "transform",
      },
      {
        function: `(object, path) => {
            if (!object || !path) {
              return true;
            }
            if (typeof path === "string") {
              path = path.split(/[\[\]\.]/).filter(Boolean)
            }
            const lastKey = path.pop()
            for (var i = 0; i < path.length; i++) {
              object = object?.[path[i]];
              if (typeof object === 'undefined' || object === null) {
                return true;
              }
            }
          
            return delete object[lastKey!];
          }`,
        name: "unset",
      },
      {
        function:
          '(obj, path, updater) => {\n  const setValue = (acc, key, value) => {\n    acc[key] = value;\n    return acc[key];\n  };\n\n  const updateValue = (acc, key, func) => {\n    acc[key] = func(acc[key]);\n    return acc[key];\n  };\n\n  let res = null;\n\n  if (typeof path === "string") {\n    path = path.split(/[\\[\\]\\.]/).filter(Boolean);\n  }\n\n  path.reduce((acc, key, index, arr) => {\n    if (index === arr.length - 1) {\n      return updateValue(acc, key, updater);\n    }\n\n    if (!res) {\n      res = acc;\n    }\n\n    if (key in acc) {\n      return acc[key];\n    }\n\n    return setValue(acc, Object.is(+key, NaN) ? key : +key, isNaN(+arr[index + 1]) ? {} : Array(+arr[index + 1] + 1));\n  }, obj);\n  return res;\n}',
        name: "update",
      },
      {
        function:
          '(obj, path, updater, customizer) => {\n  const setValue = (acc, key, value) => {\n    acc[key] = obj[key] ? customizer(obj[key], value, acc) : value;\n    return acc[key];\n  };\n\n  const updateValue = (acc, key, func) => {\n    acc[key] = obj[key] ? customizer(func(obj[key]), key, acc) : func(obj[key]);\n    return acc[key];\n  };\n\n  let res = null;\n\n  if (typeof path === "string") {\n    path = path.split(/[\\[\\]\\.]/).filter(Boolean);\n  }\n\n  path.reduce((acc, key, index, arr) => {\n    if (!res) {\n      res = acc;\n    }\n\n    if (key in acc) {\n      return acc[key];\n    }\n\n    if (index === arr.length - 1) {\n      return updateValue(acc, key, updater);\n    }\n\n    return setValue(acc, key, {});\n  }, obj);\n  return res;\n}',
        name: "updateWith",
      },
      {
        function: "obj => Object.values(obj)",
        name: "values",
      },
      {
        function:
          "obj => {\n  const res = [];\n\n  for (let key in obj) {\n    res.push(obj[key]);\n  }\n\n  return res;\n}",
        name: "valuesIn",
      },
    ],
  },
  {
    title: "String",
    items: [
      {
        function:
          '(str = "") => {\n  const regex = /[^\\p{L}]+/gu;\n  return str.replace(regex, " ").trim().split(" ").map((word, i) => {\n    return i == 0 ? word.toLowerCase() : word[0].toUpperCase() + word.substring(1).toLowerCase();\n  }).join("");\n}',
        name: "camelCase",
      },
      {
        function:
          '(word = "") => {\n  return word[0].toUpperCase() + word.substring(1).toLowerCase();\n}',
        name: "capitalize",
      },
      {
        function:
          '(str = "") => str.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "")',
        name: "deburr",
      },
      {
        function:
          '(str = "", target, pos = str.length) => str.endsWith(target, pos)',
        name: "endsWith",
      },
      {
        function: "function escape() { [native code] }",
        name: "escape",
      },
      {
        function:
          '(str: string = "") => {\nconst syms = [\n"^",\n"$",\n".",\n"*",\n"+",\n"?",\n"(",\n")",\n"[",\n"]",\n"{",\n"}",\n"|",\n];\nreturn str.replace(\nnew RegExp(`(${syms.map((sym) => "\\" + sym).join("|")})`, "g"),\n"$&"\n);\n};',
        name: "escapeRegExp",
      },
      {
        function:
          '(str = "") => {\n  const regex = /[^\\p{L}]+/gu;\n  return str.replace(regex, " ").trim().replace(" ", "-").toLowerCase();\n}',
        name: "kebabCase",
      },
      {
        function:
          '(str = "") => {\n  const regex = /[^\\p{L}]+/gu;\n  return str.replace(regex, " ").trim().toLowerCase();\n}',
        name: "lowerCase",
      },
      {
        function: '(str = "") => str[0].toLowerCase() + str.substring(1)',
        name: "lowerFirst",
      },
      {
        function:
          '(str = "", length = 0, chars = " ") => {\n  const leftLen = Math.floor(str.length + (length - str.length) / 2);\n  return str.padStart(leftLen, chars).padEnd(length, chars);\n}',
        name: "pad",
      },
      {
        function:
          '(str = "", length = 0, chars = " ") => {\n  return str.padEnd(length, chars);\n}',
        name: "padEnd",
      },
      {
        function:
          '(str = "", length = 0, chars = " ") => {\n  return str.padStart(length, chars);\n}',
        name: "padStart",
      },
      {
        function: "function parseInt() { [native code] }",
        name: "parseInt",
      },
      {
        function: '(str = "", count = 1) => str.repeat(count)',
        name: "repeat",
      },
      {
        function:
          '(str = "", pattern, replacement) => {\n  return str.replace(pattern, replacement);\n}',
        name: "replace",
      },
      {
        function:
          '(str = "") => {\n  const regex = /[^\\p{L}]+/gu;\n  return str.replace(regex, " ").trim().replace(" ", "_").toLowerCase();\n}',
        name: "snakeCase",
      },
      {
        function:
          '(str = "", sep, limit) => {\n  return str.split(sep, limit);\n}',
        name: "split",
      },
      {
        function:
          '(str = "") => {\n  const regex = /[^\\p{L}]+/gu; // not letter\n\n  const regexUp = /[\\p{Lu}]+/gu; // upper letter\n\n  return str.replace(regexUp, " $&").replace(regex, " ").trim().split(" ").map(item => item[0].toUpperCase() + item.substring(1)).join(" ");\n}',
        name: "startCase",
      },
      {
        function: '(str = "", target, pos = 0) => str.startsWith(target, pos)',
        name: "startsWith",
      },
      {
        function: '(str = "") => str.toLowerCase()',
        name: "toLower",
      },
      {
        function: '(str = "") => str.toUpperCase()',
        name: "toUpper",
      },
      {
        function:
          '(str = "", chars = " ") => {\n  const letterEnd = (_, i) => chars.substring(0, i + 1);\n\n  const letterStart = (_, i) => chars.substring(i);\n\n  const optionLetters = str => Array.from({\n    length: chars.length\n  }, str === "start" ? letterStart : letterEnd).join("|");\n\n  const pattern = `((${chars}){0,}(${optionLetters("end")})|(${optionLetters("start")})(${chars}){0,})`;\n  const regex = new RegExp(`(^${pattern})|(${pattern}$)`, "g");\n  return str.replace(regex, "");\n}',
        name: "trim",
      },
      {
        function:
          '(str = "", chars = " ") => {\n  const letterEnd = (_, i) => chars.substring(0, i + 1);\n\n  const letterStart = (_, i) => chars.substring(i);\n\n  const optionLetters = str => Array.from({\n    length: chars.length\n  }, str === "start" ? letterStart : letterEnd).join("|");\n\n  const pattern = `((${chars}){0,}(${optionLetters("end")})|(${optionLetters("start")})(${chars}){0,})`;\n  const regex = new RegExp(`${pattern}$`, "g");\n  return str.replace(regex, "");\n}',
        name: "trimEnd",
      },
      {
        function:
          '(str = "", chars = " ") => {\n  const letterEnd = (_, i) => chars.substring(0, i + 1);\n\n  const letterStart = (_, i) => chars.substring(i);\n\n  const optionLetters = str => Array.from({\n    length: chars.length\n  }, str === "start" ? letterStart : letterEnd).join("|");\n\n  const pattern = `((${chars}){0,}(${optionLetters("end")})|(${optionLetters("start")})(${chars}){0,})`;\n  const regex = new RegExp(`^${pattern}`, "g");\n  return str.replace(regex, "");\n}',
        name: "trimStart",
      },
      {
        function:
          '(str = "", length) => {\n  return str.length <= length ? str : str.substring(0, length - 3) + "...";\n}',
        name: "truncate",
      },
      {
        function: "function unescape() { [native code] }",
        name: "unescape",
      },
      {
        function:
          '(str = "") => {\n  const regex = /[^\\p{L}]+/gu;\n  return str.replace(regex, " ").trim().toUpperCase();\n}',
        name: "upperCase",
      },
      {
        function: '(str = "") => str[0].toUpperCase() + str.substring(1)',
        name: "upperFirst",
      },
      {
        function:
          '(str = "", pattern = /[\\p{L}]+/gu) => {\n  pattern = typeof pattern === "string" ? new RegExp(`${pattern}`, "g") : new RegExp(pattern.source, pattern.flags.includes("g") ? pattern.flags : pattern.flags + "g");\n  return str.match(pattern);\n}',
        name: "words",
      },
    ],
  },
];

export const categoryItems: ICategoryItem[] = categories.map((c) => ({
  title: c.title,
  items: c.items.map((it) => it.name),
}));

export const res = categories.map((item) => {
  const newItems = item.items.map((func) => {
    return {
      func: func.function.toString(),
      name: func.name,
    };
  });
  return { ...item, items: newItems };
});