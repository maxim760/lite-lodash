import { clump, inRange, random } from ".";

describe("number", () => {
  describe("clump", () => {
    it("> max", () => {
      expect(clump(10, -5, 5)).toBe(5);
    });
    it("< min", () => {
      expect(clump(-10, -5, 5)).toBe(-5);
    });
    it("normal", () => {
      expect(clump(3, -5, 5)).toBe(3);
    });
  });

  describe("inRange", () => {
    it("success", () => {
      expect(inRange(3, 2, 4)).toBeTrue();
      expect(inRange(4, 8)).toBeTrue();
      expect(inRange(1.2, 2)).toBeTrue();
      expect(inRange(-3, -2, -6)).toBeTrue();
    });

    it("fail", () => {
      expect(inRange(4, 2)).toBeFalse();
      expect(inRange(2, 2)).toBeFalse();
      expect(inRange(5.2, 2)).toBeFalse();
    });
  });

  describe("random", () => {
    it("exist min and max, not float", () => {
      const reses = Array.from({ length: 100 }, () => random(0, 5));
      reses.forEach((res) => {
        expect(res >= 0).toBeTrue();
        expect(res <= 5).toBeTrue();
        expect(Number.isInteger(res)).toBeTrue();
      });
    });

    it("exist max, not float", () => {
      const reses = Array.from({ length: 100 }, () => random(5));
      reses.forEach((res) => {
        expect(res >= 0).toBeTrue();
        expect(res <= 5).toBeTrue();
        expect(Number.isInteger(res)).toBeTrue();
      });
    });

    it("exist max, float", () => {
      const reses = Array.from({ length: 100 }, () => random(5, true));
      reses.forEach((res) => {
        expect(res >= 0).toBeTrue();
        expect(res <= 5).toBeTrue();
        expect(Number.isInteger(res)).toBeFalse();
      });
    });
    it("min float and max fload and not define param floating", () => {
      const reses = Array.from({ length: 100 }, () => random(1.2, 5.2));
      reses.forEach((res) => {
        expect(res >= 1.2).toBeTrue();
        expect(res <= 5.2).toBeTrue();
        expect(Number.isInteger(res)).toBeFalse();
      });
    });
  });
});
