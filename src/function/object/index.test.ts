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
} from ".";

describe("object", () => {
  describe("assign", () => {
    function Foo() {
      //@ts-ignore
      this.a = 1;
    }

    function Bar() {
      //@ts-ignore
      this.c = 3;
    }
    Foo.prototype.b = 2;
    Bar.prototype.d = 4;
    test("should assign", () => {
      //@ts-ignore
      expect(assign({ a: 0 }, new Foo(), new Bar())).toEqual({ a: 1, c: 3 });
    });
  });
  describe("assignIn", () => {
    function Foo() {
      //@ts-ignore
      this.a = 1;
    }

    function Bar() {
      //@ts-ignore
      this.c = 3;
    }
    Foo.prototype.b = 2;
    Bar.prototype.d = 4;
    test("should assignIn", () => {
      //@ts-ignore
      expect(assignIn({ a: 0 }, new Foo(), new Bar())).toEqual({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      });
    });
  });
  describe("assignWith", () => {
    function customizer(objValue: any, srcValue: any) {
      return !objValue ? srcValue : objValue;
    }
    test("should assignWith", () => {
      //@ts-ignore
      expect(assignWith({ a: 1 }, { b: 2 }, { a: 3 }, customizer)).toEqual({
        a: 1,
        b: 2,
      });
    });
  });
  describe("assignInWith", () => {
    function customizer(objValue: any, srcValue: any) {
      return !objValue ? srcValue : objValue;
    }
    function Foo() {
      //@ts-ignore
      this.a = 1;
    }

    function Bar() {
      //@ts-ignore
      this.d = 3;
    }
    Foo.prototype.b = 2;
    Bar.prototype.d = 4;
    test("should assignInWith", () => {
      //@ts-ignore
      expect(assignInWith({}, new Foo(), new Bar(), customizer)).toEqual({
        a: 1,
        b: 2,
        d: 3,
      });
    });
  });
  describe("at", () => {
    const object = { a: [{ b: { c: 3 } }, 4] };
    test("should return res", () => {
      expect(at(object, ["a[0].b.c", "a[1]"])).toEqual([3, 4]);
    });
  });
  describe("create", () => {
    function Shape() {
      //@ts-ignore
      this.x = 0;
      //@ts-ignore
      this.y = 0;
    }

    function Circle() {
      //@ts-ignore
      Shape.call(this);
    }

    Circle.prototype = create(Shape.prototype, {
      constructor: Circle,
    });

    //@ts-ignore
    var circle = new Circle();
    test("instanse of circle", () => {
      expect(circle).toBeInstanceOf(Circle);
    });
    test("instanse of shape", () => {
      expect(circle).toBeInstanceOf(Shape);
    });
  });

  describe("defaults", () => {
    test("success", () => {
      expect(defaults({ a: 1 }, { b: 2 }, { a: 3 })).toEqual({ a: 1, b: 2 });
    });
  });
  describe("defaultsDeep", () => {
    test("success", () => {
      expect(defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } })).toEqual({
        a: { b: 2, c: 3 },
      });
    });
  });

  describe("findKey", () => {
    var users = {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true },
    };
    test("function", () => {
      expect(
        findKey(users, function (o: any) {
          return o.age < 40;
        })
      ).toBe("barney");
    });
    test("obj", () => {
      expect(findKey(users, { age: 1, active: true })).toBe("pebbles");
    });
    test("array", () => {
      expect(findKey(users, ["active", false])).toBe("fred");
    });
    test("string (key)", () => {
      expect(findKey(users, "active")).toBe("barney");
    });
  });

  describe("findLastKey", () => {
    var users = {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true },
    };
    test("function", () => {
      expect(
        findLastKey(users, function (o: any) {
          return o.age < 40;
        })
      ).toBe("pebbles");
    });
    test("obj", () => {
      expect(findLastKey(users, { age: 36, active: true })).toBe("barney");
    });
    test("array", () => {
      expect(findLastKey(users, ["active", false])).toBe("fred");
    });
    test("string (key)", () => {
      expect(findLastKey(users, "active")).toBe("pebbles");
    });
  });

  describe("forIn", () => {
    function Foo() {
      //@ts-ignore
      this.a = 1;
      //@ts-ignore
      this.b = 2;
    }

    Foo.prototype.c = 3;

    const arr: any[] = [];
    //@ts-ignore
    forIn(new Foo(), function (value, key) {
      arr.push(key);
    });
    test("success", () => {
      expect(arr).toEqual(["a", "b", "c"]);
    });
  });

  describe("forInRight", () => {
    function Foo() {
      //@ts-ignore
      this.a = 1;
      //@ts-ignore
      this.b = 2;
    }

    Foo.prototype.c = 3;

    const arr: any[] = [];
    //@ts-ignore
    forInRight(new Foo(), function (value, key) {
      arr.push(key);
    });
    test("success", () => {
      expect(arr).toEqual(["c", "b", "a"]);
    });
  });

  describe("forOwn", () => {
    function Foo() {
      //@ts-ignore
      this.a = 1;
      //@ts-ignore
      this.b = 2;
    }

    Foo.prototype.c = 3;

    const arr: any[] = [];
    //@ts-ignore
    forOwn(new Foo(), function (value, key) {
      arr.push(key);
    });
    test("success", () => {
      expect(arr).toEqual(["a", "b"]);
    });
  });
  describe("forOwnRight", () => {
    function Foo() {
      //@ts-ignore
      this.a = 1;
      //@ts-ignore
      this.b = 2;
    }

    Foo.prototype.c = 3;

    const arr: any[] = [];
    //@ts-ignore
    forOwnRight(new Foo(), function (value, key) {
      arr.push(key);
    });
    test("success", () => {
      expect(arr).toEqual(["b", "a"]);
    });
  });
  describe("functions", () => {
    function Foo() {
      //@ts-ignore
      this.a = () => 12;
      //@ts-ignore
      this.b = 1;
      //@ts-ignore
      this.c = 2;
      //@ts-ignore
      this.d = () => 2;
    }

    Foo.prototype.e = 3;
    Foo.prototype.f = () => 3;

    test("success", () => {
      //@ts-ignore
      expect(functions(new Foo())).toEqual(["a", "d"]);
    });
  });
  describe("functionsIn", () => {
    function Foo() {
      //@ts-ignore
      this.a = () => 12;
      //@ts-ignore
      this.b = 1;
      //@ts-ignore
      this.c = 2;
      //@ts-ignore
      this.d = () => 2;
    }

    Foo.prototype.e = 3;
    Foo.prototype.f = () => 3;

    test("success", () => {
      //@ts-ignore
      expect(functionsIn(new Foo())).toEqual(["a", "d", "f"]);
    });
  });
  describe("get", () => {
    var object = { a: [{ b: { c: 3 } }] };

    test("string", () => {
      expect(get(object, "a[0].b.c")).toBe(3);
    });
    test("array", () => {
      expect(get(object, ["a", "0", "b", "c"])).toBe(3);
    });
    test("array with default", () => {
      expect(get(object, "a.b.c", "default")).toBe("default");
    });
  });
  describe("has", () => {
    var object = { a: { b: 2 } };
    var other = {};
    it("success", () => {
      expect(has(object, "a")).toBeTrue();
      expect(has(object, "a.b")).toBeTrue();
      expect(has(object, ["a", "b"])).toBeTrue();
    });
    it("fail", () => {
      expect(has(other, "a")).toBeFalse();
    });
  });
  describe("hasIn", () => {
    function Foo() {
      //@ts-ignore
      this.d = 1;
    }
    Foo.prototype.a = { b: 2 };
    it("success", () => {
      //@ts-ignore
      expect(hasIn(new Foo(), "a")).toBeTrue();
      //@ts-ignore
      expect(hasIn(new Foo(), "a.b")).toBeTrue();
      //@ts-ignore
      expect(hasIn(new Foo(), ["a", "b"])).toBeTrue();
    });
    it("fail", () => {
      //@ts-ignore
      expect(hasIn(new Foo(), "b")).toBeFalse();
    });
  });
  describe("invert", () => {
    var object = { a: 1, b: 2, c: 1 };
    it("success", () => {
      expect(invert(object)).toEqual({ "1": "c", "2": "b" });
    });
  });
  describe("invertBy", () => {
    var object = { a: 1, b: 2, c: 1 };
    it("without func", () => {
      expect(invertBy(object)).toEqual({ "1": ["a", "c"], "2": ["b"] });
    });
    it("with func", () => {
      expect(
        invertBy(object, function (value: any) {
          return "group" + value;
        })
      ).toEqual({ group1: ["a", "c"], group2: ["b"] });
    });
  });
  describe("invoke", () => {
    var object = { a: [{ b: { c: [1, 2, 3, 4] } }] };
    it("success", () => {
      expect(invoke(object, "a[0].b.c.slice", 1, 3)).toEqual([2, 3]);
    });
  });
  describe("keys", () => {
    function Foo() {
      //@ts-ignore
      this.a = 1;
      //@ts-ignore
      this.b = 2;
    }

    Foo.prototype.c = 3;
    it("success", () => {
      //@ts-ignore
      expect(keys(new Foo())).toEqual(["a", "b"]);
    });
    it("string", () => {
      expect(keys("hi")).toEqual(["0", "1"]);
    });
  });
  describe("keysIn", () => {
    function Foo() {
      //@ts-ignore
      this.a = 1;
      //@ts-ignore
      this.b = 2;
    }

    Foo.prototype.c = 3;
    it("success", () => {
      //@ts-ignore
      expect(keysIn(new Foo())).toEqual(["a", "b", "c"]);
    });
  });
  describe("mapKeys", () => {
    it("success", () => {
      expect(
        mapKeys({ a: 1, b: 2 }, function (value: any, key: any) {
          return key + value;
        })
      ).toEqual({ a1: 1, b2: 2 });
    });
  });
  describe("mapValues", () => {
    var users = {
      fred: { user: "fred", age: 40 },
      pebbles: { user: "pebbles", age: 1 },
    };
    it("function", () => {
      expect(
        mapValues(users, function (o: any) {
          return o.age;
        })
      ).toEqual({ fred: 40, pebbles: 1 });
    });
    it("prop of object", () => {
      expect(mapValues(users, "age")).toEqual({ fred: 40, pebbles: 1 });
    });
  });
  describe("merge", () => {
    var object = {
      a: [{ b: 2 }, { d: 4 }],
    };

    var other = {
      a: [{ c: 3 }, { e: 5 }],
    };
    it("success", () => {
      expect(merge(object, other)).toEqual({
        a: [
          { b: 2, c: 3 },
          { d: 4, e: 5 },
        ],
      });
    });
  });
  describe("mergeWith", () => {
    function customizer(objValue: any, srcValue: any) {
      if (Array.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
    }
    var object = { a: [1], b: [2] };
    var other = { a: [3], b: [4] };
    it("success", () => {
      expect(mergeWith(object, other, customizer)).toEqual({
        a: [1, 3],
        b: [2, 4],
      });
    });
  });
  describe("omit", () => {
    var object = { a: 1, b: "2", c: 3 };

    it("success", () => {
      expect(omit(object, ["a", "c"])).toEqual({ b: "2" });
    });
  });
  describe("omitBy", () => {
    var object = { a: 1, b: "2", c: 3 };
    it("success", () => {
      expect(omitBy(object, (a: any) => typeof a === "number")).toEqual({
        b: "2",
      });
    });
  });
  describe("pick", () => {
    var object = { a: 1, b: "2", c: 3 };
    it("success", () => {
      expect(pick(object, ["a", "c"])).toEqual({ a: 1, c: 3 });
    });
  });
  describe("pickBy", () => {
    var object = { a: 1, b: "2", c: 3 };

    it("success", () => {
      expect(pickBy(object, (a: any) => typeof a === "number")).toEqual({
        a: 1,
        c: 3,
      });
    });
  });
  describe("result", () => {
    var object = { a: [{ b: { c1: 3, c2: () => 4 } }] };

    it("success string", () => {
      expect(result(object, "a[0].b.c1")).toEqual(3);
    });
    it("success func", () => {
      expect(result(object, "a[0].b.c2")).toEqual(4);
    });
    it("string default value", () => {
      expect(result(object, "a[0].b.c3", "default")).toEqual("default");
    });
    it("func default value", () => {
      expect(result(object, "a[0].b.c3", () => "default")).toEqual("default");
    });
  });
  describe("set", () => {
    var object: any = { a: [{ b: { c: 3 } }] };
    it("string", () => {
      set(object, "a[0].b.c", 4);
      expect(object.a[0].b.c).toEqual(4);
    });
    it("array", () => {
      set(object, ["x", "0", "y", "z"], 5);
      expect(object.x[0].y.z).toEqual(5);
    });
  });
  describe("setWith", () => {
    var object = {};

    it("success", () => {
      setWith(object, "[0][1]", "a", Object);
      expect(object).toEqual({
        "0": { "1": "a" },
      });
    });
  });
  describe("toPairs", () => {
    function Foo() {
      //@ts-ignore
      this.a = 1;
      //@ts-ignore
      this.b = 2;
    }

    Foo.prototype.c = 3;
    it("success", () => {
      //@ts-ignore
      expect(toPairs(new Foo())).toEqual([
        ["a", 1],
        ["b", 2],
      ]);
    });
  });
  describe("toPairsIn", () => {
    function Foo() {
      //@ts-ignore
      this.a = 1;
      //@ts-ignore
      this.b = 2;
    }

    Foo.prototype.c = 3;
    it("success", () => {
      //@ts-ignore
      expect(toPairsIn(new Foo())).toEqual([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ]);
    });
  });
  describe("transform", () => {
    it("array", () => {
      expect(
        transform(
          [2, 3, 4],
          function (result: any, n: any) {
            result.push((n *= n));
            return n % 2 == 0;
          },
          []
        )
      ).toEqual([4, 9]);
    });
    it("object", () => {
      expect(
        transform(
          { a: 1, b: 2, c: 1 },
          function (result: any, value: any, key: any) {
            (result[value] || (result[value] = [])).push(key);
          },
          {}
        )
      ).toEqual({ "1": ["a", "c"], "2": ["b"] });
    });
  });
  describe("unset", () => {
    test("path string", () => {
      var object = { a: [{ b: { c: 7 } }] };
      expect(unset(object, "a[0].b.c")).toBeTrue();
      expect(object).toEqual({ a: [{ b: {} }] });
    });
    test("path array", () => {
      var object = { a: [{ b: { c: 7 } }] };
      expect(unset(object, ["a", "0", "b", "c"])).toBeTrue();
      expect(object).toEqual({ a: [{ b: {} }] });
    });
  });
  describe("update", () => {
    var object = { a: [{ b: { c: 3 } }] };

    test("prop is exist", () => {
      expect(object.a[0].b.c).toBe(3);
      update(object, "a[0].b.c", function (n: number) {
        return n * n;
      });
      expect(object.a[0].b.c).toBe(9);
    });
    test("prop not is exist", () => {
      //@ts-ignore
      expect(object.x).toBeNil();
      update(object, "x[0].y.z", function (n: number) {
        return n ? n + 1 : 0;
      });
      //@ts-ignore
      expect(object.x[0].y.z).toBe(0);
    });
  });
  describe("updateWith", () => {
    var object = {};
    updateWith(object, "[0][1]", () => "a", Object);
    test("success", () => {
      expect(object).toEqual({ "0": { "1": "a" } });
    });
  });
  describe("values", () => {
    function Foo() {
      //@ts-ignore
      this.a = 1;
      //@ts-ignore
      this.b = 2;
    }

    Foo.prototype.c = 3;
    test("function", () => {
      //@ts-ignore
      const foo = new Foo();
      expect(values(foo)).toEqual([1, 2]);
    });
    test("string", () => {
      expect(values("hi")).toEqual(["h", "i"]);
    });
  });
  describe("valuesIn", () => {
    function Foo() {
      //@ts-ignore
      this.a = 1;
      //@ts-ignore
      this.b = 2;
    }

    Foo.prototype.c = 3;
    test("function", () => {
      //@ts-ignore
      const foo = new Foo();
      expect(valuesIn(foo)).toEqual([1,2, 3]);
    });
  });
});
