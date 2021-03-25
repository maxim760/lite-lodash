import {
  camelCase,
  capitalize,
  deburr,
  endsWith,
  escape,
  escapeRegExp,
  kebabCase,
  lowerCase,
  lowerFirst,
  pad,
  padEnd,
  padStart,
  parseIntLodash,
  repeat,
  replace,
  snakeCase,
  split,
  startCase,
  startsWith,
  toLower,
  toUpper,
  trim,
  trimStart,
  trimEnd,
  truncate,
  unescape,
  upperCase,
  upperFirst,
  words,
} from ".";

describe("string", () => {
  describe("camelCase", () => {
    it("2 words", () => {
      expect(camelCase("Foo Bar")).toBe("fooBar");
    });
    it("2 words with space", () => {
      expect(camelCase("          Foo Bar")).toBe("fooBar");
    });
    it("2 words with dash in lowercase", () => {
      expect(camelCase("--foo-bar--")).toBe("fooBar");
    });
    it("2 words with underscore in uppercase", () => {
      expect(camelCase("__FOO_BAR__")).toBe("fooBar");
    });
    it("russian lang", () => {
      expect(camelCase("__лол_КЕК___!!")).toBe("лолКек");
    });
  });
  describe("capitalize", () => {
    it("success", () => {
      expect(capitalize("FRED")).toBe("Fred");
    });
  });
  describe("deburr", () => {
    it("success", () => {
      expect(deburr("déjà vu")).toBe("deja vu");
    });
    it("russian", () => {
      expect(deburr("ёж")).toBe("еж");
    });
  });
  describe("endsWith", () => {
    it("success", () => {
      expect(endsWith("abc", "c")).toBeTrue();
    });
    it("success  3 params", () => {
      expect(endsWith("abc", "b", 2)).toBeTrue();
    });
    it("fail", () => {
      expect(endsWith("abc", "b")).toBeFalse();
    });
  });
  describe("escape", () => {
    it("success", () => {
      expect(escape("fred, barney, & pebbles")).toBe(
        "fred, barney, &amp; pebbles"
      );
    });
  });
  describe("escapeRegExp", () => {
    it("success", () => {
      expect(escapeRegExp("[lodash](https://lodash.com/)")).toBe(
        "[lodash](https://lodash.com/)"
      );
    });
  });
  describe("kebabCase", () => {
    it("2 words", () => {
      expect(kebabCase("Foo Bar")).toBe("foo-bar");
    });
    it("2 words with dashin lowercase", () => {
      expect(kebabCase("--foo-bar--")).toBe("foo-bar");
    });
    it("2 words with underscore in uppercase", () => {
      expect(kebabCase("__FOO_BAR__")).toBe("foo-bar");
    });
    it("russian lang", () => {
      expect(kebabCase("__лол_КЕК___!!")).toBe("лол-кек");
    });
  });
  describe("lowerCase", () => {
    it("2 words", () => {
      expect(lowerCase("Foo Bar")).toBe("foo bar");
    });
    it("2 words with dashin lowercase", () => {
      expect(lowerCase("--foo-bar--")).toBe("foo bar");
    });
    it("2 words with underscore in uppercase", () => {
      expect(lowerCase("__FOO_BAR__")).toBe("foo bar");
    });
    it("russian lang", () => {
      expect(lowerCase("__лол_КЕК___!!")).toBe("лол кек");
    });
  });
  describe("lowerFirst", () => {
    it("all upper", () => {
      expect(lowerFirst("FRED")).toBe("fRED");
    });
    it("only first upper", () => {
      expect(lowerFirst("Fred")).toBe("fred");
    });
  });
  describe("pad", () => {
    it("not change", () => {
      expect(pad("abc", 3)).toBe("abc");
    });
    it("add default sym", () => {
      expect(pad("abc", 8)).toBe("  abc   ");
    });
    it("add custom sym", () => {
      expect(pad("abc", 8, "_-")).toBe("_-abc_-_");
    });
  });
  describe("padEnd", () => {
    it("not change", () => {
      expect(padEnd("abc")).toBe("abc");
    });
    it("add default sym", () => {
      expect(padEnd("abc", 6)).toBe("abc   ");
    });
    it("add custom sym", () => {
      expect(padEnd("abc", 6, "_-")).toBe("abc_-_");
    });
  });
  describe("padStart", () => {
    it("not change", () => {
      expect(padStart("abc", 3)).toBe("abc");
    });
    it("add default sym", () => {
      expect(padStart("abc", 6)).toBe("   abc");
    });
    it("add custom sym", () => {
      expect(padStart("abc", 6, "_-")).toBe("_-_abc");
    });
  });
  describe("parseIntLodash", () => {
    it("default", () => {
      expect(parseIntLodash("8")).toBe(8);
      expect(parseIntLodash("10")).toBe(10);
    });
    it("remove 0 from start", () => {
      expect(parseIntLodash("008")).toBe(8);
      expect(parseIntLodash("00010")).toBe(10);
    });
  });
  describe("repeat", () => {
    it("x2", () => {
      expect(repeat("abc", 2)).toBe("abcabc");
    });
    it("x3", () => {
      expect(repeat("*", 3)).toBe("***");
    });
    it("empty string", () => {
      expect(repeat("abc", 0)).toBe("");
    });
  });
  describe("replace", () => {
    it("success", () => {
      expect(replace("Hi Fred", "Fred", "Barney")).toBe("Hi Barney");
    });
  });
  describe("snakeCase", () => {
    it("2 words", () => {
      expect(snakeCase("Foo Bar")).toBe("foo_bar");
    });
    it("2 words with dashin lowercase", () => {
      expect(snakeCase("--foo-bar--")).toBe("foo_bar");
    });
    it("2 words with underscore in uppercase", () => {
      expect(snakeCase("__FOO_BAR__")).toBe("foo_bar");
    });
    it("russian lang", () => {
      expect(snakeCase("__лол-КЕК___!!")).toBe("лол_кек");
    });
  });
  describe("split", () => {
    it("success", () => {
      expect(split("a-b-c", "-", 2)).toEqual(["a", "b"]);
    });
  });
  describe("startCase", () => {
    it("2 words", () => {
      expect(startCase("fooBar")).toBe("Foo Bar");
    });
    it("2 words with space", () => {
      expect(startCase("          fooBar")).toBe("Foo Bar");
    });
    it("2 words with dashin lowercase", () => {
      expect(startCase("--foo-bar--")).toBe("Foo Bar");
    });
    it("2 words with underscore in uppercase", () => {
      expect(startCase("__FOO_BAR__")).toBe("FOO BAR");
    });
    it("russian lang", () => {
      expect(startCase("__лол-КЕК___!!")).toBe("Лол КЕК");
    });
  });
  describe("startsWith", () => {
    it("success", () => {
      expect(startsWith("abc", "a")).toBeTrue();
    });
    it("success  3 params", () => {
      expect(startsWith("abc", "b", 1)).toBeTrue();
    });
    it("fail", () => {
      expect(startsWith("abc", "b")).toBeFalse();
    });
  });
  describe("toLower", () => {
    it("2 words", () => {
      expect(toLower("--Foo-Bar--")).toBe("--foo-bar--");
    });
    it("2 words with dashin lowercase", () => {
      expect(toLower("fooBar")).toBe("foobar");
    });
    it("2 words with underscore in uppercase", () => {
      expect(toLower("__FOO_BAR__")).toBe("__foo_bar__");
    });
    it("russian lang", () => {
      expect(toLower("__лол-КЕК___!!")).toBe("__лол-кек___!!");
    });
  });
  describe("toUpper", () => {
    it("2 words", () => {
      expect(toUpper("--Foo-Bar--")).toBe("--FOO-BAR--");
    });
    it("2 words with dashin lowercase", () => {
      expect(toUpper("fooBar")).toBe("FOOBAR");
    });
    it("2 words with underscore in uppercase", () => {
      expect(toUpper("__foo_bar__")).toBe("__FOO_BAR__");
    });
    it("russian lang", () => {
      expect(toUpper("__лол-КЕК___!!")).toBe("__ЛОЛ-КЕК___!!");
    });
  });
  describe("trim", () => {
    it("without params", () => {
      expect(trim("  abc   ")).toBe("abc");
    });
    it("with params", () => {
      expect(trim("-_-abc-_-", "_-")).toBe("abc");
    });
  });
  describe("trimEnd", () => {
    it("without params", () => {
      expect(trimEnd("  abc   ")).toBe("  abc");
    });
    it("with params", () => {
      expect(trimEnd("-_-abc-_-", "_-")).toBe("-_-abc");
    });
  });
  describe("trimStart", () => {
    it("without params", () => {
      expect(trimStart("  abc   ")).toBe("abc   ");
    });
    it("with params", () => {
      expect(trimStart("-_-abc-_-", "_-")).toBe("abc-_-");
    });
  });
  describe("truncate", () => {
    it("not remove txt", () => {
      expect(truncate("abc", 5)).toBe("abc");
      expect(truncate("abc", 4)).toBe("abc");
      expect(truncate("abc", 3)).toBe("abc");
      expect(truncate("abc", 23)).toBe("abc");
    });
    it("remove txt", () => {
      expect(truncate("hello", 4)).toBe("h...");
      expect(truncate("hello", 3)).toBe("...");
      expect(truncate("long long very long", 10)).toBe("long lo...");
    });
  });
  describe("unescape", () => {
    it("success", () => {
      expect(unescape("fred, barney, &amp; pebbles")).toBe(
        "fred, barney, & pebbles"
      );
    });
  });
  describe("upperCase", () => {
    it("2 words", () => {
      expect(upperCase("FooBar")).toBe("FOOBAR");
    });
    it("2 words with dash in lowerCase", () => {
      expect(upperCase("--foo-bar")).toBe("FOO BAR");
    });
    it("2 words with underscore in uppercase", () => {
      expect(upperCase("__foo_bar__")).toBe("FOO BAR");
    });
    it("russian lang", () => {
      expect(upperCase("__лол_КЕК___!!")).toBe("ЛОЛ КЕК");
    });
  });
  describe("upperFirst", () => {
    it("all lower", () => {
      expect(upperFirst("FRED")).toBe("FRED");
    });
    it("all upper", () => {
      expect(upperFirst("fred")).toBe("Fred");
    });
  });
  describe("words", () => {
    it("without pattern", () => {
      expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
    });
    it("my pattern", () => {
      expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
    });
  });
});
