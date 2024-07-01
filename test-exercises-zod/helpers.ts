import * as R from "ramda";


// ==========================================================================
// Deep object comparison:

export const expectCall = (real: unknown, expected: unknown, info: string): void => { // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
  expect(real).toEqualWithInfo(expected, info); // eslint-disable-line @typescript-eslint/no-unsafe-call

};

export const compareStructure = (real: unknown, expected: unknown, path: string[], compareLeaf: (real: unknown, expected: unknown, info: string) => void, excludedPathEndpoints: string[]): void => { // eslint-disable-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types

  /*
  const realType = typeof real;
  const expectedType = typeof expected;

  // special treatment for immutable.js' Map (if required)
  const realIsAMap = I.Map.isMap(real);
  const expectedIsAMap = I.Map.isMap(expected);
  if (realIsAMap || expectedIsAMap) {
      compareLeaf(realIsAMap ? "Map" : realType, expectedIsAMap ? "Map" : expectedType, path.join(" - "))
      // expect(realIsAMap ? "Map" : realType).toEqualWithInfo(expectedIsAMap ? "Map" : expectedType, path.join(" - "));
  }

  if (realIsAMap) {
      real = real.toObject(); // flache Konvertierung; tiefe Konvertierung mit .toJS() falls erforderlich
  }
  if (expectedIsAMap) {
      expected = expected.toObject(); // flache Konvertierung; tiefe Konvertierung mit .toJS() falls erforderlich
  }
  */

  // der Typ von null ist object ... darum Doppelprüfung:
  if (real !== null && expected !== null && real instanceof Object && expected instanceof Object) {
    R.union(Object.keys(real), Object.keys(expected)).forEach(key => {
      compareStructure(real[key as keyof typeof real], expected[key as keyof typeof expected], path.concat(key), compareLeaf, excludedPathEndpoints);
    });
  } else {
    const lastInPath = R.last(path);
    if (lastInPath === undefined || !excludedPathEndpoints.includes(lastInPath)) { // Spezialbehandlung für Protokolleinträge
      compareLeaf(real, expected, path.join(" - "));
      // expect(real).toEqualWithInfo(expected, path.join(" - "));
    }
  }
};

export const expectStructure = (real: unknown, expected: unknown, excludedPathEndpoints: string[] = ["timestampInMillis", "eventId"]): void => { // eslint-disable-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
  compareStructure(real, expected, [], expectCall, excludedPathEndpoints);
};

