import {Decoder, Validation} from "io-ts";
import {PathReporter} from "io-ts/lib/PathReporter";
import { isRight } from 'fp-ts/Either';

export type RawGETType = Record<string, unknown> | Record<string, unknown>[] | null

export const validiere = <T>(
    zuValidieren: RawGETType,
    iotsType: Decoder<RawGETType, T>,
    logMessage: string,
    callback: (x: T) => void): void => {
    const result: Validation<T> = iotsType.decode(zuValidieren);
    console.log(logMessage + " Import:", PathReporter.report(result)); // eslint-disable-line no-console
    if (isRight(result)) {
        callback(result.right);
    } else {
        console.log("Import fehlgeschlagen");
    }
};
