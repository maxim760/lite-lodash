export const clump = (number: number, lower: number, upper: number) => {
  return Math.min(Math.max(number, lower), upper);
};

export const inRange = (number: number, start = 0, end?: number) => {
  if (!end) {
    return number < Math.max(start, 0) && number >= Math.min(start, 0);
  }
  return number < Math.max(end, start) && number >= Math.min(start, end);
};

export const random = (start: any = 0, end: any = 1, floating?: boolean) => {
  let flag =
    typeof end === "boolean"
      ? end
      : typeof floating === "boolean"
      ? floating
      : false;
  if (
    !Number.isInteger(start) ||
    (!Number.isInteger(end) && typeof end === "number")
  ) {
    flag = true;
  }
  end = typeof end === "boolean" ? 0 : end;
  if (start > end) {
    let t = start;
    start = end;
    end = t;
  }
  if (flag) {
    return Math.random() * (end - start) + Math.min(start);
  }
  return Math.floor((Math.random() * (end - start + 1) + Math.min(start)));
};
