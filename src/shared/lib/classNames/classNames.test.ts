import { classNames } from "./classNames";

describe("classNames", () => {
  it("works with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  it("works with additional class", () => {
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
      "someClass class1 class2",
    );
  });
  it("works with mods", () => {
    expect(
      classNames("someClass", { hover: true, scrollable: true }, [
        "class1",
        "class2",
      ]),
    ).toBe("someClass class1 class2 hover scrollable");
  });
  it("works with mods when one of them is false", () => {
    expect(
      classNames("someClass", { hover: true, scrollable: false }, [
        "class1",
        "class2",
      ]),
    ).toBe("someClass class1 class2 hover");
  });
  it("works with mods when one of them is undefined", () => {
    expect(
      classNames("someClass", { hover: true, scrollable: false }, [
        "class1",
        "class2",
      ]),
    ).toBe("someClass class1 class2 hover");
  });
});
