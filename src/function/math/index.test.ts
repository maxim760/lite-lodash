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
} from ".";

describe("math", () => {
  describe("add", () => {
    it("success", () => {
      expect(add(6, 4)).toBe(10);
    });
  });
  describe("ceil", () => {
    it("without args", () => {
      expect(ceil(4.006)).toBe(5);
    });
    it("negative degree", () => {
      expect(ceil(6.004, 2)).toBe(6.01);
    });
    it("positive degree", () => {
      expect(ceil(6040, -2)).toBe(6100);
    });
  });
  describe("divide", () => {
    it("success", () => {
      expect(divide(6, 4)).toBe(1.5);
    });
  });
  describe("floor", () => {
    it("without args", () => {
      expect(floor(4.006)).toBe(4);
    });
    it("negative degree", () => {
      expect(floor(0.046, 2)).toBe(0.04);
    });
    it("positive degree", () => {
      expect(floor(4060, -2)).toBe(4000);
    });
  });
  describe("max", () => {
    it("success", () => {
      expect(max([4, 2, 8, 6])).toBe(8);
    });
    it("empty array", () => {
      expect(max([])).toBeUndefined();
    });
  });
  describe("maxBy", () => {
    const objects = [{ n: 1 }, { n: 2 }];
    it("function", () => {
      expect(
        maxBy(objects, function (o: any) {
          return o.n;
        })
      ).toEqual({ n: 2 });
    });
    it("key", () => {
      expect(maxBy(objects, "n")).toEqual({ n: 2 });
    });
  });
  describe("mean", () => {
    it("success", () => {
      expect(mean([4, 2, 8, 6])).toBe(5);
    });
  });
  describe("meanBy", () => {
    const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
    it("function", () => {
      expect(
        meanBy(objects, function (o: any) {
          return o.n;
        })
      ).toBe(5);
    });
    it("key", () => {
      expect(meanBy(objects, "n")).toBe(5);
    });
  });
  describe("min", () => {
    it("success", () => {
      expect(min([4, 2, 8, 6])).toBe(2);
    });
    it("empty array", () => {
      expect(min([])).toBeUndefined();
    });
  });
  describe("minBy", () => {
    const objects = [{ n: 1 }, { n: 2 }];
    it("function", () => {
      expect(
        minBy(objects, function (o: any) {
          return o.n;
        })
      ).toEqual({ n: 1 });
    });
    it("key", () => {
      expect(minBy(objects, "n")).toEqual({ n: 1 });
    });
  });
  describe("multiply", () => {
    it("success", () => {
      expect(multiply(6, 4)).toBe(24);
    });
  });
  describe("round", () => {
    it("without args", () => {
      expect(round(4.006)).toBe(4);
    });
    it("negative degree", () => {
      expect(round(4.006, 2)).toBe(4.01);
    });
    it("positive degree", () => {
      expect(round(4060, -2)).toBe(4100);
    });
  });
  describe("subtract", () => {
    it("success", () => {
      expect(subtract(6, 4)).toBe(2);
    });
  });
  describe("sum", () => {
    it("success", () => {
      expect(sum([4, 2, 8, 6])).toBe(20);
    });
  });
  describe("sumBy", () => {
    const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
    it("function", () => {
      expect(
        sumBy(objects, function (o: any) {
          return o.n;
        })
      ).toBe(20);
    });
    it("key", () => {
      expect(sumBy(objects, "n")).toBe(20);
    });
  });
});
