export const add = (a: number, b: number) => a + b;
export const ceil = (number: number, precision: number = 0) => {
  return Math.ceil(number * 10 ** precision) / 10 ** precision;
};

export const divide = (a: number, b: number) => a / b;

export const floor = (number: number, precision: number = 0) => {
  return Math.floor(number * 10 ** precision) / 10 ** precision;
};

export const max = (array: number[]) =>
  array.length ? Math.max(...array) : undefined;
export const maxBy = (array: any[], func: any) => {
  const getRes = (item: any) =>
    typeof func === "function" ? func(item) : item[func];

  let max = -Infinity;
  let idx = -1;
  for (let i = 0; i < array.length; i++) {
    const res: number = getRes(array[i]);
    if (res > max) {
      max = res;
      idx = i;
    }
  }
  return idx > -1 ? array[idx] : undefined;
};

export const mean = (array: number[]) =>
  array.length
    ? array.reduce((acc, value) => acc + value) / array.length
    : undefined;
export const meanBy = (array: any[], func: any) => {
  if (!array.length) {
    return undefined;
  }
  const getRes = (item: any) => {
    return typeof func === "function" ? func(item) : item[func];
  };
  return array.reduce((acc, value) => acc + getRes(value), 0) / array.length;
};

export const min = (array: number[]) =>
  array.length ? Math.min(...array) : undefined;

export const minBy = (array: any[], func: any) => {
  if (!array.length) {
    return undefined;
  }
  const getRes = (item: any) => {
    return typeof func === "function" ? func(item) : item[func];
  };
  let min = Infinity;
  return array.reduce((acc, value) => {
    const res = getRes(value)
    if (res < min) {
      min = res
      return value
    }
    return acc
  }, array[0]);
};

export const multiply = (a: number, b: number) => a * b;

export const round = (number: number, precision: number = 0) => {
  return Math.round(number * 10 ** precision) / 10 ** precision;
};

export const subtract = (a: number, b: number) => a - b;

export const sum = (array: number[]) =>
  array.reduce((acc, value) => acc + value);

export const sumBy = (array: any[], func: any) => {
  const getRes = (item: any) => {
    return typeof func === "function" ? func(item) : item[func];
  };
  return array.reduce((acc, value) => acc + getRes(value), 0);
};
