import {Decoder, Validation} from "io-ts";
import {PathReporter} from "io-ts/lib/PathReporter";
import { isRight } from 'fp-ts/Either';
import {none, Option, some} from "fp-ts/Option";
import {logToConsole} from "./logHelper";

export type RawGETType = Record<string, unknown> | Record<string, unknown>[] | null

export const validate = <T>(
    toValidate: RawGETType,
    iotsType: Decoder<RawGETType, T>,
    logMessage: string,
    callback: (x: Option<T>) => void): void => {
    const result: Validation<T> = iotsType.decode(toValidate);
    logToConsole(logMessage + " Import:", PathReporter.report(result));
    if (isRight(result)) {
        callback(some(result.right));
    } else {
        logToConsole("Import failed");
        callback(none);
    }
};
