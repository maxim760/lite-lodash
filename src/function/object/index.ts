export const assign = (obj: object, ...other: object[]) => {
  return Object.assign(obj, ...other);
};

export const assignIn = (obj: any, ...other: any[]) => {
  other = other.map((item) => {
    const res = { ...item };
    let proto = item.__proto__;
    while (proto !== null) {
      Object.assign(res, proto);
      proto = proto.__proto__;
    }
    return res;
  });
  return Object.assign(obj, ...other);
};

export const assignWith = (initial: object, ...other: any[]) => {
  const customizer = other.pop();
  return other.reduce((acc, value) => {
    for (const key in value) {
      acc[key] = customizer(acc[key], value[key]);
    }
    return acc;
  }, initial);
};

export const assignInWith = (initial: any, ...other: any[]) => {
  const customizer = other.pop();
  other = other.map((item) => {
    let res = { ...item };
    let proto = item.__proto__;
    while (proto !== null) {
      res = Object.assign({}, proto, res);
      proto = proto.__proto__;
    }
    return res;
  });
  return other.reduce((acc, value) => {
    for (const key in value) {
      acc[key] = customizer(acc[key], value[key]);
    }
    return acc;
  }, initial);
};

export const at = (object: { [key: string]: any } = {}, paths: any[]) => {
  return paths.map((path: string) => {
    const arrPath = path
      .split(/[\[\]\.]+/)
      .join(" ")
      .trim()
      .split(" ");
    return arrPath.reduce((acc, value) => {
      return acc?.[value] ?? acc?.[+value];
    }, object);
  });
};

export const create = (prot: any, props?: any) => {
  return Object.create(prot, props);
};

export const defaults = (...objects: any[]) => {
  return objects.reduceRight((acc, value) => {
    for (const key in value) {
      acc[key] = value[key];
    }
    return acc;
  });
};
export const defaultsDeep = (...objects: any[]) => {
  return objects.reduceRight((acc, value) => {
    for (const key in value) {
      if (typeof value[key] !== "object") {
        acc[key] = value[key];
      } else {
        acc[key] = defaultsDeep(value[key], acc[key]);
      }
    }
    return acc;
  }, {});
};





export const findKey = (obj: { [key: string]: any }, predicate: any) => {
  const check = (item: any) =>
    typeof predicate === "function"
      ? predicate(item)
      : typeof predicate === "string"
      ? item === predicate.toString() || item[predicate] === true
      : Array.isArray(predicate)
      ? Object.keys(item).some(
          (compKey) =>
            compKey === predicate[0] && item[compKey] === predicate[1]
        )
      : Object.keys(predicate).every(
          (compKey) => item[compKey] === predicate[compKey] && compKey in item
        );

  return Object.keys(obj).find((key) => check(obj[key]));
};

export const findLastKey = (obj: { [key: string]: any }, predicate: any) => {
  const check = (item: any) =>
    typeof predicate === "function"
      ? predicate(item)
      : typeof predicate === "string"
      ? item === predicate.toString() || item[predicate] === true
      : Array.isArray(predicate)
      ? Object.keys(item).some(
          (compKey) =>
            compKey === predicate[0] && item[compKey] === predicate[1]
        )
      : Object.keys(predicate).every(
          (compKey) => item[compKey] === predicate[compKey] && compKey in item
        );

  return Object.keys(obj)
    .reverse()
    .find((key) => check(obj[key]));
};

export const forIn = (obj: any, func: any) => {
  Object.keys(obj).forEach((key) => {
    func(obj[key], key);
  });
  if (obj.__proto__) {
    forIn(obj.__proto__, func);
  }
};

export const forInRight = (obj: any, func: any) => {
  if (obj.__proto__) {
    forIn(obj.__proto__, func);
  }
  Object.keys(obj)
    .reverse()
    .forEach((key) => {
      func(obj[key], key);
    });
};

export const forOwn = (obj: any, func: any) => {
  Object.keys(obj).forEach((key) => {
    func(obj[key], key);
  });
};

export const forOwnRight = (obj: any, func: any) => {
  Object.keys(obj)
    .reverse()
    .forEach((key) => {
      func(obj[key], key);
    });
};

export const functions = (obj: { [key: string]: any }) => {
  return Object.keys(obj).filter((key) => typeof obj[key] === "function");
};

export const functionsIn = (obj: { [key: string]: any }) => {
  const res = Object.keys(obj).filter((key) => typeof obj[key] === "function");
  obj.__proto__ && res.push(...functionsIn(obj.__proto__));
  return res;
};

export const get = (
  obj: { [key: string]: any } = {},
  path: string[] | string,
  defaultValue?: string
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

export const has = (
  object: { [key: string]: any },
  path: string | string[]
) => {
  if (typeof path === "string") {
    path = path.split(/[\[\]\.]/).filter(Boolean);
  }
  return path.every((value) => {
    if (value in object) {
      object = object[value];
      return true;
    }
    return false;
  });
};

export const hasIn = (
  object: { [key: string]: any },
  path: string | string[]
) => {
  if (typeof path === "string") {
    path = path.split(/[\[\]\.]/).filter(Boolean);
  }
  let res = { ...object };
  let proto = object.__proto__;
  while (proto !== null) {
    Object.assign(res, proto);
    proto = proto.__proto__;
  }
  return path.every((value) => {
    if (value in res) {
      res = res[value];
      return true;
    }
    return false;
  });
};

export const invert = (object: { [key: string]: any }) => {
  return Object.keys(object).reduce((acc: { [key: string]: string }, key) => {
    const value = object[key];
    acc[value] = key;
    return acc;
  }, {});
};

export const invertBy = (
  object: { [key: string]: any },
  func?: (arg: string) => string
) => {
  return Object.keys(object).reduce((acc: { [key: string]: string[] }, key) => {
    const value = func ? func(object[key]) : object[key];
    if (!(value in acc)) {
      acc[value] = [];
    }
    acc[value].push(key);
    return acc;
  }, {});
};

export const invoke = (
  obj: { [key: string]: any },
  path: string | string[],
  ...args: any[]
) => {
  if (typeof path === "string") {
    path = path.split(/[\[\]\.]/).filter(Boolean);
  }
  let self;
  const res = path.reduce((acc: { [key: string]: any }, value) => {
    self = acc;
    return acc?.[value];
  }, obj);
  return args.length && res && typeof res === "function"
    ? res.apply(self, args)
    : res;
};

export const keys = (obj: any) => Object.keys(obj);

export const keysIn = (obj: { [key: string]: any }) => {
  const res = [];
  for (let key in obj) {
    res.push(key);
  }
  return res;
};

export const mapKeys = (object: { [key: string]: any }, func: Function) => {
  const newObj: { [key: string]: any } = {};
  for (let key in object) {
    const res = func(object[key], key);
    newObj[res] = object[key];
  }
  return newObj;
};

export const mapValues = (object: { [key: string]: any }, func: any) => {
  const getRes = (item: any) =>
    typeof func === "function" ? func(item) : item[func];
  const newObj: { [key: string]: any } = {};
  for (let key in object) {
    newObj[key] = getRes(object[key]);
  }
  return newObj;
};

export const merge = (object: { [key: string]: any }, ...other: any[]) => {
  return other.reduce((acc, obj) => {
    for (let key in obj) {
      if (!acc[key]) {
        acc[key] = [];
      }
      if (Array.isArray(obj[key])) {
        for (let i = 0; i < obj[key].length; i++) {
          acc[key][i] =
            typeof obj[key][i] === "object" && !Array.isArray(obj[key][i])
              ? { ...acc[key][i], ...obj[key][i] }
              : obj[key][i];
        }
      } else {
        acc[key] =
          typeof obj[key] === "object" && !Array.isArray(obj[key])
            ? { ...acc[key], ...obj[key] }
            : obj[key];
      }
    }
    return acc;
  }, object);
};

export const mergeWith = (object: { [key: string]: any }, ...other: any[]) => {
  const customizer = other.pop();
  return other.reduce((acc, obj) => {
    for (let key in obj) {
      if (acc[key]) {
        acc[key] = customizer(acc[key], obj[key]);
      } else {
        acc[key] = customizer(undefined, acc[key]);
      }
    }
    return acc;
  }, object);
};

export const omit = (object: { [key: string]: any }, ...other: any) => {
  other = other.flat();
  return other.reduce((acc: { [key: string]: any }, key: string) => {
    if (key in acc) {
      delete acc[key];
    }
    return acc;
  }, object);
};

export const omitBy = (object: { [key: string]: any }, func: any) => {
  const check = (item: any) =>
    typeof func === "function" ? func(item) : item[func];

  return Object.keys(object).reduce((acc, key) => {
    if (key in acc && check(object[key])) {
      delete acc[key];
    }
    return acc;
  }, object);
};

export const pick = (object: { [key: string]: any }, ...other: any[]) => {
  other = other.flat();
  return other.reduce((acc: { [key: string]: any }, key: string) => {
    if (key in object) {
      acc[key] = object[key];
    }
    return acc;
  }, {});
};

export const pickBy = (object: { [key: string]: any }, func: any) => {
  const check = (item: any) =>
    typeof func === "function" ? func(item) : item[func];

  return Object.keys(object).reduce(
    (acc: { [key: string]: any }, key: string) => {
      if (key in object && check(object[key])) {
        acc[key] = object[key];
      }
      return acc;
    },
    {}
  );
};

export const result = (
  obj: { [key: string]: any } = {},
  path: string[] | string,
  defaultValue?: any
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
};

export const set = (
  obj: { [key: string]: any },
  path: string | string[],
  defaultValue: any
) => {
  const setValue = (acc: any, key: any, value: any) => {
    acc[key] = value;
    return acc[key];
  };

  let res: any = null;
  if (typeof path === "string") {
    path = path.split(/[\[\]\.]/).filter(Boolean);
  }
  path.reduce((acc: any, key: any, index: number, arr) => {
    if (index === arr.length - 1) {
      return setValue(acc, key, defaultValue);
    }
    if (!res) {
      res = acc;
    }
    if (key in acc) {
      return acc[key];
    }
    return setValue(
      acc,
      Object.is(+key, NaN) ? key : +key,
      isNaN(+arr[index + 1]) ? {} : Array(+arr[index + 1] + 1)
    );
  }, obj);
  return res;
};

export const setWith = (
  obj: { [key: string]: any },
  path: string | string[],
  defaultValue: any,
  customizer: Function
) => {
  const setValue = (acc: any, key: any, value: any) => {
    acc[key] = obj[key] ? customizer(obj[key], value, acc) : value;
    return acc[key];
  };

  let res: any = null;
  if (typeof path === "string") {
    path = path.split(/[\[\]\.]/).filter(Boolean);
  }
  path.reduce((acc: any, key: any, index: number, arr) => {
    if (!res) {
      res = acc;
    }
    if (key in acc) {
      return acc[key];
    }
    if (index === arr.length - 1) {
      return setValue(acc, key, defaultValue);
    }
    return setValue(acc, key, {});
  }, obj);
  return res;
};

export const toPairs = (obj: object) => Object.entries(obj);
export const toPairsIn = (obj: { [key: string]: any }) => {
  const res = [];
  for (let key in obj) {
    res.push([key, obj[key]]);
  }
  return res;
};

export const transform = (object: any, func: Function, initial: any) => {
  let count = 0;
  const isArray = Array.isArray(object);
  const iterArray = isArray ? object : Object.keys(object);
  return iterArray.reduce((acc: any, key: string, i: number, ar: any[]) => {
    if (count >= ar.length - i) {
      return acc;
    }
    // if isArray, key is element of array
    count += (isArray ? func(acc, key) : func(acc, object[key], key)) ? 1 : 0;
    return acc;
  }, initial);
};


export const unset = (object: any, path: string | string[]) => {
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
}

export const update = (obj: object, path: string | string[], updater: Function) => {

  const setValue = (acc: any, key: any, value: any) => {
    acc[key] = value;
    return acc[key];
  };
  const updateValue = (acc: any, key: any, func: Function) => {
    acc[key] = func(acc[key]);
    return acc[key];
  };

  let res: any = null;
  if (typeof path === "string") {
    path = path.split(/[\[\]\.]/).filter(Boolean);
  }
  path.reduce((acc: any, key: any, index: number, arr) => {
    if (index === arr.length - 1) {
      return updateValue(acc, key, updater);
    }
    if (!res) {
      res = acc;
    }
    if (key in acc) {
      return acc[key];
    }
    return setValue(
      acc,
      Object.is(+key, NaN) ? key : +key,
      isNaN(+arr[index + 1]) ? {} : Array(+arr[index + 1] + 1)
    );
  }, obj);
  return res;
}

export const updateWith = (
  obj: { [key: string]: any },
  path: string | string[],
  updater: Function,
  customizer: Function
) => {
  const setValue = (acc: any, key: any, value: any) => {
    acc[key] = obj[key] ? customizer(obj[key], value, acc) : value;
    return acc[key];
  };
  const updateValue = (acc: any, key: any, func: any) => {
    acc[key] = obj[key] ? customizer(func(obj[key]), key, acc) : func(obj[key]);
    return acc[key];
  };

  let res: any = null;
  if (typeof path === "string") {
    path = path.split(/[\[\]\.]/).filter(Boolean);
  }
  path.reduce((acc: any, key: any, index: number, arr) => {
    if (!res) {
      res = acc;
    }
    if (key in acc) {
      return acc[key];
    }
    if (index === arr.length - 1) {
      return updateValue(acc, key, updater);
    }
    return setValue(acc, key, {});
  }, obj);
  return res;
};


export const values = (obj: any) => Object.values(obj);

export const valuesIn = (obj: { [key: string]: any }) => {
  const res = [];
  for (let key in obj) {
    res.push(obj[key]);
  }
  return res;
};


















