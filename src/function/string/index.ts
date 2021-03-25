export const camelCase = (str: string = "") => {
  const regex = /[^\p{L}]+/gu;
  return str
    .replace(regex, " ")
    .trim()
    .split(" ")
    .map((word, i) => {
      return i == 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.substring(1).toLowerCase();
    })
    .join("");
};

export const capitalize = (word: string = "") => {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
};

export const deburr = (str: string = "") =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const endsWith = (str: string = "", target: string, pos = str.length) =>
  str.endsWith(target, pos);

export const escape = (str: string = "") => {
  type IEscapes = {
    "&": string;
    "<": string;
    ">": string;
    '"': string;
    "'": string;
  };
  const escapes: IEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  const keys = Object.keys(escapes);
  return str.replace(
    new RegExp(`[${keys.join("|")}]`, "g"),
    (key) => escapes[key as keyof IEscapes]
  );
};

// чекнкуть с String.raw`` TODO
export const escapeRegExp = (str: string = "") => {
  const syms = [
    "^",
    "$",
    ".",
    "*",
    "+",
    "?",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "|",
  ];
  return str.replace(
    new RegExp(`(${syms.map((sym) => "\\" + sym).join("|")})`, "g"),
    "$&"
  );
};

export const kebabCase = (str: string = "") => {
  const regex = /[^\p{L}]+/gu;
  return str.replace(regex, " ").trim().replace(" ", "-").toLowerCase();
};

export const lowerCase = (str: string = "") => {
  const regex = /[^\p{L}]+/gu;
  return str.replace(regex, " ").trim().toLowerCase();
};

export const lowerFirst = (str: string = "") =>
  str[0].toLowerCase() + str.substring(1);

export const pad = (
  str: string = "",
  length: number = 0,
  chars: string = " "
) => {
  const leftLen = Math.floor(str.length + (length - str.length) / 2);
  return str.padStart(leftLen, chars).padEnd(length, chars);
};

export const padEnd = (
  str: string = "",
  length: number = 0,
  chars: string = " "
) => {
  return str.padEnd(length, chars);
};
export const padStart = (
  str: string = "",
  length: number = 0,
  chars: string = " "
) => {
  return str.padStart(length, chars);
};

export const parseIntLodash = (str: string, radix: number = 10) =>
  parseInt(str, radix);

export const repeat = (str: string = "", count: number = 1) =>
  str.repeat(count);

export const replace = (
  str: string = "",
  pattern: string | RegExp,
  replacement: any
) => {
  return str.replace(pattern, replacement);
};

export const snakeCase = (str: string = "") => {
  const regex = /[^\p{L}]+/gu;
  return str.replace(regex, " ").trim().replace(" ", "_").toLowerCase();
};

export const split = (str: string = "", sep: string, limit?: number) => {
  return str.split(sep, limit);
};

export const startCase = (str: string = "") => {
  const regex = /[^\p{L}]+/gu; // not letter
  const regexUp = /[\p{Lu}]+/gu; // upper letter
  return str
    .replace(regexUp, " $&")
    .replace(regex, " ")
    .trim()
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join(" ")
};

export const startsWith = (str: string = "", target: string, pos = 0) =>
  str.startsWith(target, pos);

export const toLower = (str: string = "") => str.toLowerCase();
export const toUpper = (str: string = "") => str.toUpperCase();

export const trim = (str: string = "", chars: string = " ") => {
  const letterEnd = (_: any, i: number) => chars.substring(0, i + 1);
  const letterStart = (_: any, i: number) => chars.substring(i);
  const optionLetters = (str: "start" | "end") =>
    Array.from(
      { length: chars.length },
      str === "start" ? letterStart : letterEnd
    ).join("|");

  const pattern = `((${chars}){0,}(${optionLetters("end")})|(${optionLetters(
    "start"
  )})(${chars}){0,})`;
  const regex = new RegExp(`(^${pattern})|(${pattern}$)`, "g");
  return str.replace(regex, "");
};

export const trimEnd = (str: string = "", chars: string = " ") => {
  const letterEnd = (_: any, i: number) => chars.substring(0, i + 1);
  const letterStart = (_: any, i: number) => chars.substring(i);
  const optionLetters = (str: "start" | "end") =>
    Array.from(
      { length: chars.length },
      str === "start" ? letterStart : letterEnd
    ).join("|");

  const pattern = `((${chars}){0,}(${optionLetters("end")})|(${optionLetters(
    "start"
  )})(${chars}){0,})`;
  const regex = new RegExp(`${pattern}$`, "g");
  return str.replace(regex, "");
};

export const trimStart = (str: string = "", chars: string = " ") => {
  const letterEnd = (_: any, i: number) => chars.substring(0, i + 1);
  const letterStart = (_: any, i: number) => chars.substring(i);
  const optionLetters = (str: "start" | "end") =>
    Array.from(
      { length: chars.length },
      str === "start" ? letterStart : letterEnd
    ).join("|");

  const pattern = `((${chars}){0,}(${optionLetters("end")})|(${optionLetters(
    "start"
  )})(${chars}){0,})`;
  const regex = new RegExp(`^${pattern}`, "g");
  return str.replace(regex, "");
};

export const truncate = (str: string = "", length: number) => {
  return str.length <= length ? str : str.substring(0, length - 3) + "...";
};

export const unescape = (str: string = "") => {
  type IUnescapes = {
    "&amp;": string;
    "&lt;": string;
    "&gt;": string;
    "&quot;": string;
    "&#39;": string;
  };
  const unescapes: IUnescapes = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
  };
  const keys = Object.keys(unescapes);
  return str.replace(
    new RegExp(`(${keys.join("|")})`, "g"),
    (key) => unescapes[key as keyof IUnescapes]
  );
};

export const upperCase = (str: string = "") => {
  const regex = /[^\p{L}]+/gu;
  return str.replace(regex, " ").trim().toUpperCase();
};

export const upperFirst = (str: string = "") =>
  str[0].toUpperCase() + str.substring(1);

export const words = (
  str: string = "",
  pattern: string | RegExp = /[\p{L}]+/gu
) => {
  pattern =
    typeof pattern === "string"
      ? new RegExp(`${pattern}`, "g")
      : new RegExp(
          pattern.source,
          pattern.flags.includes("g") ? pattern.flags : pattern.flags + "g"
        );

  return str.match(pattern);
};
