
expect.extend({
    // is used in src-solution-iots:
    toEqualWithInfo(received, expected, info: string) {
        return {
            pass: this.equals(received, expected),

            // we need to be able to handle a .not. prefix -> invert the error msg in this case:
            message: (): string => info +
                '\n\n' +
                `Expected: ${this.isNot ? "not " : ""}${this.utils.printExpected(expected)}\n` +
                `Received: ${this.utils.printReceived(received)}`,
        };
    },
});
