import {fold} from "fp-ts/Option";
import * as t from "io-ts";

import {RawGETType, validate} from "../src-solution-iots-alt/validation";
import {compareStructure} from "./expectHelpers";

export const expectCall = (real: any, expected: any, info: string): void => { // eslint-disable-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
    expect(real).toEqualWithInfo(expected, info);
}

export const expectStructure = (real: any, expected: any, excludedPathEndpoints: string[] = []): void => { // eslint-disable-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
    compareStructure(real, expected, [], expectCall, excludedPathEndpoints);
}

export const validationSuccessfulTemplate = <T>(codec: t.Type<T>) => (daten: RawGETType, done: jest.DoneCallback): void =>
    validate<T>(daten, codec, "",
        fold(() => {
            done.fail("Validation unexpectedly failed");
        }, (x: T) => {
            expectStructure(x, daten)
            done();
        }))

export const validationFailsTemplate = <T>(codec: t.Type<T>) => (daten: RawGETType, done: jest.DoneCallback): void =>
    validate<T>(daten, codec, "",
        fold(() => {
            done();
        }, (_: T) => {
            done.fail("Validation unexpectedly succeeded");
        }))
