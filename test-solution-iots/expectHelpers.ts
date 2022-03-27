// import * as I from "immutable";
import * as R from "ramda";

export const compareStructure = (real: unknown, expected: unknown, path: string[], compareLeaf: (real: any, expected: any, info: string) => void, excludedPathEndpoints: string[]): void => { // eslint-disable-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types

    const realType = typeof real;
    const expectedType = typeof expected;

    /* when Immutable.Map is being used:

    // special treatment for Map
    const realIsAMap = I.Map.isMap(real);
    const expectedIsAMap = I.Map.isMap(expected);
    if (realIsAMap || expectedIsAMap) {
        compareLeaf(realIsAMap ? "Map" : realType, expectedIsAMap ? "Map" : expectedType, path.join(" - "))
        // expect(realIsAMap ? "Map" : realType).toEqualWithInfo(expectedIsAMap ? "Map" : expectedType, path.join(" - "));
    }

    if (realIsAMap) {
        real = real.toObject(); // shallow conversion; deep conversion with .toJS() if necessary
    }
    if (expectedIsAMap) {
        expected = expected.toObject(); // shallow conversion; deep conversion with .toJS() if necessary
    }
    */

    // the type of null is object ... therefore check separately:
    if (real !== null && expected !== null && realType === "object" && expectedType === "object") {
        const realObject: Record<string, unknown> = real as Record<string, unknown>;
        const expectedObject: Record<string, unknown> = expected as Record<string, unknown>;
        R.union(Object.keys(realObject), Object.keys(expectedObject)).forEach(key => {
            compareStructure(realObject[key], expectedObject[key], path.concat(key), compareLeaf, excludedPathEndpoints);
        });
    } else {
        const lastInPath = R.last(path);
        if (lastInPath === undefined || !excludedPathEndpoints.includes(lastInPath)) {
            compareLeaf(real, expected, path.join(" - "));
        }
    }
};

