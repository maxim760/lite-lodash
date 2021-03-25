import {
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
  differenceWith,
  drop,
  dropRight,
  dropRightWhile,
  dropWhile,
  fill,
  findIndex,
  findLastIndex,
  first,
  flatten,
  flattenDeep,
  flattenDepth,
  fromPairs,
  head,
  indexOf,
  initial,
  intersection,
  intersectionBy,
  intersectionWith,
  last,
  lastIndexOf,
  nth,
  pull,
  pullAll,
  pullAllBy,
  pullAllWith,
  pullAt,
  remove,
  slice,
  sortedIndex,
  sortedIndexBy,
  sortedIndexOf,
  sortedLastIndex,
  sortedLastIndexBy,
  sortedLastIndexOf,
  sortedUniq,
  sortedUniqBy,
  tail,
  take,
  takeRight,
  takeRightWhile,
  takeWhile,
  union,
  unionBy,
  unionWith,
  uniq,
  uniqBy,
  uniqWith,
  unzipWith,
  without,
  xor,
  xorBy,
  xorWith,
  zip,
  zipObject,
  zipObjectDeep,
  zipWith,
  forEach,
  after,
  unzip,
  join,
  reverse,
} from "../function/array";
import {
  countBy,
  every,
  filter,
  find,
  findLast,
  flatMap,
  flatMapDeep,
  flatMapDepth,
  forEachRight,
  groupBy,
  includes,
  invokeMap,
  keyBy,
  map,
  orderBy,
  partition,
  reduce,
  reduceRight,
  reject,
  sample,
  sampleSize,
  shuffle,
  size,
  some,
  sortBy,
} from "../function/collection";
import { now } from "../function/date";
import {
  ary,
  before,
  bind,
  bindKey,
  curry,
  curryRight,
  debounce,
  defer,
  delay,
  flip,
  negate,
  once,
  overArgs,
  partial,
  partialRight,
  rearg,
  rest,
  spread,
  throttle,
  unary,
  wrap,
} from "../function/function";
import {
  castArray,
  clone,
  cloneDeep,
  cloneDeepWith,
  cloneWith,
  conformsTo,
  eq,
  gt,
  gte,
  isArguments,
  isArray,
  isArrayBuffer,
  isArrayLike,
  isArrayLikeObject,
  isBoolean,
  isBuffer,
  isDate,
  isElement,
  isEmpty,
  isEqual,
  isEqualWith,
  isError,
  isFinite,
  isFunction,
  isInteger,
  isLength,
  isMap,
  isMatch,
  isMatchWith,
  isNaN,
  isNil,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isRegExp,
  isSafeInteger,
  isSet,
  isString,
  isSymbol,
  isTypedArray,
  isUndefined,
  isWeakMap,
  isWeakSet,
  lt,
  lte,
  toArray,
  toFinite,
  toInteger,
  toLength,
  toNumber,
  toPlainObject,
  toSafeInteger,
  toString,
} from "../function/lang";
import {
  add,
  ceil,
  divide,
  floor,
  max,
  maxBy,
  mean,
  meanBy,
  min,
  minBy,
  multiply,
  round,
  subtract,
  sum,
  sumBy,
} from "../function/math";
import { clump, inRange, random } from "../function/number";
import {
  assign,
  assignIn,
  assignInWith,
  assignWith,
  at,
  create,
  defaults,
  defaultsDeep,
  findKey,
  findLastKey,
  forIn,
  forInRight,
  forOwn,
  forOwnRight,
  functions,
  functionsIn,
  get,
  has,
  hasIn,
  invert,
  invertBy,
  invoke,
  keys,
  keysIn,
  mapKeys,
  mapValues,
  merge,
  mergeWith,
  omit,
  omitBy,
  pick,
  pickBy,
  result,
  set,
  setWith,
  toPairs,
  toPairsIn,
  transform,
  unset,
  update,
  updateWith,
  values,
  valuesIn,
} from "../function/object";
import {
  camelCase,
  capitalize,
  deburr,
  endsWith,
  escapeRegExp,
  kebabCase,
  lowerCase,
  lowerFirst,
  pad,
  padEnd,
  padStart,
  repeat,
  replace,
  snakeCase,
  split,
  startCase,
  startsWith,
  toLower,
  toUpper,
  trim,
  trimEnd,
  trimStart,
  truncate,
  upperCase,
  upperFirst,
  words,
} from "../function/string";

export type IItem = {
  name: string;
  function: Function;
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
        name: "chunk",
        function: chunk,
      },
      {
        name: "compact",
        function: compact,
      },
      {
        name: "concat",
        function: concat,
      },
      {
        name: "difference",
        function: difference,
      },
      {
        name: "differenceBy",
        function: differenceBy,
      },
      {
        name: "differenceWith",
        function: differenceWith,
      },
      {
        name: "drop",
        function: drop,
      },
      {
        name: "dropRight",
        function: dropRight,
      },
      {
        name: "dropRightWhile",
        function: dropRightWhile,
      },
      {
        name: "dropWhile",
        function: dropWhile,
      },
      {
        name: "fill",
        function: fill,
      },
      {
        name: "findIndex",
        function: findIndex,
      },
      {
        name: "findLastIndex",
        function: findLastIndex,
      },
      {
        name: "first",
        function: first,
      },
      {
        name: "flatten",
        function: flatten,
      },
      {
        name: "flattenDeep",
        function: flattenDeep,
      },
      {
        name: "flattenDepth",
        function: flattenDepth,
      },
      {
        name: "fromPairs",
        function: fromPairs,
      },
      {
        name: "head",
        function: head,
      },
      {
        name: "indexOf",
        function: indexOf,
      },
      {
        name: "initial",
        function: initial,
      },
      {
        name: "intersection",
        function: intersection,
      },
      {
        name: "intersectionBy",
        function: intersectionBy,
      },
      {
        name: "intersectionWith",
        function: intersectionWith,
      },
      {
        name: "join",
        function: join,
      },
      {
        name: "last",
        function: last,
      },
      {
        name: "lastIndexOf",
        function: lastIndexOf,
      },
      {
        name: "nth",
        function: nth,
      },
      {
        name: "pull",
        function: pull,
      },
      {
        name: "pullAll",
        function: pullAll,
      },
      {
        name: "pullAllBy",
        function: pullAllBy,
      },
      {
        name: "pullAllWith",
        function: pullAllWith,
      },
      {
        name: "pullAt",
        function: pullAt,
      },
      {
        name: "remove",
        function: remove,
      },
      {
        name: "reverse",
        function: reverse,
      },
      {
        name: "slice",
        function: slice,
      },
      {
        name: "sortedIndex",
        function: sortedIndex,
      },
      {
        name: "sortedIndexBy",
        function: sortedIndexBy,
      },
      {
        name: "sortedIndexOf",
        function: sortedIndexOf,
      },
      {
        name: "sortedLastIndex",
        function: sortedLastIndex,
      },
      {
        name: "sortedLastIndexBy",
        function: sortedLastIndexBy,
      },
      {
        name: "sortedLastIndexOf",
        function: sortedLastIndexOf,
      },
      {
        name: "sortedUniq",
        function: sortedUniq,
      },
      {
        name: "sortedUniqBy",
        function: sortedUniqBy,
      },
      {
        name: "tail",
        function: tail,
      },
      {
        name: "take",
        function: take,
      },
      {
        name: "takeRight",
        function: takeRight,
      },
      {
        name: "takeRightWhile",
        function: takeRightWhile,
      },
      {
        name: "takeWhile",
        function: takeWhile,
      },
      {
        name: "union",
        function: union,
      },
      {
        name: "unionBy",
        function: unionBy,
      },
      {
        name: "unionWith",
        function: unionWith,
      },
      {
        name: "uniq",
        function: uniq,
      },
      {
        name: "uniqBy",
        function: uniqBy,
      },
      {
        name: "uniqWith",
        function: uniqWith,
      },
      {
        name: "unzip",
        function: unzip,
      },
      {
        name: "unzipWith",
        function: unzipWith,
      },
      {
        name: "without",
        function: without,
      },
      {
        name: "xor",
        function: xor,
      },
      {
        name: "xorBy",
        function: xorBy,
      },
      {
        name: "xorWith",
        function: xorWith,
      },
      {
        name: "zip",
        function: zip,
      },
      {
        name: "zipObject",
        function: zipObject,
      },
      {
        name: "zipObjectDeep",
        function: zipObjectDeep,
      },
      {
        name: "zipWith",
        function: zipWith,
      },
    ],
  },
  {
    title: "Collection",
    items: [
      {
        name: "countBy",
        function: countBy,
      },
      {
        name: "every",
        function: every,
      },
      {
        name: "filter",
        function: filter,
      },
      {
        name: "find",
        function: find,
      },
      {
        name: "findLast",
        function: findLast,
      },
      {
        name: "flatMap",
        function: flatMap,
      },
      {
        name: "flatMapDeep",
        function: flatMapDeep,
      },
      {
        name: "flatMapDepth",
        function: flatMapDepth,
      },
      {
        name: "forEach",
        function: forEach,
      },
      {
        name: "forEachRight",
        function: forEachRight,
      },
      {
        name: "groupBy",
        function: groupBy,
      },
      {
        name: "includes",
        function: includes,
      },
      {
        name: "invokeMap",
        function: invokeMap,
      },
      {
        name: "keyBy",
        function: keyBy,
      },
      {
        name: "map",
        function: map,
      },
      {
        name: "orderBy",
        function: orderBy,
      },
      {
        name: "partition",
        function: partition,
      },
      {
        name: "reduce",
        function: reduce,
      },
      {
        name: "reduceRight",
        function: reduceRight,
      },
      {
        name: "reject",
        function: reject,
      },
      {
        name: "sample",
        function: sample,
      },
      {
        name: "sampleSize",
        function: sampleSize,
      },
      {
        name: "shuffle",
        function: shuffle,
      },
      {
        name: "size",
        function: size,
      },
      {
        name: "some",
        function: some,
      },
      {
        name: "sortBy",
        function: sortBy,
      },
    ],
  },
  {
    title: "Date",
    items: [
      {
        name: "now",
        function: now,
      },
    ],
  },
  {
    title: "Function",
    items: [
      {
        name: "after",
        function: after,
      },
      {
        name: "ary",
        function: ary,
      },
      {
        name: "before",
        function: before,
      },
      {
        name: "bind",
        function: bind,
      },
      {
        name: "bindKey",
        function: bindKey,
      },
      {
        name: "curry",
        function: curry,
      },
      {
        name: "curryRight",
        function: curryRight,
      },
      {
        name: "debounce",
        function: debounce,
      },
      {
        name: "defer",
        function: defer,
      },
      {
        name: "delay",
        function: delay,
      },
      {
        name: "flip",
        function: flip,
      },
      {
        name: "negate",
        function: negate,
      },
      {
        name: "once",
        function: once,
      },
      {
        name: "overArgs",
        function: overArgs,
      },
      {
        name: "partial",
        function: partial,
      },
      {
        name: "partialRight",
        function: partialRight,
      },
      {
        name: "rearg",
        function: rearg,
      },
      {
        name: "rest",
        function: rest,
      },
      {
        name: "spread",
        function: spread,
      },
      {
        name: "throttle",
        function: throttle,
      },
      {
        name: "unary",
        function: unary,
      },
      {
        name: "wrap",
        function: wrap,
      },
    ],
  },
  {
    title: "Lang",
    items: [
      {
        name: "castArray",
        function: castArray,
      },
      {
        name: "clone",
        function: clone,
      },
      {
        name: "cloneDeep",
        function: cloneDeep,
      },
      {
        name: "cloneDeepWith",
        function: cloneDeepWith,
      },
      {
        name: "cloneWith",
        function: cloneWith,
      },
      {
        name: "conformsTo",
        function: conformsTo,
      },
      {
        name: "eq",
        function: eq,
      },
      {
        name: "gt",
        function: gt,
      },
      {
        name: "gte",
        function: gte,
      },
      {
        name: "isArguments",
        function: isArguments,
      },
      {
        name: "isArray",
        function: isArray,
      },
      {
        name: "isArrayBuffer",
        function: isArrayBuffer,
      },
      {
        name: "isArrayLike",
        function: isArrayLike,
      },
      {
        name: "isArrayLikeObject",
        function: isArrayLikeObject,
      },
      {
        name: "isBoolean",
        function: isBoolean,
      },
      {
        name: "isBuffer",
        function: isBuffer,
      },
      {
        name: "isDate",
        function: isDate,
      },
      {
        name: "isElement",
        function: isElement,
      },
      {
        name: "isEmpty",
        function: isEmpty,
      },
      {
        name: "isEqual",
        function: isEqual,
      },
      {
        name: "isEqualWith",
        function: isEqualWith,
      },
      {
        name: "isError",
        function: isError,
      },
      {
        name: "isFinite",
        function: isFinite,
      },
      {
        name: "isFunction",
        function: isFunction,
      },
      {
        name: "isInteger",
        function: isInteger,
      },
      {
        name: "isLength",
        function: isLength,
      },
      {
        name: "isMap",
        function: isMap,
      },
      {
        name: "isMatch",
        function: isMatch,
      },
      {
        name: "isMatchWith",
        function: isMatchWith,
      },
      {
        name: "isNaN",
        function: isNaN,
      },
      {
        name: "isNil",
        function: isNil,
      },
      {
        name: "isNull",
        function: isNull,
      },
      {
        name: "isNumber",
        function: isNumber,
      },
      {
        name: "isObject",
        function: isObject,
      },
      {
        name: "isObjectLike",
        function: isObjectLike,
      },
      {
        name: "isPlainObject",
        function: isPlainObject,
      },
      {
        name: "isRegExp",
        function: isRegExp,
      },
      {
        name: "isSafeInteger",
        function: isSafeInteger,
      },
      {
        name: "isSet",
        function: isSet,
      },
      {
        name: "isString",
        function: isString,
      },
      {
        name: "isSymbol",
        function: isSymbol,
      },
      {
        name: "isTypedArray",
        function: isTypedArray,
      },
      {
        name: "isUndefined",
        function: isUndefined,
      },
      {
        name: "isWeakMap",
        function: isWeakMap,
      },
      {
        name: "isWeakSet",
        function: isWeakSet,
      },
      {
        name: "lt",
        function: lt,
      },
      {
        name: "lte",
        function: lte,
      },
      {
        name: "toArray",
        function: toArray,
      },
      {
        name: "toFinite",
        function: toFinite,
      },
      {
        name: "toInteger",
        function: toInteger,
      },
      {
        name: "toLength",
        function: toLength,
      },
      {
        name: "toNumber",
        function: toNumber,
      },
      {
        name: "toPlainObject",
        function: toPlainObject,
      },
      {
        name: "toSafeInteger",
        function: toSafeInteger,
      },
      {
        name: "toString",
        function: toString,
      },
    ],
  },
  {
    title: "Math",
    items: [
      {
        name: "add",
        function: add,
      },
      {
        name: "ceil",
        function: ceil,
      },
      {
        name: "divide",
        function: divide,
      },
      {
        name: "floor",
        function: floor,
      },
      {
        name: "max",
        function: max,
      },
      {
        name: "maxBy",
        function: maxBy,
      },
      {
        name: "mean",
        function: mean,
      },
      {
        name: "meanBy",
        function: meanBy,
      },
      {
        name: "min",
        function: min,
      },
      {
        name: "minBy",
        function: minBy,
      },
      {
        name: "multiply",
        function: multiply,
      },
      {
        name: "round",
        function: round,
      },
      {
        name: "subtract",
        function: subtract,
      },
      {
        name: "sum",
        function: sum,
      },
      {
        name: "sumBy",
        function: sumBy,
      },
    ],
  },
  {
    title: "Number",
    items: [
      {
        name: "clump",
        function: clump,
      },
      {
        name: "inRange",
        function: inRange,
      },
      {
        name: "random",
        function: random,
      },
    ],
  },
  {
    title: "Object",
    items: [
      {
        name: "assign",
        function: assign,
      },
      {
        name: "assignIn",
        function: assignIn,
      },
      {
        name: "assignInWith",
        function: assignInWith,
      },
      {
        name: "assignWith",
        function: assignWith,
      },
      {
        name: "at",
        function: at,
      },
      {
        name: "create",
        function: create,
      },
      {
        name: "defaults",
        function: defaults,
      },
      {
        name: "defaultsDeep",
        function: defaultsDeep,
      },
      {
        name: "findKey",
        function: findKey,
      },
      {
        name: "findLastKey",
        function: findLastKey,
      },
      {
        name: "forIn",
        function: forIn,
      },
      {
        name: "forInRight",
        function: forInRight,
      },
      {
        name: "forOwn",
        function: forOwn,
      },
      {
        name: "forOwnRight",
        function: forOwnRight,
      },
      {
        name: "functions",
        function: functions,
      },
      {
        name: "functionsIn",
        function: functionsIn,
      },
      {
        name: "get",
        function: get,
      },
      {
        name: "has",
        function: has,
      },
      {
        name: "hasIn",
        function: hasIn,
      },
      {
        name: "invert",
        function: invert,
      },
      {
        name: "invertBy",
        function: invertBy,
      },
      {
        name: "invoke",
        function: invoke,
      },
      {
        name: "keys",
        function: keys,
      },
      {
        name: "keysIn",
        function: keysIn,
      },
      {
        name: "mapKeys",
        function: mapKeys,
      },
      {
        name: "mapValues",
        function: mapValues,
      },
      {
        name: "merge",
        function: merge,
      },
      {
        name: "mergeWith",
        function: mergeWith,
      },
      {
        name: "omit",
        function: omit,
      },
      {
        name: "omitBy",
        function: omitBy,
      },
      {
        name: "pick",
        function: pick,
      },
      {
        name: "pickBy",
        function: pickBy,
      },
      {
        name: "result",
        function: result,
      },
      {
        name: "set",
        function: set,
      },
      {
        name: "setWith",
        function: setWith,
      },
      {
        name: "toPairs",
        function: toPairs,
      },
      {
        name: "toPairsIn",
        function: toPairsIn,
      },
      {
        name: "transform",
        function: transform,
      },
      {
        name: "unset",
        function: unset,
      },
      {
        name: "update",
        function: update,
      },
      {
        name: "updateWith",
        function: updateWith,
      },
      {
        name: "values",
        function: values,
      },
      {
        name: "valuesIn",
        function: valuesIn,
      },
    ],
  },
  {
    title: "String",
    items: [
      {
        name: "camelCase",
        function: camelCase,
      },
      {
        name: "capitalize",
        function: capitalize,
      },
      {
        name: "deburr",
        function: deburr,
      },
      {
        name: "endsWith",
        function: endsWith,
      },
      {
        name: "escape",
        function: escape,
      },
      {
        name: "escapeRegExp",
        function: escapeRegExp,
      },
      {
        name: "kebabCase",
        function: kebabCase,
      },
      {
        name: "lowerCase",
        function: lowerCase,
      },
      {
        name: "lowerFirst",
        function: lowerFirst,
      },
      {
        name: "pad",
        function: pad,
      },
      {
        name: "padEnd",
        function: padEnd,
      },
      {
        name: "padStart",
        function: padStart,
      },
      {
        name: "parseInt",
        function: parseInt,
      },
      {
        name: "repeat",
        function: repeat,
      },
      {
        name: "replace",
        function: replace,
      },
      {
        name: "snakeCase",
        function: snakeCase,
      },
      {
        name: "split",
        function: split,
      },
      {
        name: "startCase",
        function: startCase,
      },
      {
        name: "startsWith",
        function: startsWith,
      },
      {
        name: "toLower",
        function: toLower,
      },
      {
        name: "toUpper",
        function: toUpper,
      },
      {
        name: "trim",
        function: trim,
      },
      {
        name: "trimEnd",
        function: trimEnd,
      },
      {
        name: "trimStart",
        function: trimStart,
      },
      {
        name: "truncate",
        function: truncate,
      },
      {
        name: "unescape",
        function: unescape,
      },
      {
        name: "upperCase",
        function: upperCase,
      },
      {
        name: "upperFirst",
        function: upperFirst,
      },
      {
        name: "words",
        function: words,
      },
    ],
  },
];

export const categoryItems: ICategoryItem[] = categories.map((c) => ({
  title: c.title,
  items: c.items.map((it) => it.name),
}));


const res = categories.map(item => {
  return item.items.map(func => func.function.toString())
})
console.log(res)
