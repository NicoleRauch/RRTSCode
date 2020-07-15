
class Monoid<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
    constructor (zeroValue: T, add: (x: T, y: T) => T) { this.zeroValue = zeroValue; this.add = add; }
}

describe('Monoid', () => {
  it("uses the class' functions", () => {
    const numberMonoid =
        new Monoid<number>(0, (x, y) => x + y);

    expect(numberMonoid.zeroValue).toBe(0);
    expect(numberMonoid.add(3, 5)).toBe(8);

    const stringMonoid =
        new Monoid<string>("", (x, y) => x + y);

    expect(stringMonoid.zeroValue).toBe("");
    expect(stringMonoid.add("a", "b")).toBe("ab")

  });
});
